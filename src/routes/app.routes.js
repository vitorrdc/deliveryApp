import { Dashboard } from '../pages/Dashbord/index'
import { Reports } from '../pages/Reports'
import { Profile } from '../pages/Profile'
import { Delivery } from '../pages/Delivery'
import DashIcon from '../assets/dashIcon.svg'
import ReportsIcon from '../assets/reportsIcon.svg'
import ProfileIcon from '../assets/profileIcon.svg'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const AppTabMenu = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <AppTabMenu.Navigator
      initialRouteName="Visão geral"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#FA641E',
        tabBarStyle: {
          backgroundColor: 'transparent',
          position: 'absolute',
          paddingBottom: 0,
          shadowColor: '#fff',
          borderTopColor: '#fff',
          height: 65,
        },
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          paddingBottom: 15,
        },
      }}
    >
      <AppTabMenu.Screen
        name="Relatórios"
        component={Reports}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <ReportsIcon name="Relatórios" size={size} color={color} />
          },
        }}
      />
      <AppTabMenu.Screen
        name="Visão geral"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <DashIcon name="Visão Geral" size={size} color={color} />
          },
        }}
      />
      <AppTabMenu.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => {
            return <ProfileIcon name="Perfil" size={size} color={color} />
          },
        }}
      />
      <AppTabMenu.Screen
        name="Delivery"
        component={Delivery}
        options={{
          tabBarButton: () => null,
          tabBarStyle: {
            display: 'none',
          },
        }}
      />
    </AppTabMenu.Navigator>
  )
}
