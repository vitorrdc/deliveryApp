import { View, Text } from 'react-native'

export function RouteTimeline() {
  return (
    <View className="flex-1 items-center">
      <View className="h-10 border-l mr-60 border-zinc-400" />
      <View className="flex-row items-center">
        <View className="h-4 w-4 mr-60 rounded-full bg-orange-500 " />
        <Text className="absolute ml-5 font-Medium text-Orange text-lg">
          Coleta
        </Text>
      </View>
      <View className="w-60 h-5 border-l border-zinc-400" />
      <View className="flex-row items-center">
        <View className="h-2 w-2 rounded-full border border-orange-500 mr-60" />
        <View className="flex w-full ml-4 absolute">
          <Text className="absolute mt-6 font-Regular text-sm text-zinc-400">
            Restaurante Recanto da Peixada
          </Text>
          <Text className="font-Regular mt-11 text-sm text-zinc-400">
            Distância: 2km
          </Text>
        </View>
      </View>
      <View className="w-60 h-12 border-l border-zinc-400" />
      <View className="flex-row items-center">
        <View className="h-4 w-4 rounded-full bg-orange-500 mr-60" />
        <Text className="absolute ml-5 font-roboto_medium text-Orange text-lg">
          Entrega
        </Text>
      </View>
      <View className="w-60 h-5 border-l border-zinc-400" />
      <View className="flex-row items-center">
        <View className="h-2 w-2 rounded-full border border-orange-500 mr-60" />
        <View className="flex w-full ml-4 absolute">
          <Text className="absolute mt-6 font-Regular text-sm text-zinc-400">
            Av: Cabo dos Soldados - Caranã
          </Text>
          <Text className="font-Regular mt-11 text-sm text-zinc-400">
            Distância: 6km
          </Text>
        </View>
      </View>
    </View>
  )
}
