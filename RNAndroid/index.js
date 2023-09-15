import React from 'react';
import {
  AppRegistry,
  Button,
  Style,
  Text,
  NativeModules,
  NativeEventEmitter,
  View
} from 'react-native';

import ButtonExample from './src/button_example';
import NativeInterfaceScreen from './src/native_interface';

import ReactNativeBlobUtil from 'react-native-blob-util';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import ExpressScreen from './src/express_example';
import ExpressLayoutScreen from './src/express_layout';

//import ToastExample from './ToastExample';

export default NativeModules.IndexModule;




function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Home</Text>

      <Button title="原生接口测试" onPress={
        () => {
          navigation.navigate('TestScreen')
        }} />
      
      <Button title="Express" onPress={
        () => {
          navigation.navigate('ExpressScreen')
        }} />
      <Button title="ExpressLayoutScreen" onPress={
        () => {
          navigation.navigate('ExpressLayoutScreen')
        }} />
      
      <Button title='ButtonExample' onPress={() => {
        navigation.navigate('ButtonExample')
      }} />
    </View>
  );
}


const Stack = createNativeStackNavigator();

class HelloWorld extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='HomeScreen'>
          <Stack.Screen name="HomeScreen" component={HomeScreen} options={
            { headerShown: false }
          } />
          <Stack.Screen name="TestScreen" component={NativeInterfaceScreen} />
          <Stack.Screen name="ExpressScreen" component={ExpressScreen} />
          <Stack.Screen name="ExpressLayoutScreen" component={ExpressLayoutScreen} />
          <Stack.Screen name='ButtonExample' component={ButtonExample} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

//监听原生事件
function compnentDidMount() {
  const eventEmitter = new NativeEventEmitter(NativeModules.IndexModule);
  this.listener = eventEmitter.addListener('EventReminder', (reminder) => {
    console.log(reminder.name);
    console.log(reminder.location);
    console.log(reminder.date);
    NativeModules.IndexModule.show(reminder.eventProperty, NativeModules.IndexModule.SHORT);
  });
}

function componentWillUnmount() {
  this.listener && this.listener.remove();
}

//var styles = StyleSheet.create({
//    container: {
//        flex: 1,
//        justifyContent: 'center'
//    },
//    hello: {
//        fontSize: 20,
//        textAlign: 'center',
//        margin: 10
//    }
//});

compnentDidMount();

//带路由的页面需要使用继承ReactActivity的Activity方式访问
AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);






class SinglePage extends React.Component {
  render() {
    return (
      <View>
        <Text>Single Page1122</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('SinglePage', () => SinglePage);