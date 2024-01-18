import React from "react";
import { View } from "react-native";
import { useNavigation } from "expo-router";
import Dashboard from "../../components/Dashboard";

const Page = () => {
  const router = useNavigation();

  const navigateToAnalytics = () => {
    // Handle navigation to the Analytics component
    console.log("Navigating to Analytics");
  };

  const navigateToUserManagement = () => {
    // Handle navigation to the UserManagement component
    console.log("Navigating to User Management");
  };

  const navigateToPostManagement = () => {
    // Handle navigation to the PostManagement component
    console.log("Navigating to Post Management");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Dashboard
        onNavigateToAnalytics={navigateToAnalytics}
        onNavigateToUserManagement={navigateToUserManagement}
        onNavigateToPostManagement={navigateToPostManagement}
      />
    </View>
  );
};

export default Page;
