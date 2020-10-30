# ts-project

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### eslint配置
```
npm install eslint sass-loader node-sass @vue/eslint-config-standard @vue/eslint-config-typescrip eslint-plugin-html  lint-staged -D
npm run lint: "vue-cli-service lint" // 检查eslint配置
```

### git使用
```
git init
git add .
git commit -m "creat project"
git branch -M main
git remote add origin https://github.com/galan99/uniapp-ts.git // 若失败执行git remote rm origin
git push -u origin main
```


### 运行、发布 uni-app

```code
npm run dev:%PLATFORM%
npm run build:%PLATFORM%
```

| 值                      | 平台                                                                                                             |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------- |
| app-plus                | app 平台生成打包资源（支持 npm run build:app-plus，可用于持续集成。不支持 run，运行调试仍需在 HBuilderX 中操作） |
| h5                      | H5                                                                                                               |
| mp-alipay               | 支付宝小程序                                                                                                     |
| mp-baidu                | 百度小程序                                                                                                       |
| mp-weixin               | 微信小程序                                                                                                       |
| mp-toutiao              | 字节跳动小程序                                                                                                   |
| mp-qq                   | qq 小程序                                                                                                        |
| mp-360                  | 360 小程序                                                                                                       |
| quickapp-webview        | 快应用通用                                                                                                       |
| quickapp-webview-union  | 快应用联盟                                                                                                       |
| quickapp-webview-huawei | 快应用华为                                                                                                       |

```code