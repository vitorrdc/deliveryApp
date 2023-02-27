import { View, Text, ScrollView } from 'react-native'
import { DeliveryStatus } from '../../components/DeliveryStatus'

export function Reports() {
  return (
    <View className="flex-1 px-6 justify-center items-center ">
      <View className="flex-row w-full justify-center items-center mt-14">
        <Text className="font-Medium text-lg">Relatórios</Text>
      </View>
      <ScrollView className="w-full" showsVerticalScrollIndicator={false}>
        <View className="flex-1 mt-8 items-center w-full">
          <DeliveryStatus
            id="#5678"
            address="Rua José Melaré 56"
            status="Pendente"
            statusClassName="font-Bold text-yellow-600"
          />
          <DeliveryStatus
            id="#5092"
            address="Rua Tristão Rosa 225"
            status="Pendente"
            statusClassName="font-Bold text-yellow-600"
          />
          <DeliveryStatus
            id="#5278"
            address="Rua Cel Eugênio Motta 90"
            status="Pendente"
            statusClassName="font-Bold text-yellow-600"
          />
          <DeliveryStatus
            id="#5909"
            address="Rua João Marcon 678"
            status="Entregue"
            statusClassName="font-Bold text-green-600"
          />
          <DeliveryStatus
            id="#5909"
            address="Rua João Marcon 678"
            status="Entregue"
            statusClassName="font-Bold text-green-600"
          />
          <DeliveryStatus
            id="#5909"
            address="Rua João Marcon 678"
            status="Entregue"
            statusClassName="font-Bold text-green-600"
          />
          <DeliveryStatus
            id="#5909"
            address="Rua João Marcon 678"
            status="Entregue"
            statusClassName="font-Bold text-green-600"
          />
        </View>
      </ScrollView>
    </View>
  )
}
