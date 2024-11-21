import { useQueryLatestNews } from "@/app/hooks/use-query-latest-news";
import { router } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const Category = () => {
  const latestAricles = useQueryLatestNews();

  if (latestAricles.isLoading) {
    return <Text>Loading...</Text>;
  }
  return (
    <GestureHandlerRootView className="h-screen py-8 px-4">
      <View>
        <Text className="text-2xl my-6 ml-4">Latest Articles</Text>

        <ScrollView>
          {latestAricles.data?.slice(0, 5).map((article) => (
            <TouchableOpacity
              key={article.id}
              onPress={() =>
                router.push({
                  pathname: "/(root)/detail",
                  params: { url: article.original_link },
                })
              }
            >
              <View className="flex flex-row mb-8 px-4 ">
                <Image
                  className="w-1/3 h-auto mr-4"
                  resizeMode="cover"
                  source={{ uri: article.image_link }}
                />
                <View className="w-2/3">
                  <Text numberOfLines={2} className="text-xl mb-2 ">
                    {article.title}
                  </Text>
                  <Text numberOfLines={3} className="text-md">
                    {article.summary}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </GestureHandlerRootView>
  );
};

export default Category;

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
