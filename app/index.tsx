import { Link, useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Page() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
      }}>
      <Link
        href={"/(tabs)/(drawer)/home"}
        replace
        asChild
        style={{ marginTop: 5 }}>
        <Button title="Welcome" />
      </Link>
    </View>
  );
}
