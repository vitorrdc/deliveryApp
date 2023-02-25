import { LinearGradient } from 'expo-linear-gradient'
import { View, Text } from 'react-native'
import DeliveryIcon from '../assets/deliveryIcon.svg'

export function TotalDistance() {
  return (
    <View>
      <LinearGradient
        colors={['#FA641E', '#FF881F']}
        locations={[0.1, 0.8]}
        start={[0.9, 0.6]}
        style={{
          borderRadius: 16,
          height: 50,
          width: 300,
          marginTop: 16,
          display: 'flex',
          flexDirection: 'row',
          paddingLeft: 20,
          alignItems: 'center',
        }}
      >
        <View className="mr-3">
          <DeliveryIcon />
        </View>
        <View>
          <Text className="font-roboto_medium text-white text-lg">Entrega</Text>
          <Text className="font-roboto_regular text-white text-xs ">
            Percurso Total: 8km
          </Text>
        </View>
      </LinearGradient>
    </View>
  )
}
