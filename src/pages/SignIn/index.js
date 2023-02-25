import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import Logo from '../../assets/pigz-logotipo-branco.svg'
import LogoGoogle from '../../assets/logo-google.svg'
import { Button } from '../../components/Button'
import { useContext, useState } from 'react'
import AuthContext from '../../Context/auth'

export function SignIn({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  async function handleSignIn() {
    if (!email) {
      return Alert.alert(
        'Email obrigatório.',
        'Para logar, é necessário inserir um e-mail.',
      )
    }
    if (!password) {
      return Alert.alert(
        'Senha obrigatória.',
        'Para logar, é necessário inserir uma senha.',
      )
    }

    signIn()
  }

  function handleNavigationToSignUp() {
    navigation.navigate('SignUp')
  }

  return (
    <View className="flex-1 items-center justify-center">
      <Logo />
      <Text className="font-Semiboold text-lg mt-2">Para entregadores</Text>
      <View className="w-80 h-60 flex justify-start">
        <Text className="font-Semiboold text-base mt-7">Login</Text>
        <Text className=" mt-3 mb-1  text-sm font-Light text-gray-500">
          Email ou Telefone
        </Text>
        <TextInput
          className="w-full h-10 border border-orange-400 rounded-xl p-2 placeholder:font-Regular"
          placeholder="example@pigz..."
          placeholderTextColor="#4B4B4B"
          value={email}
          onChangeText={setEmail}
        />
        <Text className="mt-3 mb-1 text-sm font-Light text-gray-500">
          Senha
        </Text>
        <TextInput
          className="w-full h-10 border border-orange-400 rounded-xl p-2 placeholder:font-Regular"
          placeholder="********"
          placeholderTextColor="#4B4B4B"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Text className="mt-6 underline underline-offset-4 text-sm font-Light text-gray-500">
          Esqueci minha senha
        </Text>
      </View>
      <Button
        classNameTouchable="mt-6 h-12 w-80 flex justify-center rounded-xl bg-orange-500"
        onPress={handleSignIn}
        activeOpacity={1}
        text="Entrar"
        classNameText="text-white text-center font-Medium text-base"
      />
      <View className="flex-row">
        <Text className=" mr-1 mt-9 text-sm font-Light text-gray-500">
          Não tem uma conta?
        </Text>
        <TouchableOpacity activeOpacity={1} onPress={handleNavigationToSignUp}>
          <Text className="mt-9 text-sm font-Light text-orange-500">
            Criar agora!
          </Text>
        </TouchableOpacity>
      </View>
      <View className=" mt-6 flex-row items-center justify-between">
        <Text className="font-Semiboold text-sm">Entrar com</Text>
        <View className=" ml-1 w-60 h-10 border-b border-b-gray-400 mb-9" />
      </View>
      <TouchableOpacity
        className="flex-row p-2 items-center border-b h-12 w-80 border rounded-xl border-gray-400 "
        activeOpacity={1}
      >
        <LogoGoogle />
        <Text className="ml-11 text-center mt-auto mb-auto font-Medium text-base text-zinc-500 ">
          Continuar com o Google
        </Text>
      </TouchableOpacity>
    </View>
  )
}
