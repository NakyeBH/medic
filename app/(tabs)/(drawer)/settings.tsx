import { View, Text, Switch, StyleSheet } from "react-native";
import React, { useState } from "react";

const Page = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNotifications = () => setNotifications((prev) => !prev);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Settings</Text>

      <View style={styles.setting}>
        <Text>Notifications</Text>
        <Switch value={notifications} onValueChange={toggleNotifications} />
      </View>

      <View style={styles.setting}>
        <Text>Dark Mode</Text>
        <Switch value={darkMode} onValueChange={toggleDarkMode} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
});
export default Page;
