import { useRef } from 'react'; 
import { StyleSheet, Animated, TouchableOpacity, Easing } from 'react-native';
import { Center, Icon, useColorMode, NativeBaseProvider } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";

function Toggle() {
    const positionButton = useRef(new Animated.Value(0)).current;
    const isOn = useRef(false);

    /*
    * inputRange is boolean
    * outputRange is opacity from 0 to 1 or vice versa
    */
    const initialOpacityOn    = positionButton.interpolate({inputRange:[0, 1],outputRange:[0, 1]});
    const initialOpacityOff   = positionButton.interpolate({inputRange:[0, 1],outputRange:[1, 0]});

    //Toggle Hook to do whatever (in this case, toggle dark/light mode w/ Native Base)
    const { toggleColorMode } = useColorMode();

    //duration is speed of animation, useNativeDriver can be false
    const startAnimToOff = () => {
        Animated.timing(positionButton,{
            toValue:0,
            duration:200,
            easing:Easing.ease,
            useNativeDriver:true
        }).start()
    };

    //duration is speed of animation, useNativeDriver can be false
    const startAnimToOn = () => {
        Animated.timing(positionButton,{
            toValue:1,
            duration:200,
            easing:Easing.ease,
            useNativeDriver:true
        }).start()
    };

    // toggleColorMode() : aforementioned dark/light mode toggle
    const onPress = () => {
        if (isOn.current) {
            startAnimToOff();
            isOn.current = false;
            toggleColorMode();
        } else {
            startAnimToOn();
            isOn.current = true;
            toggleColorMode();
        }
    };

    return (
      <Center flex={1} _dark={{ bg: "coolGray.800" }} _light={{ bg: "coolGray.300" }}>
        <TouchableOpacity style={styles.toggleContainer} activeOpacity={1} onPress={onPress} >
            <Animated.View style={styles.mainStyes} >                    
                <Animated.View style={[styles.bulbs, { opacity: initialOpacityOff }]}>                          
                    <Icon as={MaterialIcons} name="lightbulb" size="lg" color="#fff000" />
                </Animated.View>
                <Animated.View style={[styles.bulbs, { opacity: initialOpacityOn }]}>
                    <Icon as={MaterialIcons} name="lightbulb-outline" size="lg"r color="white" />
                </Animated.View>                    
            </Animated.View>
        </TouchableOpacity>
      </Center>
    );
}

export default () => {
    return (
      <NativeBaseProvider>
        <Toggle />
      </NativeBaseProvider>
    );
};

const styles = StyleSheet.create({
    toggleContainer: {
      backgroundColor: "#111",
      padding: 20
    },
    mainStyes: {
        height: 44,
        width: 44,
        position: "relative",
    },
    bulbs: {
        position: "absolute",
        left: 10,
        top: 10,
    } 
});
