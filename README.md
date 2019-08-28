# Multi Screen Starter with Expo

<p align="center">
  <img src="screenshots/screenshare-6.png?raw=true" />
</p>

### Out of the Box

- Expo SDK 34
- React Navigation v3 & Theme Support!
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
`yarn` or `yarn install`

***note:*** *make sure you at least have node ^v10.8.0*

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

- make sure you have [prettier package](https://atom.io/packages/prettier-atom) installed on your atom/vscode editor
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

- upgraded to [Expo SDK 34](https://blog.expo.io/expo-sdk-34-is-now-available-4f7825239319)
- React Navigation Theme Support / Example Usage ([themes docs](https://reactnavigation.org/docs/en/themes.html))
- React Navigation v3 ([api](https://reactnavigation.org/docs/en/api-reference.html) | [docs](https://reactnavigation.org/docs/en/getting-started.html))

### version: 0.0.1

this starter for a multi screens/stack app is at a good state

- React Navigation v2 ([api](https://reactnavigation.org/docs/en/2.x/api-reference.html) | [docs](https://reactnavigation.org/docs/en/2.x/getting-started.html))
- preloading/caching local images (with splash loading screen)
- utility checker for the notch: iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max
- simple jest tests
- svg usage

<p align="left">
  <img src="screenshots/multi-screens_0.0.2.gif?raw=true" width="320" />
</p>
