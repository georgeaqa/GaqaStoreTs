import { Tabs, Redirect } from "expo-router";
import CustomIcon, { Icons } from "@/src/components/CustomIcon";
import React from "react";
import { useAuth } from "@/src/providers/Authprovider";
export default function TabsLayout() {
  const { user } = useAuth();
  if (!user) {
    return <Redirect href="Login" />;
  }
  const tabs = [
    {
      name: "Profile",
      type: Icons.Ionicons,
      activeIcon: "home",
      inActiveIcon: "home-outline",
    },
    {
      name: "Products",
      type: Icons.Ionicons,
      activeIcon: "storefront",
      inActiveIcon: "storefront-outline",
    },
    {
      name: "ShoppingCart",
      type: Icons.MaterialCommunityIcons,
      activeIcon: "cart",
      inActiveIcon: "cart-outline",
    },
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      {tabs.map((tab, index) => (
        <Tabs.Screen
          key={index}
          name={tab.name}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <CustomIcon
                name={focused ? tab.activeIcon : tab.inActiveIcon}
                type={tab.type}
                size={size}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
