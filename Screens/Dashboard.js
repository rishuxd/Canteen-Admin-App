import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useState } from "react";

import Add from "../Tabs/Add";
import Items from "../Tabs/Items";
import Transactions from "../Tabs/Transactions";
import Orders from "../Tabs/Orders";
import Notifications from "../Tabs/Notifications";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Items />
      ) : selectedTab == 1 ? (
        <Transactions />
      ) : selectedTab == 2 ? (
        <Add />
      ) : selectedTab == 3 ? (
        <Orders />
      ) : (
        <Notifications />
      )}
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(0);
          }}
        >
          <Image
            source={require("../Images/items.png")}
            style={[
              styles.bottomTabImg,
              { tintColor: selectedTab == 0 ? "red" : "black" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Image
            source={require("../Images/transaction.png")}
            style={[
              styles.bottomTabImg,
              { tintColor: selectedTab == 1 ? "red" : "black" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(2);
          }}
        >
          <Image
            source={require("../Images/add.png")}
            style={[
              styles.bottomTabImg,
              {
                width: 35,
                height: 35,
                tintColor: selectedTab == 2 ? "red" : "black",
              },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(3);
          }}
        >
          <Image
            source={require("../Images/orders.png")}
            style={[
              styles.bottomTabImg,
              { tintColor: selectedTab == 3 ? "red" : "black" },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottomTab}
          onPress={() => {
            setSelectedTab(4);
          }}
        >
          <Image
            source={require("../Images/notification.png")}
            style={[
              styles.bottomTabImg,
              { tintColor: selectedTab == 4 ? "red" : "black" },
            ]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomView: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
  },
  bottomTab: {
    height: "100%",
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
  },
  bottomTabImg: {
    width: 24,
    height: 24,
  },
});
