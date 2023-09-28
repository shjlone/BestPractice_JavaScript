import React, { useReducer, useState } from 'react';
import { Button, ScrollView, Text, View } from "react-native";




interface State {
  count: number
};

type CounterAction =
  | { type: "reset" }
  | { type: "setCount"; value: State["count"] }

const initialState: State = { count: 0 };


function stateReducer(state: State, action: CounterAction): State {

  switch (action.type) {
    case 'reset':
      return initialState;
    case 'setCount':
      return { ...state, count: action.value };
    default:
      throw new Error();
  }
}

function Counter() {
  
  const [state, dispatch] = useReducer(stateReducer, initialState);
  const addFive = () => dispatch({ type: 'setCount', value: state.count + 5 });
  const reset = () => dispatch({ type: 'reset' });
  return (
    <View>
      <Text>欢迎来到我的计算器</Text>
      <Text>Count: {state.count}</Text>
      <Button title='Add 5' onPress={() => {
        addFive();
      }}></Button>
      <Button title='Reset' onPress={() => {
        reset();
      }}></Button>
    </View>
  );
}


export default function HookExampleScreen() {
  return (
    <ScrollView>
      <View>
        <Counter />
      </View>
    </ScrollView>
  );
}