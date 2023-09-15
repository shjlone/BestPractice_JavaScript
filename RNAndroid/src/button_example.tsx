import React from 'react';
import {
  Button,
  Text,
  View
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';




const ButtonExampleStack = createNativeStackNavigator();


function ButtonExampleHome() {
  const navigation = useNavigation();
  return (
    <View>
      <Button title="Test1" onPress={() => {
        navigation.navigate('ButtonExample1')
      }} />
      <Button title='Test2' onPress={() => {
        navigation.navigate('ButtonExample2')
      }} />
    </View>
  );
}

function ButtonExample1() {



  function MyComp({ title }) {
    return (<View>
      <Text>{title}</Text>
    </View>)
  }

  interface Props {
    title: string,
    color?: string
  }

  function MyTxt({title, color = '#1ACDA5'} : Props) {
    return (<View>
      <Button title={title} color={color} />
    </View>)
  }


  const navigation = useNavigation();
  return (
    <View>
      <Text>ButtonExample1</Text>
      <Button title='Back' onPress={() => {
        navigation.goBack();
      }} />
      <MyComp title='测试文本' />
      <MyTxt title='My Text1' />
      <MyTxt title='My Text2' color='rgb(59, 108, 212)' />


    </View>
  );
}

function ButtonExample2() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>ButtonExample2</Text>
      <Button title='Back' onPress={() => {
        navigation.goBack();
      }} />

    </View>
  );
}


// 使用useNavigation的方式 https://reactnavigation.org/docs/use-navigation/
function ButtonExample() {

  const navigation = useNavigation();

  return (
    <ButtonExampleStack.Navigator>
      <ButtonExampleStack.Screen name="ButtonExampleHome" component={ButtonExampleHome} />
      <ButtonExampleStack.Screen name="ButtonExample1" component={ButtonExample1} options={
        { headerShown: false }
      } />
      <ButtonExampleStack.Screen name="ButtonExample2" component={ButtonExample2} options={
        { headerShown: false }
      } />
    </ButtonExampleStack.Navigator>
  );
}

export default ButtonExample