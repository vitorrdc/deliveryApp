import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import QrCode from '../assets/qrcode.svg'

export function QrCodeButton() {
  return (
    <LinearGradient
      colors={['#FA641E', '#FF881F']}
      locations={[0.1, 0.8]}
      start={[0.9, 0.6]}
      style={{
        borderRadius: 16,
        height: 46,
        width: 300,
        marginTop: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 12,
        marginBottom: 20,
      }}
    >
      <QrCode />
      <Text className="ml-2 text-white font-Medium text-base">
        Escanear Qrcode
      </Text>
    </LinearGradient>
  )
}
