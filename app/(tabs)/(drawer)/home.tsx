import React, { useState, useEffect, useRef } from "react";
import { View, SafeAreaView, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { supabase } from "../../../lib/supabase";
import FeedCard from "../../../components/FeedCard";

const Page = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [isFetching, setIsFetching] = useState(false);
  const [hasMorePosts, setHasMorePosts] = useState(true);

  const flatListRef = useRef<FlatList | null>(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    if (!hasMorePosts || isFetching) return;
    setIsFetching(true);
    setError(null);
    try {
      const { data, error }: { data: any[] | null; error: any } = await supabase
        .from("posts")
        .select("*")
        .range(page * 3 - 2, page * 3);
      if (error) {
        throw new Error(error.message);
      }
      const postsWithLocalPaths = data?.map((post) => ({
        ...post,
        imageLocalPath: post.image_url, // Assuming the image URL is stored in 'image_url' field
      })) || [];
      if (postsWithLocalPaths.length < 3) {
        setHasMorePosts(false);
      }
      // Prepend new posts to the existing list
      setPosts((prevPosts) => [...postsWithLocalPaths, ...prevPosts]);
      setPage((prevPage) => prevPage + 1);
    } catch (error: any) {
      setError(error.message as string);
      console.error("Error fetching posts:", error);
    } finally {
      setIsLoading(false);
      setIsFetching(false);
    }
  };

  const handleLoadMore = () => {
    fetchPosts();
  };

  const renderFooter = () => {
    if (isFetching && hasMorePosts) {
      return (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="blue" />
        </View>
      );
    } else {
      return null;
    }
  };

  const renderItem = ({ item, index }: { item: any; index: number }) => {
    return (
      <View>
        <FeedCard imageLocalPath={item.imageLocalPath} {...item} />
      </View>
    );
  };

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({ offset: 0, animated: true });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={posts}
        keyExtractor={(item: any) => item.id}
        renderItem={renderItem}
        ListFooterComponent={renderFooter()}
        onEndReachedThreshold={0.1}
        onEndReached={handleLoadMore}
      />
    </SafeAreaView>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
  },
});
