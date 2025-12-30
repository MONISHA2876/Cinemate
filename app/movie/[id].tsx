import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const movieDetails = () => {
  const { id, poster_path, title, date, star, popularity, overview, geners } =
    useLocalSearchParams<{
      id: string;
      poster_path: string;
      title: string;
      date: string;
      star: any;
      popularity: any;
      overview: string;
      geners: any;
    }>();

  return (
    <View className="bg-primary flex-1">
      <ScrollView>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
          }}
          style={{ width: "100%", height: 600, marginBottom: 20 }}
        />

        <View className="mx-5">
          <Text className="text-white text-2xl font-bold">{title}</Text>
          <Text style={{ color: "#c7c7c7", marginTop: 5 }}>
            {date.split("-")[0]}
          </Text>

          <View
            className="inline-flex flex-row items-end p-3 pt-2 bg-[#1e1e1e] rounded-lg mt-5"
            style={{ maxWidth: "35%" }}
          >
            <Image
              source={require("@/assets/icons/star.png")}
              className="w-5 h-5 "
              style={{ tintColor: "#f5c518", marginRight: 5, marginBottom: 1 }}
            />
            <Text className="text-white text-lg mb-[-2]">{star}</Text>
            <Text className="text-['#c7c7c7'] text-md">
              /10 ({popularity}K)
            </Text>
          </View>

          <View style={{ marginTop: 40 }}>
            <Text className="text-['#c7c7c7'] text-md font-normal mb-2">
              Overview
            </Text>
            <Text className="text-white text-lg font-light">{overview}</Text>
          </View>

          <View className="flex flex-row justify-between w-[80%]">
            <View style={{ marginTop: 40 }}>
              <Text className="text-['#c7c7c7'] text-md font-normal mb-1">
                Release Date
              </Text>
              <Text className="text-['#a8b5db'] text-lg font-light">
                {date} (Worldwide)
              </Text>
            </View>
            <View style={{ marginTop: 40 }}>
              <Text className="text-['#c7c7c7'] text-md font-normal mb-1">
                Status
              </Text>
              <Text className="text-['#a8b5db'] text-lg font-light">
                Released
              </Text>
            </View>
          </View>

          <View style={{ marginTop: 40 }}>
            <Text className="text-['#c7c7c7'] text-md font-normal mb-2">
              Generes
            </Text>
            <Text className="text-white text-lg font-light">{geners}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default movieDetails;
