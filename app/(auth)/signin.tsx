import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Signin = () => {
  return (
    <View>
      <Text>Signin</Text>
      <Link href="/signup">Don&#39;t have an account? Sign up</Link>
    </View>
  )
}

export default Signin