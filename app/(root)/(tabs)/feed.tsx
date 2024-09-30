import NewsFeed from "@/components/news/news-feed";
import React from "react";
import { FlatList, GestureHandlerRootView } from "react-native-gesture-handler";

const Feed = () => {
  return (
    <GestureHandlerRootView className="px-4 bg-black  flex-1">
      <FlatList
        data={[] as any}
        renderItem={({ item }) => <NewsFeed newsItem={item} />}
        keyExtractor={(item) => item.id.toString()}
        pagingEnabled
      ></FlatList>
    </GestureHandlerRootView>
  );
};

export default Feed;
