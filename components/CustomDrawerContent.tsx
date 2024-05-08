import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useRouter } from "expo-router";
import { View, Text, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function CustomDrawerContent(props: any) {
  const { top, bottom } = useSafeAreaInsets();
  const router = useRouter();
  const logout = () => {
    router.replace("/");
  };
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#dde3fe" }}>
        <View style={{ padding: 20 }}>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/75447701?v=4",
            }}
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
              borderRadius: 50,
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "500",
              fontSize: 18,
              paddingTop: 10,
              color: "#5363df",
            }}>
            {" "}
            Administrator
          </Text>
        </View>
        <DrawerItemList {...props} />
        <DrawerItem label={"Logout"} onPress={logout} />
      </DrawerContentScrollView>

      <View
        style={{
          borderTopColor: "#dde3fe",
          borderTopWidth: 1,
          padding: 20,
          paddingBottom: 20 + bottom,
        }}>
        <Text>Copyright 2024 Ministry of Health </Text>
      </View>
    </View>
  );
}