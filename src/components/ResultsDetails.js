import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import { Divider } from "react-native-elements";

const ResultDetails = ({ result }) => {
  const [poster, setPoster] = useState(
    `http://image.tmdb.org/t/p/w92/${result.poster_path}`
  );

  // <ImageBackground
  //   style={{
  //     width: 100,
  //     height: 100,
  //     marginRight: 20,
  //     borderRadius: 10,
  //   }}
  //   source={
  //     require("../../assets/images/Spinner.gif") //Indicator
  //   }
  // >
  //   <Image
  //     style={{
  //       width: 100,
  //       height: 100,
  //       marginRight: 20,
  //       borderRadius: 10,
  //     }}
  //     source={{
  //       uri: `//Image U want To Show`,
  //     }}
  //   />
  // </ImageBackground>;

  return (
    <View>
      <View style={styles.resultStyle}>
        <View>
          <ImageBackground style={styles.background}>
            <Image source={{ uri: poster }} style={styles.image} />
          </ImageBackground>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{result.title}</Text>
          <Text style={styles.date}>{result.release_date}</Text>
          <Text style={styles.overview}>{result.overview}</Text>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );
};

const styles = StyleSheet.create({
  date: {
    fontSize: 16,
  },
  background: {
    borderRadius: 10,
    width: 100,
    height: 150,
    backgroundColor: "gray",
  },
  overview: {
    color: "#777",
    flexShrink: 1,
    width: 270,
  },
  divider: {
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  info: {
    marginLeft: 10,
  },
  name: {
    width: 270,
    fontWeight: "bold",
    fontSize: 22,
  },
  resultStyle: {
    marginHorizontal: 15,
    marginVertical: 10,
    flexDirection: "row",
  },
});

export default ResultDetails;
