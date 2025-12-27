import { Image, TextInput, View } from "react-native";

export default function SearchBar() {
  return (
    <View className="flex flex-row items-center mt-8 mx-auto z-10 w-full p-5 justify-center gap-6 relative">
      <Image
        source={require("@/assets/icons/search.png")}
        className="w-6 h-6"
        style={{ tintColor: "#a8b5db", marginHorizontal: 10, height: 24 }}
      />
      <TextInput
        onPress={() => {}}
        placeholder="Search through 300+ movies online"
        value=""
        onChangeText={() => {}}
        placeholderTextColor={"#a8b5db"}
        style={{ fontSize: 16 }}
        className="flex-1 ml-20 text-semibold text-base font-medium"
      />
    </View>
  );
}
