import { Image, TextInput, View } from "react-native";

export default function SearchBar({
  disabled = false,
  autoFocus = false,
  query,
  setQuery,
}: {
  disabled?: boolean;
  autoFocus?: boolean;
  query?: string;
  setQuery?: (value: string) => void;
}) {
  return (
    <View className="flex flex-row items-center mt-8 mx-auto z-10 w-full p-5 justify-center gap-6 relative">
      <Image
        source={require("@/assets/icons/search.png")}
        className="w-6 h-6"
        style={{ tintColor: "#a8b5db", marginHorizontal: 10, height: 24 }}
      />
      <TextInput
        onPress={() => {}}
        editable={!disabled}
        autoFocus={autoFocus}
        placeholder="Search through 300+ movies online"
        value={query}
        onChangeText={(text) => setQuery && setQuery(text)}
        placeholderTextColor={"#a8b5db"}
        style={{ fontSize: 16 }}
        className="flex-1 ml-20 text-semibold text-white text-base font-medium"
      />
    </View>
  );
}
