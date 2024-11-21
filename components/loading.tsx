import React from "react";
import { ActivityIndicator, Text, View } from "react-native";

const Loading = () => {
  return (
    <View className="flex-1 justify-center items-center">
      <ActivityIndicator size="large" color="#FAA307" />
      <Text className="text-white mt-4">Loading...</Text>
    </View>
  );
};

export default Loading;
