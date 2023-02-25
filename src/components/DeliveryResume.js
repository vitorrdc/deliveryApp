import { View, Text } from 'react-native'

export function DeliveryResume() {
  return (
    <View
      className=" w-full h-44 rounded-2xl shadow-sm p-2"
      style={{
        elevation: 6,
        shadowColor: '#707070',
        backgroundColor: '#fff',
        borderRadius: 40,
        shadowRadius: 16,
      }}
    >
      <Text className="mt-1 mr-1 font-Bold text-base">Resumo das Entregas</Text>
      <View className="flex-row w-full items-center justify-center mt-2">
        <View className=" flex items-center justify-center w-24 h-24 m-1 p-2  border border-zinc-300 rounded-xl ">
          <Text className="font-Regular text-xs text-zinc-400">Aceitas</Text>
          <Text className="mt-3 font-Medium text-4xl">15</Text>
        </View>
        <View className=" flex items-center justify-center w-24 h-24 m-1 p-2  border border-zinc-300 rounded-xl ">
          <Text className="font-Regular text-xs text-zinc-400">Rejeitadas</Text>
          <Text className="mt-3 font-Medium text-4xl">5</Text>
        </View>
        <View className=" flex items-center justify-center w-24 h-24 m-1 p-2  border border-zinc-300 rounded-xl ">
          <Text className="font-Medium text-xs text-zinc-400">Total</Text>
          <Text className="mt-3 font-Medium text-4xl">20</Text>
        </View>
      </View>
    </View>
  )
}
