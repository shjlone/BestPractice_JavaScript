import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementAsync, incrementByAmount, selectCount } from "./counterSlice";
import { useState } from "react";
import { Button, TextInput } from "react-native";


// redux框架基础用法示例
export function ReduxCounter() {
  const count = useSelector(selectCount)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (<View>
    <Button title="+" onPress={() => dispatch(increment())} />
    <Text>{count}</Text>
    <Button title="-" onPress={() => dispatch(decrement())} />
    <TextInput value={incrementAmount} onChangeText={setIncrementAmount} />
    <Button title="Add Amount" onPress={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))} />
    <Button title="Add Async" onPress={() => dispatch(incrementAsync(Number(incrementAmount) || 0))} />
  </View>)
}