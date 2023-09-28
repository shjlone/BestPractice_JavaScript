import { createSlice } from "@reduxjs/toolkit";
import { View } from "react-native";
import { ReduxCounter } from "./features/counter/Counter";




function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <View>
      <Text>{count}</Text>
      <Button title="增加" onPress={increment} />
    </View>
  );
}


export default function ReduxExampleScreen() {
  return (<View>
    <Text>Redux Example</Text>
    <Counter />
    <ReduxCounter />
  </View>)
}