import React, { useState } from "react";
import { addItem } from "../service/api";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const itemInitialValues = {
  id: "",
  name: "",
  stock: true,
  price: null,
  ingredients: "",
  category: "",
  url: "",
  quantity: 1,
  orders: {},
};

const Add = () => {
  const [item, setItem] = useState(itemInitialValues);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const onValueChange = (name, value) => {
    setItem({ ...item, [name]: value });
  };

  const addToProducts = async () => {
    let response = await addItem(item);
    if (!response) {
      setError(true);
      return;
    } else {
      setSuccess(true);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Item</Text>
      </View>

      {success && (
        <View>
          <Text>Item added successfully.</Text>
        </View>
      )}

      <TextInput
        placeholder="Enter Item Id"
        style={styles.inputStyle}
        onChangeText={(e) => onValueChange("id", e)}
        value={item.id}
      />
      <TextInput
        placeholder="Enter Item Name"
        style={styles.inputStyle}
        onChangeText={(e) => onValueChange("name", e)}
        value={item.name}
      />
      <TextInput
        placeholder="Enter Ingredients"
        style={styles.inputStyle}
        onChangeText={(e) => onValueChange("ingredients", e)}
        value={item.ingredients}
      />
      <TextInput
        placeholder="Enter Category"
        style={styles.inputStyle}
        onChangeText={(e) => onValueChange("category", e)}
        value={item.category}
      />
      <TextInput
        placeholder="Enter Item Image URL"
        style={styles.inputStyle}
        onChangeText={(e) => onValueChange("url", e)}
        value={item.url}
      />
      <TextInput
        placeholder="Enter Item Price"
        style={styles.inputStyle}
        onChangeText={(e) => onValueChange("price", e)}
        value={item.price}
      />

      <Text style={{ alignSelf: "center", marginTop: 20 }}>OR</Text>
      <TouchableOpacity style={styles.pickBtn}>
        <Text>Pick Image From Gallery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.uploadBtn}
        onPress={() => {
          addToProducts();
        }}
      >
        <Text style={{ color: "#Fff" }}>Upload Item</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    height: 60,
    width: "100%",
    backgroundColor: "#fff",
    elevation: 5,
    paddingLeft: 20,
    justifyContent: "center",
  },

  headerText: {
    fontSize: 18,
    fontWeight: "700",
  },

  inputStyle: {
    width: "90%",
    height: 50,
    fontSize: 16,
    borderRadius: 10,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 30,
    backgroundColor: "#A6E3E9",
    alignSelf: "center",
  },

  pickBtn: {
    width: "90%",
    height: 50,
    borderWidth: 0.5,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },

  uploadBtn: {
    backgroundColor: "#5246f2",
    width: "90%",
    height: 50,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 70,
  },

  imageStyle: {
    width: "90%",
    height: 200,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
  },
});

export default Add;
