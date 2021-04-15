# Multi Screen Starter with Expo

web demo: [Expo Multi Screen Starter](https://expo-multi-screen-starter.vercel.app)

[![made with expo](https://img.shields.io/badge/MADE%20WITH%20EXPO-000.svg?style=for-the-badge&logo=expo&labelColor=4630eb&logoWidth=20)](https://github.com/expo/expo) [![supports iOS and Android](https://img.shields.io/badge/Platforms-Native-4630EB.svg?style=for-the-badge&logo=EXPO&labelColor=000&logoColor=fff)](https://github.com/expo/expo)

[![follow @calebnance](https://img.shields.io/twitter/follow/calebnance.svg?style=for-the-badge&logo=TWITTER&logoColor=FFFFFF&labelColor=00aced&logoWidth=20&color=lightgray)](https://twitter.com/calebnance)

<p align="center">
  <img src="screenshots/screenshare-6.png?raw=true" />
</p>

### Out of the Box

- Expo SDK 41
- React Navigation v4 & Theme Support!
- iOS 13 Appearance Support (with [react-native-appearance](https://github.com/expo/react-native-appearance))
- Preloading/caching local assets
- SVG custom icon usage
- Checker for the iOS notch: iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max

## Table of Contents

- [install](#install)
- [development on a physical device](#development-on-a-physical-device)
- [linting](#linting)
- [helpful links](#helpful-links)
- [adding linter](#adding-linter-config-to-another-react-project)
- [assets](#assets)
- [device learnings](#device-learnings)
- [demo & release notes](#demo-and-release-notes)

## install

First, make sure you have Expo CLI installed: `npm install -g expo-cli`

Install: `yarn` or `yarn install`

Run Project Locally: `expo start` or `yarn dev`

## development on a physical device

- first, your machine and physical device should be on the same wifi connection
- make sure you have Expo CLI installed globally, if not run:
  - `npm install -g expo-cli`
- then navigate to this project's directory on your machine and run:
  - `yarn dev` or `expo start`
- now download the Expo Client app on your preferred physical device:
  - **Android:** [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - **Apple:** [App Store](https://itunes.apple.com/us/app/expo-client/id982107779)
- scan the QR code generated when this project build started (expo start)
  - **android users:** the QR scanner is built within the Expo Client app! 🤗
  - **ios 11 and later:** you can open your camera app to scan the QR code, apple made the Expo peeps remove the QR scanner from the app for some reason... 🤔
  - **ios 10 and below:** i wrote about a work around to [get expo running on older iOS devices](https://blog.calebnance.com/expo/getting-expo-to-work-on-older-iphones-with-no-qr-support.html)
- having issues? check the [installation page](https://docs.expo.io/versions/latest/introduction/installation) for any pitfalls you may have.

## linting

- run: `yarn lint` for a list of linting warnings/error in cli
- prettier and airbnb config
- make sure you have prettier package installed:
  - [prettier for atom](https://atom.io/packages/prettier-atom)
  - [prettier for vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- then make sure to enable these options (packages → prettier):
  - eslint integration
  - stylelint integration
  - automatic format on save (toggle format on save)
- be aware of the `.prettierignore` file


## helpful links

- [using nvm](https://davidwalsh.name/nvm)
- [setup prettier/eslint within project](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a)


## adding linter config to another react project

- yarn:
  - `yarn add eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier --dev`
- npm:
  - `npm install eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-import-helpers eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier --save-dev`
- then copy over:
  - `.eslintrc`
  - `.prettierignore`
  - `.prettierrc`

## assets

- [black rabbit icon](https://thenounproject.com/search/?q=rabbit&i=1211060) was bought (royalty-free license)
- SVG Icons from [icomoon](https://icomoon.io)

## device learnings

- **ios:** The notch on iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max is **30pt** from top

## demo and release notes

### version: 0.0.2 (current)

- upgraded to [Expo SDK 41](https://blog.expo.io/expo-sdk-41-12cc5232f2ef)
- upgraded to [Expo SDK 40](https://blog.expo.io/expo-sdk-40-is-now-available-d4d73e67da33)
- upgraded to [Expo SDK 39](https://blog.expo.io/expo-sdk-39-is-now-available-4c10aa825e3f)
- upgraded to [Expo SDK 38](https://blog.expo.io/expo-sdk-38-is-now-available-ab6cd30ca2ee)
- upgraded to [Expo SDK 37](https://blog.expo.io/expo-sdk-37-is-now-available-dd5770f066a6)
- upgraded to [Expo SDK 36](https://blog.expo.io/expo-sdk-36-is-now-available-b91897b437fe)
- upgraded to [Expo SDK 35](https://blog.expo.io/expo-sdk-35-is-now-available-beee0dfafbf4)
- upgraded to [React Navigation v4](https://reactnavigation.org/docs/4.x/getting-started)
- upgraded to [Expo SDK 34](https://blog.expo.io/expo-sdk-34-is-now-available-4f7825239319)
- React Navigation Theme Support / Example Usage ([themes docs](https://reactnavigation.org/docs/4.x/themes))
- upgraded to [React Navigation v3](https://reactnavigation.org/docs/3.x/getting-started)

### version: 0.0.1

this starter for a multi screens/stack app is at a good state

- started with [React Navigation v2](https://reactnavigation.org/docs/2.x/getting-started)
- preloading/caching local images (with splash loading screen)
- utility checker for the notch: iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max
- simple jest tests
- svg usage

<p align="left">
  <img src="screenshots/multi-screens_0.0.2.gif?raw=true" width="320" />
</p>
