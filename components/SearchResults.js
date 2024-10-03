import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const SearchResults = ({ data, input, setInput }) => {
  return (
    <View style={{ padding: 10 }}>
      <FlatList
        data={data}
        keyExtractor={(item) => item?.employeeId?.toString() || Math.random().toString()}
        renderItem={({ item }) => {
          // Ensure employeeName and input are valid strings
          const employeeName = item?.employeeName || "";
          const searchInput = input || "";

          if (employeeName.toLowerCase().includes(searchInput.toLowerCase())) {
            return (
              <View
                style={{ marginVertical: 10, gap: 10, flexDirection: "row" }}
              >
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 8,
                    padding: 10,
                    backgroundColor: "#4b6cb7",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ color: "white", fontSize: 16 }}>
                    {employeeName.charAt(0)}
                  </Text>
                </View>

                <View>
                  <Text style={{ fontSize: 16, fontWeight: "bold" }}>
                    {employeeName}
                  </Text>
                  <Text style={{ marginTop: 5, color: "gray" }}>
                    {item?.designation} ({item?.employeeId})
                  </Text>
                </View>
              </View>
            );
          }

          // If no match, return null (won't render anything)
          return null;
        }}
      />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
