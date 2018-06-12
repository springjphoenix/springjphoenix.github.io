---
title: develop react native project using typescript
draft: false
tags: [react-native, typescript]
category: JavaScript
date: "2018-06-12T15:33:00Z"
---

<!-- more -->

使用typescript开发react-native应用

##### 1、生成项目

```bash
react-native init newshunguang
```

##### 2、添加开发依赖

```bash
yarn add react-native-typescript-transformer typescript tslib ts-jest --dev
```

`react-native-typescript-transformer`是比较关键的一步，它的作用是在构建期间将typescript转换成JavaScript。要达到我们想要的效果，我们需要在项目根目录下创建一个文件：`rn-cli.config.js`：

```javascript
module.exports = {
    getTransformModulePath() {
      return require.resolve('react-native-typescript-transformer')
    },
    getSourceExts() {
      return ['ts', 'tsx'];
    }
}
```

##### 3、添加`tsconfig.json`文件来做一些ts编译的配置

```javascript
{
    "compilerOptions": {
      "target": "es2015",
      "jsx": "react",
      "noEmit": true,
      "moduleResolution": "node",
      "importHelpers": true,
      "allowSyntheticDefaultImports": true,
      "experimentalDecorators": true,
      "locale": "en-us",
      "allowJs": true,
      "skipLibCheck": true
    },
    "exclude": [
      "node_modules"
    ]
}
```

##### 4、添加typings（一些有用的类型的声明）：

```bash
yarn add @types/jest @types/react @types/react-native @types/react-navigation @types/react-redux @types/react-test-renderer --dev
```

##### 5、添加typescript依赖：

```bash
yarn add typescript tslint
```

然后我们需要添加规则，创建一个`tslint.json`文件（可以通过`tslint -init`创建）：

```json
{
    "defaultSeverity": "error",
    "extends": [
        "tslint:recommended"
    ],
    "jsRules": {},
    "rules": {
        "quotemark": [true, "single"],
        "object-literal-sort-keys": false,
        "no-console": [false],
        "ordered-imports": false,
        "no-unused-expression": false,
        "indent": [true, "spaces", 2],
        "arrow-return-shorthand": true,
        "arrow-parens": [false],
        "no-var-requires": false,        
        "no-shadowed-variable": [
          true,
          { "temporalDeadZone": false }
        ],
        "max-line-length":[
            true,
            260
        ]
    },
    "rulesDirectory": ["src/", "App.tsx"]
}
```

到目前为止，我们就可以通过`tsc` 和 `tslint -p tsconfig.json`（执行命令前需要全局安装typsescript 和 tslint：`npm i -g typescript tslint`）来确定我们需要去解决哪些错误了。

##### 6、改造生成的项目

现在执行上一步中的`tsc` 和 `tslint -p tsconfig.json`命令会报错，那么接下来我们就要对生成的项目进行改造。

1）将App.js改为App.tsx；

2）将App.tsx中`import React, { Component } from 'react';`

改为`import * as React from 'react';`。现在执行`tsc`可以发现错误已经消失了；

3）添加`src`目录，将来我们的项目中的一些组件及目录就放在src目录下；

现在运行`react-native run-ios`，如果一切顺利，我们可以看到以下的界面：

![](https://ws1.sinaimg.cn/large/006tKfTcly1fqhy3hyp2cj30h00z8jte.jpg)

##### 7、技术选型

我们选择的一些主要的组件：

1）状态管理：redux、dva

2）路由：react-navigation

3）屏幕适配：react-native-extended-stylesheet

4）组件库、图表：and-mobile native-echarts

5）生产、测试环境配置：react-native-config

```bash
yarn add react-redux redux-logger dva-core react-navigation react-navigation-redux-helpers react-native-extended-stylesheet antd-mobile native-echarts react-native-config
```

