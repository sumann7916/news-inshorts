import { News } from "@/app/types/news";
import React from "react";
import { Image, Text, useWindowDimensions, View } from "react-native";

interface Props {
  readonly newsItem: News;
}

const NewsFeed = ({
  newsItem: { title, summary, image_link, published_at, creator },
}: Props) => {
  const NAVBAR_HEIGHT = 16;
  const { height } = useWindowDimensions();
  return (
    <View className="bg-blue" style={{ height: height - NAVBAR_HEIGHT }}>
      <View className=" rounded-2xl border border-gray-700 shadow-2xl  bg-darkNavy ">
        <View className="h-1/2 w-full">
          <Image
            className="w-full h-full"
            source={{ uri: image_link }}
            resizeMode="cover"
          />
        </View>

        <View className="h-1/2 px-4 py-6 flex flex-col gap-3">
          <Text className="bg-brand px-4 py-2 rounded-2xl text-white text-sm font-JakartaMedium">
            "Sports"
          </Text>

          <Text className="font-JakartaExtraBold text-2xl text-white">
            {title}
          </Text>

          <Text className="font-JakartaMedium text-md text-white">
            {summary}
          </Text>

          <Text className="text-white font-JakartaExtraLight">
            Source: {creator.name}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default NewsFeed;
