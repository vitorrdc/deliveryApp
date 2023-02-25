import { Text, TouchableOpacity } from 'react-native'
import Right from '../assets/right.svg'
import { LinearGradient } from 'expo-linear-gradient'

export function ConfirmeNewDeliveryButton() {
  return (
    <LinearGradient
      colors={['#FA641E', '#FF881F']}
      locations={[0.1, 0.8]}
      start={[0.9, 0.6]}
      style={{
        borderRadius: 16,
        height: 50,
        width: 318,
        marginTop: 65,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <TouchableOpacity
        activeOpacity={1}
        className="flex-row justify-center items-center"
      >
        <Right />
        <Text className="ml-2 text-white font-Medium text-base">Aceitar</Text>
      </TouchableOpacity>
    </LinearGradient>
  )
}
