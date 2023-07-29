import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View 
      style={[
        styles.container, {flexDirection:'column'}
      ]}
    >
      {/* <View style={{flex:1, backgroundColor:'red'}}/>
      <View style={{flex:2, backgroundColor:'darkorange'}}/>
      <View style={{flex:3, backgroundColor:'green'}}/> */}
      <View style={{flex:1, backgroundColor:'powerblue'}}/>
      <View style={{flex:1, backgroundColor:'skyblue'}}/>
      <View style={{flex:1, backgroundColor:'steelblue'}}/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})