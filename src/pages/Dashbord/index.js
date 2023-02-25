import { View, Text, ScrollView } from 'react-native'
import ArrowBack from '../../assets/arrow-back.svg'
import { DeliveryResume } from '../../components/DeliveryResume'
import { NewDelivery } from '../../components/NewDelivery'
import { Winnings } from '../../components/Winnings'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

export function Dashboard() {
  return (
    <KeyboardAwareScrollView>
      <View className=" mt-10 ">
        <View className="flex-row items-center justify-center w-full p-4 ">
          <View className="absolute left-0 p-4">
            <ArrowBack />
          </View>

          <Text className="font-Medium text-lg">Visão geral</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 16,
            paddingBottom: 100,
          }}
        >
          <Winnings />
          <DeliveryResume />
          <NewDelivery />
        </ScrollView>
      </View>
    </KeyboardAwareScrollView>
  )
}
