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

const ProductScreen = ({navigation}) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://api.codingthailand.com/api/course"
      );
      setProduct(response.data.data);
    };
    getData();
  }, []);

  return (
    <View>
      <FlatList
        data={product}
        keyExtractor={(item, index) => item.id.toString()}
        renderItem={({ item }) => (
          <View> 
            <TouchableOpacity 
              style={styles.container}
              onPress={() => {
                // 1. Navigate to the Details route with params
                navigation.navigate("Details", {courseId: item.id});
              }}
            >
              <Image style={styles.thumbnail} source={{ uri: item.picture }} />
              <View style={styles.dataContainer}>
                <View style={styles.dataContent}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.detail}>{item.detail}</Text>
                </View>
              </View>
            </TouchableOpacity>
            <View style={styles.addButton} />
          </View>
        )}
      />
    </View>
  );
};

export default ProductScreen;

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
