import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>Account</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#FFAAAA",
    height: 50,

  },
  textStyle: {
    fontSize: 20,
    margin:10
  },
});

export default Header;
