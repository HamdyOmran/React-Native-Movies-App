import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import ResultDetails from "./ResultsDetails";
import { withNavigation } from "react-navigation";

const ResultsList = ({ data, onEnd, navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        onEndReached={onEnd}
        onEndReachedThreshold={0}
        data={data}
        keyExtractor={(result) => result.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("MovieDetail", { movie: item })
              }
            >
              <ResultDetails result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
  },
  container: {
    flex: 1,
  },
});

export default withNavigation(ResultsList);
