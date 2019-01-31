import Reactotron from 'reactotron-react-native';
let Tron;
let DeviceInfo;

if (__DEV__) {
  DeviceInfo = require('react-native-device-info');
  Tron = Reactotron.configure(DeviceInfo.isEmulator() ? {} : { host: '192.168.2.10' })
    .useReactNative()
    .connect();
}

export default Tron;
