import { useState } from "react";
import { authenticateAdminLogin } from "../service/api";

import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const loginInitialValues = {
  email: "",
  password: "",
};

const Login = ({ navigation }) => {
  const [login, setLogin] = useState(loginInitialValues);
  const [loginError, setLoginError] = useState(false);

  const onValueChange = (name, value) => {
    setLogin({ ...login, [name]: value });
  };

  const loginUser = async (navigation) => {
    let response = await authenticateAdminLogin(login);
    if (response.status === 200) {
      navigation.navigate("Home");
      console.log("good");
    } else {
      setLoginError(true);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Login</Text>
      <TextInput
        style={styles.inputStyle}
        placeholder={"Enter Eamid ID .."}
        onChangeText={(e) => onValueChange("email", e)}
        value={login.email}
      />
      <TextInput
        style={styles.inputStyle}
        placeholder={"Enter Password .."}
        onChangeText={(e) => onValueChange("password", e)}
        value={login.password}
      />
      {loginError && (
        <Text style={{ color: "red", marginBottom: 10 }}>
          Please enter valid username or password !
        </Text>
      )}
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => loginUser(navigation)}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#000",
    marginTop: 100,
    alignSelf: "center",
  },
  inputStyle: {
    paddingLeft: 20,
    height: 50,
    alignSelf: "center",
    marginTop: 30,
    borderWidth: 0.5,
    borderRadius: 10,
    width: "90%",
  },
  loginBtn: {
    height: 50,
    width: "40%",
    backgroundColor: "orange",
    marginTop: 20,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: "800",
  },
});

export default Login;
