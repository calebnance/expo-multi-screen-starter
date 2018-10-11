# React Native Multi Screen Starter with Expo

- [install](#install)
- [development on a physical device](#development-on-a-physical-device)
- [testing with jest](#testing-with-jest)
- [linting - prettier and airbnb config](#linting-prettier-and-airbnb-config)
- [helpful links](#helpful-links)
- [adding linter](#adding-linter-config-to-another-react-project)
- [assets](#assets)
- [device learnings](#device-learnings)
- [release notes](#release-notes)

Expo | React Navigation v2 | Jest | ESLint/Prettier

**Out of the Box**

- React Navigation v2
- Use of [react-native-screens](https://github.com/kmagiera/react-native-screens) (faster navigation)
- Expo SDK 30 (will always try to keep this on the latest SDK version)
- Preloading/caching local assets (with splash loading screen)
- React Native specific accessibility linting w/ [react-native-a11y](https://github.com/FormidableLabs/eslint-plugin-react-native-a11y)
  - shoutout [FormidableLabs](https://github.com/FormidableLabs) in general 👽
- Checker for the notch: iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max
- Simple Jest testing
- SVG usage


## install
`yarn install`

***note:*** *make sure you at least have node ^v10.8.0*

## development on a physical device
- first, your machine and physical device should be on the same wifi connection
- make sure you have Expo CLI installed globally, if not run:
  - `npm install -g expo-cli`
- then navigate to this project's directory on your machine and run:
  - `expo start`
- now download the Expo Client app on your preferred physical device:
  - **Android:** [Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)
  - **Apple:** [App Store](https://itunes.apple.com/us/app/expo-client/id982107779)
- scan the QR code generated when this project build started (expo start)
  - **android users:** the QR scanner is built within the Expo Client app! 🤗
  - **ios 11 and later:** you can open your camera app to scan the QR code, apple made the Expo peeps remove the QR scanner from the app for some reason... 🤔
  - **ios 10 and below:** i wrote about a work around to [get expo running on older iOS devices](https://blog.calebnance.com/expo/getting-expo-to-work-on-older-iphones-with-no-qr-support.html)
- having issues? check the [installation page](https://docs.expo.io/versions/latest/introduction/installation) for any pitfalls you may have.

## testing with jest
- run: `npm test`
- this will generate
  - a report within the console
  - a html code coverage report within `/coverage/`
- ***helpful notes:***
  - for animation and delays, make sure you add: `jest.useFakeTimers();`

## linting: prettier and airbnb config
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
  - `yarn add eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier --dev`
- npm:
  - `npm install eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react prettier --save-dev`
- then copy over:
  - `.eslintrc`
  - `.prettierignore`
  - `.prettierrc`

## assets
- [black rabbit icon](https://thenounproject.com/search/?q=rabbit&i=1211060) was bought (royalty-free license)
- SVG Icons from [icomoon](https://icomoon.io)

## device learnings
- **ios:**
  - The notch on iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max is **30px** from top

## release notes

### version: 0.0.1 (current)
this starter for a multi screens/stack app is at a good state

- react-navigation v2 ([website](https://reactnavigation.org) | [api](https://reactnavigation.org/docs/en/api-reference.html))
- preloading/caching local images (with splash loading screen)
- utility checker for the notch: iPhoneX, iPhoneXs, iPhoneXr, iPhoneXs Max
- simple jest testing
- svg usage
