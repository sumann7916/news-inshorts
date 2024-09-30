import { News } from "@/app/types/news";
import React from "react";
import { Image, Text, useWindowDimensions, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface Props {
  readonly newsItem: News;
  readonly onReadMore?: () => void;
}

const NewsFeed = ({
  newsItem: { title, summary, image_link, published_at, creator, category },
  onReadMore,
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
          <Text className="font-JakartaExtraBold text-3xl text-white">
            {title}
          </Text>

          <Text className="font-JakartaMedium text-lg text-white">
            {summary}
          </Text>

          <Text className="text-white font-JakartaExtraLight">
            Source: {creator.name}
          </Text>

          <TouchableOpacity onPress={onReadMore}>
            <Text className="text-brand font-JakartaBold">Read More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default NewsFeed;

function capitalizeFirstLetter(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
