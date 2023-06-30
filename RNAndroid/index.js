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
//import ToastExample from './ToastExample';

export default NativeModules.IndexModule;

class HelloWorld extends React.Component {
    render() {
        return (
            <View>
                <Text>111Hello, World</Text>

                <Button onPress={
                                ()=>{
                                    NativeModules.ToastAndroid.showWithGravity('默认的Toast', NativeModules.ToastAndroid.SHORT, NativeModules.ToastAndroid.TOP);
                                }} title={"测试默认Toast"}></Button>

                <Button onPress={
                ()=>{
                    NativeModules.IndexModule.show('Awesome', NativeModules.IndexModule.SHORT);
                }} title={"自定义Toast"}></Button>

                <Button onPress={()=>{
                    NativeModules.IndexModule.testCallback("测试回调", (msg)=>{
                        NativeModules.IndexModule.show(msg, NativeModules.IndexModule.SHORT);
                    }, (error) => {
                        NativeModules.IndexModule.show(error, NativeModules.IndexModule.SHORT);
                    });
                }} title={"Callback测试"}></Button>

                <Button onPress={
                async ()=> {

                    var result = await NativeModules.IndexModule.testPromise('Awesome');
                  NativeModules.IndexModule.show(result, NativeModules.IndexModule.SHORT);

                }} title={"测试Promise"}></Button>


                <Button onPress={
                ()=> {
                    NativeModules.IndexModule.testSendEvent('emitttt');
                }} title={"测试Event Emitter"}></Button>

                <Button onPress={ async ()=>{
                    var result = await NativeModules.ImagePickerModule.pickImage();
                    console.log(result);
                }} title={"测试Activity Result"}></Button>

            </View>
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
AppRegistry.registerComponent('MyReactNativeApp', () => HelloWorld);