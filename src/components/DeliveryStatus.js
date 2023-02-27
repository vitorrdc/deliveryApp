import { View, Text } from 'react-native'

export function DeliveryStatus({ id, address, status, statusClassName }) {
  return (
    <View className="w-full p-3 mb-1 rounded-2xl bg-zinc-200">
      <Text className="font-Bold text-xl text-Orange">{id}</Text>
      <View className="flex-row justify-between">
        <Text className="font-Medium">{address}</Text>
        <Text className={statusClassName}>{status}</Text>
      </View>
    </View>
  )
}
