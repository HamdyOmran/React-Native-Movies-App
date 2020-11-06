import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const HomeScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, currentPage, setCurrentPage] = useResult();

  const onEndReached = () => {
    setCurrentPage(currentPage + 1);
    searchApi(term, currentPage, false);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term, 1, true)}
      />
      <ResultsList data={results} onEnd={onEndReached} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  error: {
    fontSize: 22,
    color: "red",
    alignSelf: "center",
    marginTop: 250,
  },
});

export default HomeScreen;
