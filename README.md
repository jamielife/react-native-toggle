# React Native Lightbulb Toggle

https://github.com/jamielife/react-native-toggle/assets/411922/9f6dec3f-1834-4745-9f02-03eaafcd60f1

Simple react native toggle using React Native. Package uses Native Base & Material Icons, however any alternative should work.
[See Snack Code](https://snack.expo.dev/@jamielife/rn-nb-darklight-toggle?platform=web). 

## Installation

1. Clone Repo (or copy code/dependencies).
2. Run `NPM Install` or `Yarn Add` to install dependencies.

## Notes

- Any alternative to Native Base *should* work, however I have not tested this. You should be able to test easily by editing [here](https://snack.expo.dev/@jamielife/rn-nb-darklight-toggle?platform=web).
- Any icons should work as well, though currenlt the outline is set to always remain visible while the "yellow" animation happens behind it. To have them fade in/out respectively you'd need to change `outputRange:[1, 1]` to `outputRange:[1, 0]`.
