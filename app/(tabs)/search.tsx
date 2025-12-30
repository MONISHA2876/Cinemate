import SearchBar from "@/components/SearchBar";
import { fetchPopularMovies, searchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Index() {
  const [query, setQuery] = useState<string>("");
  const {
    data: movies,
    Loading: moviesLoading,
    error: moviesError,
    refetch,
  } = useFetch(query ? () => searchMovies({ query }) : fetchPopularMovies);

  useEffect(() => {
    refetch();
  }, [query]);

  return (
    <View className="flex-1 bg-primary ">
      <Image
        source={require("@/assets/images/bg.png")}
        className="w-full h-full z-0 absolute"
      />

      <View className="flex-1 px-5 pt-20">
        <View style={{ marginBottom: 20, marginTop: 10 }}>
          <SearchBar autoFocus query={query} setQuery={setQuery} />
        </View>
        {moviesLoading ? (
          <ActivityIndicator size={"large"} />
        ) : moviesError ? (
          <Text className="text-red-500 text-center">
            Error: {moviesError.message}
          </Text>
        ) : (
          <FlatList
            className="mt-5 mb-20"
            data={movies?.results}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            renderItem={({ item }) => (
              <Link href={`/movie/${item.id}`} asChild>
                <TouchableOpacity className="flex items-center w-[30%] mb-4">
                  <Image
                    source={{
                      uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
                    }}
                    className="w-32 h-48 rounded-lg"
                  />
                  <Text
                    className="text-white mt-2 font-bold text-center"
                    numberOfLines={1}
                  >
                    {item.title}
                  </Text>
                  <View className="flex flex-row justify-between w-full">
                    <View className="flex flex-row justify-start">
                      <Image
                        source={require("@/assets/icons/star.png")}
                        className="w-4 h-4"
                        style={{
                          tintColor: "#f5c518",
                          marginRight: 4,
                          height: 16,
                        }}
                      />
                      <Text className="text-white font-medium text-sm">
                        {item.vote_average.toFixed(1)}
                      </Text>
                    </View>
                    <Text className="text-white text-sm">
                      {item.release_date?.split("-")[0]}
                    </Text>
                  </View>
                </TouchableOpacity>
              </Link>
            )}
            columnWrapperStyle={{
              justifyContent: "space-between",
              marginBottom: 15,
              paddingHorizontal: 5,
            }}
            ListEmptyComponent={
              <Text className="text-white text-center">No movies found.</Text>
            }
            onRefresh={refetch}
            refreshing={moviesLoading}
          />
        )}
      </View>
    </View>
  );
}
