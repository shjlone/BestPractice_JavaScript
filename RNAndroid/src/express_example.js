import React, { useEffect, useState } from 'react';
import { Button, FlatList, Image, NativeModules, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";




function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setCount(c => c + 1), 1000);
    return () => clearInterval(id);
  }, [])
  return <Text style={{ fontSize: 20 }}>{count}</Text>
}



class MyCmp extends React.Component {
  render() {
    return (
      <View>
        <Text>MyCmp</Text>
      </View>
    )
  }
}

const Card = ({ title, showButton }) => (
  <View>
    <Text style={{ fontSize: 30 }}>{title}</Text>
    {showButton && <Button title="Press me!" />}
    {showButton ? <Button title={title} /> : null}
  </View>
)

function MyTxt() {
  const [text, setText] = useState('')

  return (
    <View>
      <TextInput placeholder='Type here...' onChangeText={
        (text) => {
          setText(text)
        }
      } value={text} />
      <Text >You enter: {text}</Text>
    </View>)
}


function MyEffectCmp() {

  const [count, setCount] = useState(0)

  // 第二个参数控制useEffect的执行时机
  useEffect(() => {
    console.log('useEffect')
  }, [])
  return (<Button title={`Increment ${count}`} onPress={() => setCount(count + 1)}></Button>)
}


const items = [
  { id: '0', text: 'View' },
  { id: '1', text: 'Text' },
  { id: '2', text: 'Image' },
  { id: '3', text: 'ScrollView' },
  { id: '4', text: 'ListView' },
  { id: '5', text: 'ListView' },
  { id: '6', text: 'ListView' },
  { id: '7', text: 'ListView' },
  { id: '8', text: 'ListView' },
  { id: '9', text: 'ListView' },
  { id: '10', text: 'ListView' },
  { id: '11', text: 'ListView' },
]



export default function ExpressScreen() {
  let counter = Counter()
  return (
    <ScrollView>
      <View>
        <Text>Express</Text>
        {counter}
        <MyCmp />
        <Card title="Title with button" showButton={true} />
        <Card title="Title no button" showButton={false} />
        <MyTxt />
        <MyEffectCmp />
        <View>
          <View style={styles.box} />
        </View>
        <View>
          <Image source={{ uri: 'https://reactnative.dev/docs/assets/p_cat2.png' }} style={{ width: 200, height: 200 }} />
        </View>
        <TouchableOpacity onPress={() => console.log('TouchableOpacity click')}>
          <Text>TouchableOpacity</Text>
        </TouchableOpacity>
        <FlatList data={items} renderItem={({item}) => <Text >{item.text}</Text> }/>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#3B6CD4',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
  },
})