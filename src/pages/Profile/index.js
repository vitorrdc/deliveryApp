import { View, Text, TouchableOpacity } from 'react-native'
import ArrowBack from '../../assets/arrow-back.svg'
import { AntDesign } from '@expo/vector-icons'
import { useContext } from 'react'
import AuthContext from '../../Context/auth'

export function Profile({ navigation }) {
  const { signOut } = useContext(AuthContext)

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <View className="flex-1 px-6 justify-center items-center ">
      <View className="flex-row w-full justify-center items-center mt-14">
        <TouchableOpacity
          className="absolute left-0"
          activeOpacity={1}
          onPress={handleGoBack}
        >
          <ArrowBack />
        </TouchableOpacity>
        <Text className="font-Medium text-lg">Meu Perfil</Text>
        <TouchableOpacity
          activeOpacity={1}
          className="absolute right-1"
          onPress={signOut}
        >
          <AntDesign name="logout" size={24} color="#FA641E" />
        </TouchableOpacity>
      </View>
      <View className="flex-1 mt-8 items-center w-full">
        <View className="w-40 h-40 mb-10 border border-zinc-500 rounded-full" />
        <View className="w-full p-3 mb-1 rounded-2xl bg-zinc-200">
          <Text className="font-Bold text-Orange">Nome</Text>
          <Text className="font-Medium">Vitor Ribeiro</Text>
        </View>
        <View className="w-full p-3 mb-1 rounded-2xl bg-zinc-200">
          <Text className="font-Bold text-Orange">E-mail</Text>
          <Text className="font-Medium">vitor.camposrdc@gmail.com</Text>
        </View>
        <View className="w-full p-3 mb-1 rounded-2xl bg-zinc-200">
          <Text className="font-Bold text-Orange">Celular</Text>
          <Text className="font-Medium">(15) 998120103</Text>
        </View>
        <View className="w-full p-3 mb-1 rounded-2xl bg-zinc-200">
          <Text className="font-Bold text-Orange">Logradouro</Text>
          <Text className="font-Medium">
            Rua José Melaré, 56 - Jd. das Palmeiras
          </Text>
        </View>
      </View>
    </View>
  )
}
