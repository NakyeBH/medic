import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AddPost from "../../components/Post";
import FeedCard from "../../components/FeedCard";

const Page = ({ onAddPost }: any) => {
  const [posts, setPosts] = useState([]);

  const handleAddPost = (newPost: any) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };

  return (
    <View>
      <AddPost onAddPost={handleAddPost} />
      <FeedCard data={posts} />
    </View>
  );
};

export default Page;