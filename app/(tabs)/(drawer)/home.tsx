import { View, ScrollView, VirtualizedList } from "react-native";
import React from "react";
import FeedCard from "../../../components/FeedCard";
import data from "../../../components/lib/mockdata";

const Page = () => {
  return (
    <ScrollView>
      <View>
        <VirtualizedList
          data={data}
          keyExtractor={(item:any) => item.id}
          renderItem={({ item }) => <FeedCard {...item} />}
          getItemCount={() => data.length}
          getItem={(data, index) => data[index]}  // Add this line to provide item data
        />
      </View>
    </ScrollView>
  );
};

export default Page;
