
---

# Project Setup for Jest, Babel, and TypeScript

## Prerequisites
- **Node.js** and **npm** (Node Package Manager) installed.

## Table of Contents
1. [Install Jest for Unit Testing](#1-install-jest-for-unit-testing)
2. [Install Babel for Transpilation](#2-install-babel-for-transpilation)
3. [Setup Jest in `package.json`](#3-setup-jest-in-packagejson)
4. [Create `babel.config.json` Configuration](#4-create-babelconfigjson-configuration)
5. [Install TypeScript](#5-install-typescript)
6. [Initialize TypeScript Project](#6-initialize-typescript-project)
7. [Configure TypeScript for Jest](#7-configure-typescript-for-jest)

---

### 1. Install Jest for Unit Testing
Jest is a popular testing framework for JavaScript projects.

Install Jest and its TypeScript types as development dependencies:
```bash
npm install --save-dev jest @types/jest
```
- [Jest Documentation](https://www.npmjs.com/package/jest)

---

### 2. Install Babel for Transpilation
Babel helps transpile modern JavaScript and TypeScript code to a version that can be run in various environments.

Install `babel-jest` and `@babel/preset-env` as development dependencies:
```bash
npm install --save-dev babel-jest @babel/preset-env
```
- [Babel Setup Guide](https://babeljs.io/setup#installation)

---

### 3. Setup Jest in `package.json`
Add a script for running tests with Jest in your `package.json` file. Additionally, configure Jest to use `babel-jest` for transforming `.ts`, `.tsx`, `.js`, and `.jsx` files.

In `package.json`, add the following:
```json
"scripts": {
    "test": "jest"
},
"jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
}
```

---

### 4. Create `babel.config.json` Configuration
Create a file named `babel.config.json` in the root directory of your project. This file will contain Babel presets needed to transpile your code.

Add the following configuration:
```json
{
    "presets": [
        "@babel/preset-env"
    ]
}
```

---

### 5. Install TypeScript
TypeScript adds static typing to JavaScript, enhancing code quality and maintainability.

Install TypeScript as a development dependency:
```bash
npm install --save-dev typescript
```
- [TypeScript Documentation](https://www.npmjs.com/package/typescript)

---

### 6. Initialize TypeScript Project
Set up a TypeScript configuration file by running:
```bash
npx tsc --init
```

This will create a `tsconfig.json` file, which contains various options for TypeScript configuration. To ensure compatibility, change the `"module"` setting to `"ES6"` as follows:
```json
{
    "compilerOptions": {
        "module": "ES6"
    }
}
```

---

### 7. Configure TypeScript for Jest
To enable Jest to understand TypeScript files, configure Babel to work with TypeScript by adding the necessary presets and dependencies.

1. Install the preset for TypeScript support in Babel:
    ```bash
    npm install --save-dev @babel/preset-typescript
    ```
2. Update `babel.config.json` to include `@babel/preset-typescript`:
    ```json
    {
        "presets": [
            "@babel/preset-env",
            "@babel/preset-typescript"
        ]
    }
    ```
3. Install `ts-jest` to allow Jest to process TypeScript files:
    ```bash
    npm install --save-dev ts-jest
    ```
4. Optionally, install `@jest/globals` for global Jest functions:
    ```bash
    npm install --save-dev @jest/globals
    ```

- [Jest TypeScript Setup Guide](https://jestjs.io/docs/getting-started)

---

Your setup for Jest, Babel, and TypeScript is now complete! You can run your tests using:
```bash
npm test
```

---
