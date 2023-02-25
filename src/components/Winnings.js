import { View, Text, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import Eye from '../assets/eye.svg'
import { useState } from 'react'

export function Winnings() {
  const [visibleValue, setVisibleValue] = useState(true)

  function handleVisibleValue() {
    if (visibleValue) {
      setVisibleValue(false)
    } else {
      setVisibleValue(true)
    }
  }

  const formatDate = `${new Date().getDate()}/${
    new Date().getMonth() + 1 < 10
      ? `0${new Date().getMonth() + 1}`
      : new Date().getMonth() + 1
  }`

  const Visible = () => {
    return (
      <TouchableOpacity
        className=" flex-row justify-between items-center"
        activeOpacity={1}
        onPress={handleVisibleValue}
      >
        <Text className="ml-2 mt-2 font-Roboto text-3xl text-white">
          R$ 150
        </Text>
        <View className="mr-2">
          <Eye />
        </View>
      </TouchableOpacity>
    )
  }

  const NotVisible = () => {
    return (
      <TouchableOpacity
        className=" flex-row justify-between items-center"
        activeOpacity={1}
        onPress={handleVisibleValue}
      >
        <Text className=" ml-7 mt-2 font-Roboto text-3xl text-white">----</Text>
        <View className="mr-2">
          <View className=" absolute w-6 mt-3 origin-center rotate-45 border-t-2 border-white bg-white" />
          <Eye />
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <LinearGradient
      colors={['#FA641E', '#FF881F']}
      locations={[0.1, 0.8]}
      start={[0.9, 0.6]}
      style={{
        borderRadius: 16,
        height: 100,
        width: '100%',
        padding: 12,
        marginBottom: 20,
        marginTop: 25,
      }}
    >
      <View className="flex-row  justify-between">
        <Text className="font-Medium text-base text-white">Ganhos do dia</Text>
        <Text className="font-Medium text-base text-white">{formatDate}</Text>
      </View>

      {visibleValue ? <Visible /> : <NotVisible />}
    </LinearGradient>
  )
}
