import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Rating } from "react-native-elements";

const MovieDetailScreen = ({ navigation }) => {
  const movie = navigation.getParam("movie");
  const [poster, setPoster] = useState(
    `http://image.tmdb.org/t/p/w92/${movie.poster_path}`
  );

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={{ marginHorizontal: 10 }}>
          <Image source={{ uri: poster }} style={styles.image} />
        </View>
        <View>
          <Text style={styles.title}>{movie.title}</Text>
          <Text style={styles.date}>{movie.release_date}</Text>
          <Rating
            imageSize={20}
            readonly
            startingValue={movie.vote_average}
            ratingCount={10}
          />
          <Text style={styles.review}>Reviews : {movie.vote_count}</Text>
        </View>
      </View>
      <View>
        <Text style={styles.overview}>{movie.overview}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    backgroundColor: "white",
    flex: 1,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  review: {
    fontSize: 20,
    marginBottom: 10,
    marginRight: 5,
    marginTop: 10,
  },
  date: {
    fontSize: 22,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    width: 200,
    marginBottom: 10,
  },
  overview: {
    color: "#777",
    width: 400,
    marginVertical: 20,
    marginLeft: 15,
    fontSize: 18,
  },
});

export default MovieDetailScreen;
