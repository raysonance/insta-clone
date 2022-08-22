import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Story from '../components/Story'
import Post from '../components/Post'

const HomeScreen = () => {
  return (
    <View>
      <Header />
      <Story />
      <Post />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})