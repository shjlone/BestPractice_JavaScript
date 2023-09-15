import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { Button, NativeModules, StyleSheet, Text, View } from "react-native";
import ReactNativeBlobUtil from "react-native-blob-util";

/**
 *  方法声明的两种方式：
 * 1. function 关键字
 * 2. 箭头函数 =>
 */

const add = (a, b) => {return a + b}


function NativeInterfaceScreen({ }) {

  console.log(add(1, 2))

  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.text}>Hello, World</Text>
      <Button title='Back' onPress={() => {
        navigation.goBack();
      }} />

      <Button onPress={
        () => {
          NativeModules.ToastAndroid.showWithGravity('默认的Toast', NativeModules.ToastAndroid.SHORT, NativeModules.ToastAndroid.TOP);
        }} title={"测试默认Toast"}></Button>

      <Button onPress={
        () => {
          NativeModules.IndexModule.show('Awesome', NativeModules.IndexModule.SHORT);
        }} title={"自定义Toast"}></Button>

      <Button onPress={() => {
        NativeModules.IndexModule.testCallback("测试回调", (msg) => {
          NativeModules.IndexModule.show(msg, NativeModules.IndexModule.SHORT);
        }, (error) => {
          NativeModules.IndexModule.show(error, NativeModules.IndexModule.SHORT);
        });
      }} title={"Callback测试"}></Button>

      <Button onPress={
        async () => {

          var result = await NativeModules.IndexModule.testPromise('Awesome');
          NativeModules.IndexModule.show(result, NativeModules.IndexModule.SHORT);

        }} title={"测试Promise"}></Button>


      <Button onPress={
        () => {
          NativeModules.IndexModule.testSendEvent('emitttt');
        }} title={"测试Event Emitter"}></Button>

      <Button onPress={async () => {
        var result = await NativeModules.ImagePickerModule.pickImage();
        console.log(result);
      }} title={"测试Activity Result"}></Button>


      <Button onPress={
        () => {
          var url = "https://dragon-cmp-test.oss-cn-hangzhou.aliyuncs.com/storage/staging/cmp/file/13qz/1684396599982/1/01882ddc6aae882d75348aff911b0010.jpeg";
          ReactNativeBlobUtil.fetch('GET', url).progress((received, total) => {
            console.log('progress', received / total);
          }).then((res) => {
            console.log('download success');
            NativeModules.IndexModule.show('下载完成', NativeModules.IndexModule.SHORT);
          }).
            catch((errorMessage, statusCode) => {
              console.log('download success', errorMessage);
              NativeModules.IndexModule.show('下载失败', NativeModules.IndexModule.SHORT);
            });

        }} title={"文件下载"} ></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: 'red'
  }
})

export default NativeInterfaceScreen