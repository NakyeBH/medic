// AddPost.js

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const AddPost = ({ onAddPost }: any) => {
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleAddPost = () => {
    if (content.trim() !== "") {
      const newPost = {
        id: String(Math.random()), // Using a simple random ID for demonstration
        username: "JohnDoe", // Assuming the user is currently logged in
        timeAgo: "just now",
        content,
        imageUrl,
      };

      onAddPost(newPost);
      // Clear the input fields after adding the post
      setContent("");
      setImageUrl("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add a Post</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter your post content"
        value={content}
        onChangeText={(text) => setContent(text)}
        multiline
      />

      <TextInput
        style={styles.input}
        placeholder="Enter image URL (optional)"
        value={imageUrl}
        onChangeText={(text) => setImageUrl(text)}
      />

      <TouchableOpacity style={styles.addButton} onPress={handleAddPost}>
        <Text style={styles.addButtonText}>Add Post</Text>
      </TouchableOpacity>
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
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
  },
  addButton: {
    backgroundColor: "#3498db",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default AddPost;