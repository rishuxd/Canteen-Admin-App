import { View, StyleSheet, Button, Text, Image } from "react-native";

import { useEffect } from "react";
import { getProducts } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const Orders = () => {
  const { products } = useSelector((state) => state.getProducts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      {products.map((e, i) => {
        return Object.values(e)
          .filter((val1) => val1.name !== undefined)
          .map((val) => (
            <View style={styles.menuItemStyle}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <FoodImage food={val} />
                <FoodInfo food={val} />
              </View>
            </View>
          ));
      })}
    </View>
  );
};

const FoodInfo = (props) => (
  <View style={{ marginLeft: 10 }}>
    <Text style={styles.titleStyle}>{props.food.name}</Text>
    <Text style={{ color: "#666666" }}>Quantity: {props.food.quantity}</Text>
    <Text>Total: ₹{props.food.price.full * props.food.quantity}</Text>
  </View>
);

const FoodImage = ({ ...props }) => (
  <View>
    <Image source={{ uri: props.food.url }} style={styles.foodImage} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  foodImage: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  menuItemStyle: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default Orders;
