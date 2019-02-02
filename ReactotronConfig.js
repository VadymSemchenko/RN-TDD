import Reactotron from 'reactotron-react-native';
let Tron;
import DeviceInfo from 'react-native-device-info';

if (__DEV__) {
  Tron = Reactotron.configure(DeviceInfo.isEmulator() ? {} : { host: '192.168.2.10' })
    .useReactNative()
    .connect();
}

export default Tron;
