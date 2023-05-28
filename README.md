# Boilerplate and Starter for React Native, Expo, NativeWind and TypeScript [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)

<p align="center">
  <a href="https://creativedesignsguru.com/"><img src="assets/banner.png?raw=true" alt="React Native Starter Template"></a>
</p>

🚀 Boilerplate and Starter for React Native, Expo, NativeWind and TypeScript ⚡️ Made with developer experience first: React Native, Expo, TypeScript, ESLint, Prettier, Husky, Lint-Staged, Jest, Detox, VSCode, NativeWind.

### Features

Developer experience first:

- ⚡ [Expo](https://expo.dev) for mobile development
- ⚛️ [React Native](https://reactnative.dev) for building native apps using React
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [NativeWind](https://www.nativewind.dev), Tailwind CSS for React Native
- 📁 File-based routing with Expo Router
- 📏 Linter with [ESLint](https://eslint.org)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🦺 Unit Testing with Jest and React Testing Library
- 🧪 E2E Testing with Detox
- 💡 Absolute Imports using `@` prefix
- 🗂 VSCode configuration: Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest

### Nextless.js SaaS Boilerplate

Build your SaaS product faster with [React SaaS Boilerplate](https://nextlessjs.com).

[![React SaaS Boilerplate Next.js](https://creativedesignsguru.com/assets/images/themes/next-js-saas-starter-kit.jpg)](https://nextlessjs.com)

### Requirements

- Node.js 14+ and npm
- [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Android Studio Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/ixartz/React-Native-Boilerplate.git my-project-name
cd my-project-name
npm install
```

Then, you can run locally in development mode with live reload:

```shell
npm run dev:ios
# Or
npm run dev:android
```

This will open the app in the iOS simulator or Android emulator.

### Testing

Testing is an important part of the development process and often the neglected one. This starter code comes up with Jest and React Testing Library for unit testing and Detox for E2E testing.

#### Unit Testing

To run the unit tests, run the following command:

```shell
npm run test
```

#### E2E Testing

To run the E2E tests, you first need to run the following command:

```shell
npm run e2e:prepare # Only need to run once
```

Then, you can run the following command to run the E2E tests:

```shell
npm run e2e:ios
# Or
npm run e2e:android
```

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug. Totally open to any suggestions and improvements.

### License

Licensed under the MIT License, Copyright © 2023

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [CreativeDesignsGuru](https://creativedesignsguru.com) [![Twitter](https://img.shields.io/twitter/url/https/twitter.com/cloudposse.svg?style=social&label=Follow%20%40Ixartz)](https://twitter.com/ixartz)

[![React SaaS Boilerplate](https://creativedesignsguru.com/assets/images/themes/next-js-saas-starter-kit.jpg)](https://nextlessjs.com)
