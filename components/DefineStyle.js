import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import styles from '../components/styles'

const DefineStyle = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, styles.warning]}>Hello World</Text>
    </View>
  )
}

export default DefineStyle