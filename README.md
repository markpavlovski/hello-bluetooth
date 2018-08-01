

![React Native App](http://hello-bluetooth.surge.sh/iphone_demo.png)


## React Native Bluetooth experiment
* `react-native-ble-manager` bluetooth wrapper
* `reactotron` debugger


## Notes on setting things up

### Install reactotron

* [Reactotron](https://infinite.red/reactotron) website
* `brew cask install reactotron` or download app from App Store
* I followed [this tutorial](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md) to configure react native
* Added the following to reactotron config module to allow debugging on the device (iphone):

  ```js
  import Reactotron from 'reactotron-react-native'
  import { NativeModules } from 'react-native'

  const scriptURL = NativeModules.SourceCode.scriptURL
  const scriptHostname = scriptURL.split('://')[1].split(':')[0]

  Reactotron
    //.configure() // use when running on simulator
    .configure({host: scriptHostname})
    .useReactNative()
    .connect()
  ```

* run the app on device with XCode and reactotron will show one connected device and a log in the timeline.


### Running example bluetooth project

* [React Native BLE Manager](https://github.com/innoveit/react-native-ble-manager) repo
* This is an adaptation of the cordova BLE manager
* Followed installation instructions in the `README`
* Downloaded `/example` from the github repo
* Hooked up example App module in `index.js` of this project
* Made sure that in `index.js` we have
```js  
  AppRegistry.registerComponent('hellobluetooth2', () => App)
```
spell out the correct name of my project, or this will throw error when compiled with XCode
