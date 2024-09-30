import React from "react";
import WebView from "react-native-webview";

function NewsDetail({ route, navigation }: any) {
  const { url } = route.params;

  return <WebView source={{ uri: url }} />;
}
