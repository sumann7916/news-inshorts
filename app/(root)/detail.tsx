import { useLocalSearchParams } from "expo-router";
import React from "react";
import { WebView } from "react-native-webview";

function Detail() {
  const { url } = useLocalSearchParams<{ url: string }>();

  return <WebView source={{ uri: url }} style={{ flex: 1 }} />;
}

export default Detail;
