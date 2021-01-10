import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import '../components/menu-tiles';
import MenuTiles from '../components/menu-tiles';

class Home extends Component {
  billingPressed = () => {
    this.props.navigation.navigate('billing');
  };
  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity onPress={this.billingPressed}>
            <MenuTiles
              icon="laptop"
              textl1="Billing"
              textl2="Invoicing and Payments"
            />
          </TouchableOpacity>
          <MenuTiles
            icon="poll"
            textl1="Report"
            textl2="Sale Report, Stock Report, etc"
          />
          <MenuTiles
            icon="today"
            textl1="Daily Summary"
            textl2="Daily Sale Report"
          />
          <MenuTiles
            icon="store"
            textl1="Outlet Report"
            textl2="Report about an individual outlet"
          />
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
  text: {
    color: '#ffffff',
    fontSize: 30,
    fontFamily: 'OpenSans-SemiBoldItalic',
  },
});

export default Home;
