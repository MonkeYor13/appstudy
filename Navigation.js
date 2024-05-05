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
import ComponentsScreen from "./screens/ComponentsScreen";
import CardPokemon from "./screens/CardPokemon";


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
      <Stack.Screen name="HomeScreen" component={HomeScreen} 
      options={{headerShown: false}}
      />
      <Stack.Screen name="Stack" component={StackScreen}
      options={{
        headerShown: false,
        //title: '',
        //headerTitle: '',
      }}
      />
      <Stack.Screen name="Modal" component={ModalScreen} />
      <Stack.Screen name="Components" component={ComponentsScreen} />
      <Stack.Screen name="CardPokemon" component={CardPokemon} />
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
          //headerShown: false, // no muestras en false el header
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
    <Drawer.Navigator 
    initialRouteName="HomeScreen2"
    >
      <Drawer.Screen name="Feed" component={MyTabs} 
      options={{}}
      />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
}



export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  );
}
