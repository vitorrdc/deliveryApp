import { TouchableOpacity, Text } from 'react-native'

export function Button({ onPress, activeOpacity, text, classNameText }) {
  return (
    <TouchableOpacity
      className="mt-6 h-12 w-80 flex justify-center rounded-xl bg-orange-500"
      onPress={onPress}
      activeOpacity={activeOpacity}
    >
      <Text className={classNameText}>{text}</Text>
    </TouchableOpacity>
  )
}
