import React, {Component} from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import {Divider} from 'react-native-elements';

import '../components/menu-titles';
import MenuTiles from '../components/menu-titles';
class Home extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.firstView}>
          <Text style={styles.text}>Select an option</Text>
          <Divider style={styles.divider} />
        </View>
        <ScrollView>
          <View style={styles.secondView}>
            <MenuTiles
              icon="laptop"
              textl1="Billing"
              textl2="Loream Epsum is the greatest"
            />
          </View>
          <View style={styles.thirdView}>
            <MenuTiles
              icon="poll"
              textl1="Report"
              textl2="Loream Epsum is the greatest"
            />
          </View>
          <View style={styles.fourthView}>
            <MenuTiles
              icon="today"
              textl1="Daily Summary"
              textl2="Loream Epsum is the greatest"
            />
          </View>
          <View style={styles.fifthView}>
            <MenuTiles
              icon="store"
              textl1="Outlet Report"
              textl2="Loream Epsum is the greatest"
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#212529',
    flex: 1,
  },
  firstView: {
    flex: 1,
    marginBottom: 40,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  secondView: {
    flex: 1,
  },
  thirdView: {
    flex: 1,
  },
  fourthView: {
    flex: 1,
  },
  fifthView: {
    flex: 1,
  },
  text: {
    color: '#ffffff',
    fontSize: 40,
    fontFamily: 'OpenSans-Bold',
  },
  divider: {
    height: 5,
    color: '#ffffff',
  },
});

export default Home;
