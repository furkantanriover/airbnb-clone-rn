import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Page = () => {
  return (
    <View>
      <Link href="(modals)/login">Login</Link>
      <Link href="(modals)/booking">Booking</Link>
      <Link href="listing/1234">listing</Link>
      <Link href="listing/1234">listing</Link>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({});
