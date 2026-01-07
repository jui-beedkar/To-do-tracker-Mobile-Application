import { View, Text } from 'react-native'
import { Tabs } from 'expo-router'
import React from 'react'
import { useSafeAreaInsets } from "react-native-safe-area-context";
import useTheme from '@/hooks/useTheme'
import { Ionicons } from '@expo/vector-icons';

const TabsLayout = () => {
    const insets = useSafeAreaInsets();
    const {colors} = useTheme();
  return (
    <Tabs
    screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
  backgroundColor: colors.surface,
  borderTopColor: colors.border,
  borderTopWidth: 1,

  height: 70 + insets.bottom,   // base height + system nav
  paddingBottom: insets.bottom, // pushes above nav buttons
  paddingTop: 10,
},

        tabBarLabelStyle:{
            fontSize: 12,
            fontWeight: '600',
        },
        headerShown: false,
    }}>
    <Tabs.Screen 
        name="index" 
        options={{
            title:"To-Do's",
            tabBarIcon :({color, size})=>
            (
                <Ionicons name="flash-outline" size={size} color={color}/>
            )
            }}/>
            <Tabs.Screen 
        name="settings" 
        options={{
            title:"Settings",
            tabBarIcon :({color, size})=>
            (
                <Ionicons name="settings" size={size} color={color}/>
            )
            }}/>
    </Tabs>
  )
}

export default TabsLayout