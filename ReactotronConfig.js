import {NativeModules} from 'react-native'
import Reactotron from 'reactotron-react-native'

let scriptHostname
const scriptURL = NativeModules.SourceCode.scriptURL
scriptHostname = scriptURL.split('://')[1].split(':')[0]

Reactotron
  //.configure()
  .configure({host: scriptHostname}) // use when runnig on ios device
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!
