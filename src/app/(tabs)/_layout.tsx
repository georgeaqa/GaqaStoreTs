import { Tabs, Redirect } from "expo-router";
import CustomIcon, { Icons } from "@/src/components/CustomIcon";
import React from "react";
import { useAuth } from "@/src/providers/Authprovider";
import { useSelector } from "react-redux";
export default function TabsLayout() {
  const cartCharacters = useSelector((state: any) => state.cart.cartCharacters);
  const { user } = useAuth();
  if (!user) {
    return <Redirect href="/Login" />;
  }
  const tabs = [
    {
      name: "Home",
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
      name: "Cart",
      type: Icons.MaterialCommunityIcons,
      activeIcon: "cart",
      inActiveIcon: "cart-outline",
      badge: cartCharacters.length,
    },
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#FF0000",
      }}
    >
      {tabs.map((tab, index) => (
        <Tabs.Screen
          key={index}
          name={tab.name}
          options={{
            tabBarBadge: tab.badge,
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
