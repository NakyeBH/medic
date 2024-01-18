import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FeedCard = ({ username, timeAgo, content, imageUrl }: any) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.timeAgo}>{timeAgo}</Text>
      </View>
      <Text style={styles.content}>{content}</Text>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="heart-outline" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="chatbox-outline" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="bookmark-outline" size={24} color="grey" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Ionicons name="share-social-outline" size={24} color="green" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    margin: 8,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  username: {
    fontWeight: "bold",
  },
  timeAgo: {
    color: "gray",
  },
  content: {
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default FeedCard;
