import SearchBar from "@/components/SearchBar";
import { Image, ScrollView, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      <Image
        source={require("@/assets/images/bg.png")}
        className="w-full h-full z-0 absolute"
      />
      <ScrollView
        className="flex-1 px-5"
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}
      >
        <Image
          source={require("@/assets/icons/logo.png")}
          className="w-12 h-10 mt-20 mb-8 mx-auto"
        />
        <SearchBar />
      </ScrollView>
    </View>
  );
}
