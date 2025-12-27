import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, Text, View } from "react-native";

const TabBarStyle = ({ focused, icon, label }: any) => {
  if (focused) {
    return (
      <>
        <ImageBackground
          source={require("@/assets/images/highlight.png")}
          className="flex flex-row w-full min-w-[112px] justify-center p-4 mt-3.5 overflow-hidden item-center rounded-full gap-1 min-h-14"
        >
          <Image
            source={icon}
            tintColor={"#151312"}
            style={{ width: 20, height: 20 }}
          />
          <Text className="text-secondary text-base font-bold">{label}</Text>
        </ImageBackground>
      </>
    );
  } else {
    return (
      <>
        <View className="flex flex-row w-full min-w-[112px] justify-center p-4 mt-4 overflow-hidden item-center rounded-full gap-1">
          <Image
            source={icon}
            tintColor={"#A8B5DB"}
            style={{ width: 20, height: 20 }}
          />
          {/* <Text className="text-secondary text-base font-semibold">
            {label}
          </Text> 
          
          This is commented as i was not able to decide whether to show label on unfocused tab or not as it was looking good in both ways :)
          
          */}
        </View>
      </>
    );
  }
};

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#0f0D23",
          borderRadius: 50,
          marginHorizontal: 20,
          marginBottom: 20,
          height: 52,
          position: "absolute",
          overflow: "hidden",
          borderWidth: 1,
          borderColor: "#0f0D23",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabBarStyle
              focused={focused}
              icon={require("@/assets/icons/home.png")}
              label="Home"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabBarStyle
              focused={focused}
              icon={require("@/assets/icons/search.png")}
              label="Search"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabBarStyle
              focused={focused}
              icon={require("@/assets/icons/save.png")}
              label="Saved"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <TabBarStyle
              focused={focused}
              icon={require("@/assets/icons/person.png")}
              label="Profile"
            />
          ),
        }}
      />
    </Tabs>
  );
}
