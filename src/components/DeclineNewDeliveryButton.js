import { TouchableOpacity, Text } from 'react-native'
import Decline from '../assets/decline.svg'

export function DeclineNewDeliveryButton() {
  return (
    <TouchableOpacity
      className="w-80 mt-4 border border-DeclineBorder rounded-2xl flex-row h-12 items-center justify-center"
      activeOpacity={1}
    >
      <Decline />
      <Text className="ml-2 text-DeclineColor font-Medium text-base">
        Rejeitar
      </Text>
    </TouchableOpacity>
  )
}
