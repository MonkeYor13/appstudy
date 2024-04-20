import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

//importamos nuestras screens
import HomeScreen from "./screens/HomeScreen";
import StackScreen from "./screens/StackScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ModalScreen from "./screens/ModalScreen";
import DrawerScreen from "./screens/DrawerScreen";

// creamos los stacks
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// Define las pantallas para cada tipo de navegación
function MyStack() {
  return (
    <Stack.Navigator 
    initialRouteName="HomeScreen"
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="Stack" component={StackScreen}
      options={{
        //headerShown: false,
        //title: '',
        //headerTitle: '',
      }}
      />
      <Stack.Screen name="Modal" component={ModalScreen} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: "purple" }}
    >
      <Tab.Screen
        name="Home"
        component={MyStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={size} color={color} />
          ), //icono si lo destructuramos toma el color de su padre
          tabBarBadge: 3, //cantidad de notificaciones
          headerShown: false, // no muestras en false el header
        }}
      />
      <Tab.Screen
        name="Setting"
        component={SettingsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="brightness-5"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function MyDrawer() {
  return (
    <Drawer.Navigator >
      <Drawer.Screen name="DrawerSreen" component={DrawerScreen} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}

// Ahora combina todos los tipos de navegación en una sola
function MainNavigator () {
  <Tab.Navigator>
    <Tab.Screen name="MyTabs" component={MyTabs} />
    <Tab.Screen name="MyStack" component={MyStack} />
    <Tab.Screen name="MyDrawer" component={MyDrawer} />
  </Tab.Navigator>
};



export default function Navigation() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
