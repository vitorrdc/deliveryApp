import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import ArrowBack from '../../assets/arrow-back.svg'
import { TotalDistance } from '../../components/TotalDistance'
import { TopInfosNewDelivery } from '../../components/TopInfosNewDelivery'
import { RouteTimeline } from '../../components/RouteTimeline'
import { ConfirmeNewDeliveryButton } from '../../components/ConfirmNewDeliveryButton'
import { DeclineNewDeliveryButton } from '../../components/DeclineNewDeliveryButton'
import { useRoute } from '@react-navigation/native'

export function Delivery({ navigation }) {
  const route = useRoute()
  const deliveryId = route.params.deliveryId

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-1 mt-10 items-center justify-center">
        <View className="flex-row justify-start w-full p-4">
          <TouchableOpacity onPress={() => navigation.goBack('Dashboard')}>
            <ArrowBack />
          </TouchableOpacity>
          <Text className="ml-16 mb-4 pl-2 font-Medium text-lg">
            Nova entrega
          </Text>
        </View>
        <TopInfosNewDelivery deliveryId={deliveryId} />
        <TotalDistance />
        <RouteTimeline />
        <ConfirmeNewDeliveryButton />
        <DeclineNewDeliveryButton />
      </View>
    </ScrollView>
  )
}
