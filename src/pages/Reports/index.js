import { View, Text, ScrollView } from 'react-native'

export function Reports() {
  return (
    <View className="flex-1 px-6 justify-center items-center ">
      <View className="flex-row w-full justify-center items-center mt-14">
        <Text className="font-Medium text-lg">Relatórios</Text>
      </View>
      <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
        <View className="flex-1 mt-8 items-center w-full">
          <View className="w-full p-3 mb-1 rounded-2xl bg-zinc-200">
            <Text className="font-Bold text-xl text-Orange">#5678</Text>
            <View className="flex-row justify-between">
              <Text className="font-Medium">Rua José Melaré 56</Text>
              <Text className="font-Bold text-yellow-600">Pendente</Text>
            </View>
          </View>
          <View className="w-full p-3 mb-1 rounded-2xl bg-zinc-200">
            <Text className="font-Bold text-xl text-Orange">#5092</Text>
            <View className="flex-row justify-between">
              <Text className="font-Medium">Rua Tristão Rosa 225</Text>
              <Text className="font-Bold text-yellow-600">Pendente</Text>
            </View>
          </View>
          <View className="w-full p-3 mb-1 rounded-2xl bg-zinc-200">
            <Text className="font-Bold text-xl text-Orange">#5278</Text>
            <View className="flex-row justify-between">
              <Text className="font-Medium">Rua Cel Eugênio Motta 90</Text>
              <Text className="font-Bold text-yellow-600">Pendente</Text>
            </View>
          </View>
          <View className="w-full p-3 mb-1 rounded-2xl bg-zinc-200">
            <Text className="font-Bold text-xl text-Orange">#5909</Text>
            <View className="flex-row justify-between">
              <Text className="font-Medium">Rua João Marcon 678</Text>
              <Text className="font-Bold text-green-600">Entregue</Text>
            </View>
          </View>
          <View className="w-full p-3 mb-1 rounded-2xl bg-zinc-200">
            <Text className="font-Bold text-xl text-Orange">#8754</Text>
            <View className="flex-row justify-between">
              <Text className="font-Medium">Rua das Colinas 89</Text>
              <Text className="font-Bold text-green-600">Entregue</Text>
            </View>
          </View>
          <View className="w-full p-3 mb-1 rounded-2xl bg-zinc-200">
            <Text className="font-Bold text-xl text-Orange">#0987</Text>
            <View className="flex-row justify-between">
              <Text className="font-Medium">Rua São Bento Marajá 832</Text>
              <Text className="font-Bold text-green-600">Entregue</Text>
            </View>
          </View>
          <View className="w-full p-3 mb-1 rounded-2xl bg-zinc-200">
            <Text className="font-Bold text-xl text-Orange">#1293</Text>
            <View className="flex-row justify-between">
              <Text className="font-Medium">Rua do Pereirinha 225</Text>
              <Text className="font-Bold text-green-600">Entregue</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
