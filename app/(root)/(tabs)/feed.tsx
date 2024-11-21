import { useQueryCategory } from "@/app/hooks/use-query-categories";
import { useQueryNews } from "@/app/hooks/use-query-news";
import { News } from "@/app/types/news";
import Loading from "@/components/loading";
import NewsFeed from "@/components/news/news-feed";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import {
  FlatList,
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";

const Feed = ({ navigation }: any) => {
  const categories = useQueryCategory();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const result = useQueryNews(selectedCategory ?? ""); // Ensure valid initial fetch

  const [showTopBar, setShowTopBar] = useState(true);

  // Set the default category when categories are fetched
  useEffect(() => {
    if (categories.data && categories.data.length > 0) {
      setSelectedCategory(categories.data[0].id);
    }
  }, [categories.data]);

  if (result.isLoading) {
    return <Loading />; // Consider adding a loading spinner or message
  }

  const handleReadMore = (url: string) => {
    // Handle navigation to the detail screen
    router.push({
      pathname: "/detail",
      params: { url },
    });
  };

  return (
    <GestureHandlerRootView className="flex-1 bg-black px-4">
      {showTopBar && (
        <ScrollView
          horizontal
          className="absolute top-0 left-0 right-0 bg-[#696B6F] border-b-2 shadow-lg p-10 z-10"
        >
          <View className="flex flex-row space-x-2 mt-2 ">
            {categories.data?.map((category) => (
              <TouchableWithoutFeedback
                key={category.id}
                onPress={() => setSelectedCategory(category.id)}
              >
                <View
                  className={`bg-black py-2 px-8 mr-4 rounded-full ${
                    selectedCategory === category.id ? "bg-brand" : ""
                  }`}
                >
                  <Text className="text-white">{category.name}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))}
          </View>
        </ScrollView>
      )}
      <TouchableWithoutFeedback onPress={() => setShowTopBar((prev) => !prev)}>
        <View style={{ flex: 1 }}>
          <FlatList
            data={result.data ?? ([] as News[])}
            renderItem={({ item }) => (
              <NewsFeed newsItem={item} onReadMore={handleReadMore} />
            )}
            keyExtractor={(item) => item.id.toString()}
            pagingEnabled
          />
        </View>
      </TouchableWithoutFeedback>
    </GestureHandlerRootView>
  );
};

export default Feed;
