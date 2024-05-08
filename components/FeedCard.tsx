import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { supabase } from '../lib/supabase';
import { Ionicons } from "@expo/vector-icons";

interface Comment {
  id: number;
  content: string;
  user_id: number;
  post_id: number;
  created_at: string;
}

interface FeedCardProps {
  title: string;
  username: string;
  created_at: string;
  content: string;
  imageLocalPath?: string; // Change image_url to imageLocalPath
  hashtags?: string[]; // Add hashtags prop
  onDeleteComment: (id: number) => void;
}

const FeedCard = ({ title, username, created_at, content, imageLocalPath, hashtags, onDeleteComment }: FeedCardProps) => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<Comment[]>([]);
  const [showCommentModal, setShowCommentModal] = useState(false);

  useEffect(() => {
    // Fetch comments from the server or any other source
    // For now, setting it to an empty array
    setComments([]);
  }, []);

  const handleCommentSubmit = async () => {
    if (comment.trim() === "") return;
    try {
      const newComment = {
        id: comments.length + 1, // Generate a unique ID (replace with your logic)
        content: comment,
        user_id: 1, // Replace with the actual user id
        post_id: 1, // Replace with the actual post id
        created_at: new Date().toISOString(),
      };
      setComments([...comments, newComment]);
      setComment("");
      setShowCommentModal(false);
    } catch (error: any) {
      console.error("Error adding comment:", (error as Error).message);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.username}>{username}</Text>
        <Text style={styles.timeAgo}>{created_at}</Text>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      {imageLocalPath && (
        <Image
          source={{ uri: imageLocalPath }}
          style={styles.image}
          onError={(error) => console.error("Error loading image:", error)}
        />
      )}
      <View style={styles.hashtagContainer}>
        {hashtags && hashtags.map((tag, index) => (
          <TouchableOpacity key={index} onPress={() => console.log('Hashtag pressed:', tag)}>
            <Text style={styles.hashtag}>{tag}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => setShowCommentModal(true)}>
          <View style={styles.commentIconContainer}>
            <Ionicons name="chatbox-outline" size={24} color="blue" />
            <Text style={styles.commentCountText}>{comments.length}</Text>
          </View>
        </TouchableOpacity>
        {/* <CustomIconButton
          iconName="heart"
          iconColor="gray"
          count={likeCount}
          onPress={handleLikePress}
        /> */}
        <TouchableOpacity>
          <Ionicons name="share-social-outline" size={24} color="green" />
        </TouchableOpacity>
      </View>
      {/* Comments section */}
      <View style={styles.commentsSection}>
        {comments.map((commentData) => (
          <View key={commentData.id} style={styles.commentItem}>
            <Text>{commentData.content}</Text>
            <TouchableOpacity onPress={() => onDeleteComment(commentData.id)}>
              <Text style={styles.deleteButton}>Delete</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      {/* Comment input */}
      <View style={styles.commentInputContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="Write your request..."
          value={comment}
          onChangeText={setComment}
          onSubmitEditing={handleCommentSubmit}
        />
        <TouchableOpacity style={styles.commentButton} onPress={handleCommentSubmit}>
          <Text style={styles.commentButtonText}>Request for Details</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 20,
    margin: 5,
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
  title: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 3,
  },
  content: {
    marginBottom: 12,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    resizeMode: "cover",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  commentsSection: {
    marginTop: 20,
  },
  commentIconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentCountText: {
    marginLeft: 5,
  },
  commentItem: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  commentInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  commentInput: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
  },
  commentButton: {
    backgroundColor: "blue",
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  commentButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  deleteButton: {
    color: "black",
    fontWeight: "bold",
  },
  hashtagContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 10,
  },
  hashtag: {
    color: "blue",
    marginRight: 5,
  },
});

export default FeedCard;
