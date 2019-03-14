import Reactotron from "reactotron-react-native";

Reactotron.configure({ host: "http://localhost:19002" })
  .useReactNative()
  .connect();
