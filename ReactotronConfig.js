import Reactotron from 'reactotron-react-native'
import { NativeModules } from 'react-native'

const scriptURL = NativeModules.SourceCode.scriptURL
const scriptHostname = scriptURL.split('://')[1].split(':')[0]

Reactotron
  //.configure() // use when running on simulator
  .configure({host: scriptHostname}) // use when runnig on ios device
  .useReactNative() // add all built-in react native plugins
  .connect() // let's connect!
