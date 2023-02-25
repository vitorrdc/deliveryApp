import { View, Text } from 'react-native'

export function TopInfosNewDelivery({ deliveryId }) {
  return (
    <View className="flex items-center">
      <View className="w-80 flex-row justify-around ">
        <View className="flex items-center">
          <Text className="font-Regular text-sm text-zinc-400">
            Tempo Estimado
          </Text>
          <Text className="text-Orange font-Bold text-xl">30 Min</Text>
        </View>
        <View className="flex items-center">
          <Text className="font-Regular text-sm text-zinc-400">
            Número de ID
          </Text>
          <Text className="text-Orange font-Bold text-xl">#{deliveryId}</Text>
        </View>
      </View>
      <View className="w-80 h-1 mt-3 border-b border-zinc-200" />
      <Text className=" mt-4 font-Regular text-sm text-zinc-400">
        Valor da Entrega
      </Text>
      <Text className="mt-2 font-Bold text-4xl text-Orange">R$ 13,75</Text>
    </View>
  )
}
