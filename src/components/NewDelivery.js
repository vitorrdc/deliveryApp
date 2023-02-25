import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { QrCodeButton } from './QrCodeButton'
import { useState } from 'react'

export function NewDelivery() {
  const [deliveryId, setDeliveryId] = useState('')

  const navigation = useNavigation()

  function handleGoToNewDelivery() {
    if (!deliveryId) {
      return Alert.alert('Número de Identificação', 'Informe um número válido')
    }
    setDeliveryId('')
    navigation.navigate('Delivery', { deliveryId })
  }

  return (
    <View
      className="w-full rounded-2xl shadow-sm p-2 mt-5"
      style={{
        elevation: 6,
        shadowColor: '#707070',
        backgroundColor: '#fff',
        borderRadius: 40,
        shadowRadius: 16,
      }}
    >
      <Text className="mt-1 mr-1 font-Bold text-base">
        Iniciar Nova Entrega
      </Text>
      <Text className="mt-1 font-Regular text-zinc-400 text-xs">
        Número de Identificação
      </Text>
      <View className="flex-row w-full mt-2">
        <TextInput
          className="h-12 w-56 mr-3 p-4 border border-orange-500 rounded-2xl"
          cursorColor="#9F9F9F"
          onChangeText={setDeliveryId}
          value={deliveryId}
        />
        <TouchableOpacity
          className="w-16 h-12 flex items-center justify-center bg-orange-500 rounded-2xl"
          activeOpacity={1}
          onPress={handleGoToNewDelivery}
        >
          <Text className="text-white font-Medium text-base">OK</Text>
        </TouchableOpacity>
      </View>
      <QrCodeButton />
    </View>
  )
}
