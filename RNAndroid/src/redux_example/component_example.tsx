import React, { useState } from 'react';
import {
  Button,
  Image,
  ImageBackground,
  RefreshControl,
  ScrollView,
  Switch,
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
      <Button title='Image' onPress={() => {
        navigation.navigate('ImageExample')
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

  function MyTxt({ title, color = '#1ACDA5' }: Props) {
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
      }} color='#841584' />
      <Button title='Disabled' disabled />

    </View>
  );
}

function ImageExample() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const image = { uri: 'https://legacy.reactjs.org/logo-og.png' };
  return (<View>
    <Text >asdfdsf</Text>
    <Image source={image} style={{ width: 50, height: 50 }} />
    <ImageBackground source={image} resizeMode="cover" >
      <Text style={{ color: 'red', height: 100, textAlign: 'center' }}>Inside</Text>
    </ImageBackground>
    <Switch
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  </View>);
}

// 使用useNavigation的方式 https://reactnavigation.org/docs/use-navigation/
function ComponentExample() {

  const navigation = useNavigation();

  return (
    <ButtonExampleStack.Navigator>
      <ButtonExampleStack.Screen name="ButtonExampleHome" component={ButtonExampleHome} options={
        { headerShown: false }
      } />
      <ButtonExampleStack.Screen name="ButtonExample1" component={ButtonExample1} options={
        { headerShown: false }
      } />
      <ButtonExampleStack.Screen name="ButtonExample2" component={ButtonExample2} options={
        { headerShown: false }
      } />
      <ButtonExampleStack.Screen name="ImageExample" component={ImageExample} options={
        { headerShown: false }
      } />

    </ButtonExampleStack.Navigator>
  );
}

export default ComponentExample