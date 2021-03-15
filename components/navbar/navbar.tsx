import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MenuBar from '../menu-bar/menu-bar';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
      <MenuBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 60,
    backgroundColor: '#212155',
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: 24,
    color: '#fff'
  }
});

export default Navbar;