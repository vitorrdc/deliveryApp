import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import Logo from '../../assets/pigz-logotipo-branco.svg'

export function SignUp({ navigation }) {
  function handleNavigationToSignIn() {
    navigation.navigate('SignIn')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View className="flex-1 items-center justify-center">
        <View className="flex items-center absolute top-0 mt-20">
          <Logo />
        </View>
        <View className="w-80 flex justify-start">
          <Text className="font-Regular text-base mt-40">Criar conta</Text>
          <Text className=" mt-3 mb-1  text-sm font-Light text-gray-500">
            Nome completo
          </Text>
          <TextInput
            className="w-full h-10 border border-orange-400 rounded-xl p-2 placeholder:font-Regular"
            placeholderTextColor="#4B4B4B"
            cursorColor="#9F9F9F"
          />
          <Text className="mt-3 mb-1 text-sm font-Light text-gray-500">
            Endereço
          </Text>
          <TextInput
            className="w-full h-10 border border-orange-400 rounded-xl p-2 placeholder:font-Regular"
            placeholderTextColor="#4B4B4B"
            cursorColor="#9F9F9F"
          />

          <Text className="mt-3 mb-1 text-sm font-Light text-gray-500">
            E-mail
          </Text>
          <TextInput
            className="w-full h-10 border border-orange-400 rounded-xl p-2 placeholder:font-Regular"
            placeholderTextColor="#4B4B4B"
            cursorColor="#9F9F9F"
          />
          <Text className="mt-3 mb-1 text-sm font-Light text-gray-500">
            Digite uma senha
          </Text>
          <TextInput
            className="w-full h-10 border border-orange-400 rounded-xl p-2 placeholder:font-Regular"
            placeholderTextColor="#4B4B4B"
            cursorColor="#9F9F9F"
            secureTextEntry
          />
          <Text className="mt-3 mb-1 text-sm font-Light text-gray-500">
            Confirmar senha
          </Text>
          <TextInput
            className="w-full h-10 border border-orange-400 rounded-xl p-2 placeholder:font-Regular"
            placeholderTextColor="#4B4B4B"
            cursorColor="#9F9F9F"
            secureTextEntry
          />
          <TouchableOpacity
            className="w-full flex items-center justify-center mt-10 h-12 rounded-2xl bg-orange-500"
            activeOpacity={1}
          >
            <Text className="text-white font-Semiboold text-base">
              Criar conta
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={handleNavigationToSignIn}
          >
            <Text className="text-Orange text-center mt-8">
              Voltar ao Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
