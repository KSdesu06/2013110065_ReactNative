import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
  Button,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";

const DetailProduct = ({ route }) => {
  const { courseId } = route.params;
  const [courseDetail, setCourseDetail] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        `https://api.codingthailand.com/api/course/${courseId}`
      );
      setCourseDetail(response.data.data);
    };
    getData();
  }, [courseId]);

  return (
    <View>
      <FlatList
        data={courseDetail}
        keyExtractor={(item, index) => item.id}
        renderItem={({ item }) => (
          <View>
            <Image style={styles.thumbnail} source={{ uri: item.picture }} />
            <View style={styles.dataContainer}>
              <View style={styles.dataContent}>
                <Text style={styles.title}>{item.ch_title}</Text>
                <Text>{item.ch_dateadd}</Text>
              </View>
            </View>
            <View style={styles.addButton} />
          </View>
        )}
      />
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({
  container: {
    height: 80,
    elevation: 3,
    borderColor: "gray",
    borderRadius: 5,
    flexDirection: "row",
    marginHorizontal: 20,
  },
  dataContainer: {
    flex: 1,
  },
  thumbnail: {
    width: 70,
    height: 70,
  },
  dataContent: {
    marginTop: 5,
    marginLeft: 15,
  },
  title: {
    color: "#444",
    fontSize: 18,
    fontWeight: "bold",
  },
  detail: { fontSize: 16, color: "#888", fontWeight: "700" },
  addButton: {
    height: 0.5,
    width: "100%",
    marginBottom: 10,
    backgroundColor: "#c8c8c8",
  },
});
