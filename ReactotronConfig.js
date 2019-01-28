import Reactotron from 'reactotron-react-native';
import DeviceInfo from 'react-native-device-info';

const Tron = Reactotron.configure(DeviceInfo.isEmulator() ? {} : { host: '192.168.2.10' })
  .useReactNative()
  .connect();

export default Tron;
