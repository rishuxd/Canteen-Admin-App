import React, { useEffect, useState } from "react";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { getItemList, deleteItem } from "../service/api";

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const Items = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  const [items, setItems] = useState([]);

  const fetchMyAPI = async () => {
    const data = await getItemList();
    setItems(data);
  };

  useEffect(() => {
    fetchMyAPI();
  }, [isFocused, fetchMyAPI]);

  const handleDelete = (data) => {
    deleteItem(data);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.itemView}>
              <Image source={{ uri: item.url }} style={styles.itemImage} />
              <View style={styles.nameView}>
                <Text style={styles.nameText}>{item.name}</Text>
                <Text style={styles.descText}>{item.ingredients}</Text>
                <View style={styles.priceView}>
                  <Text style={styles.priceText}>{"$" + item.price}</Text>
                </View>
              </View>
              <View style={{ margin: 10 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("EditItem", {
                      data: item.data,
                      id: item.id,
                    });
                  }}
                >
                  <Image
                    source={require("../Images/edit.png")}
                    style={styles.icon}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    handleDelete(item);
                  }}
                >
                  <Image
                    source={require("../Images/delete.png")}
                    style={[styles.icon, { marginTop: 20 }]}
                  />
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Items;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  itemView: {
    flexDirection: "row",
    width: "90%",
    alignSelf: "center",
    backgroundColor: "#fff",
    elevation: 4,
    marginTop: 10,
    borderRadius: 10,
    height: 100,
    marginBottom: 10,
  },

  itemImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
    margin: 5,
  },

  nameView: {
    width: "53%",
    margin: 10,
  },

  priceView: {
    flexDirection: "row",
    alignItems: "center",
  },

  nameText: {
    fontSize: 18,
    fontWeight: "700",
  },

  descText: {
    fontSize: 14,
    color: "grey",
  },

  priceText: {
    fontSize: 18,
    color: "green",
    fontWeight: "700",
  },

  icon: {
    width: 24,
    height: 24,
  },
});
