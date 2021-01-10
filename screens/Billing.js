import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Input} from 'react-native-elements';

import ShopListItem from '../components/shop-list-item';

class Billing extends Component {
  shopClicked = () => {
    this.props.navigation.navigate('outletview');
  };
  render() {
    return (
      <View style={styles.mainView}>
        <Input
          inputStyle={styles.textInputStyle}
          inputContainerStyle={styles.containerStyle}
          placeholder="Search for Outlets"
          leftIcon={{
            type: 'font-awesome',
            name: 'search',
            color: '#ffffff',
          }}
        />
        <ScrollView>
          <TouchableOpacity onPress={this.shopClicked}>
            <ShopListItem />
          </TouchableOpacity>
          <ShopListItem />
          <ShopListItem />
          <ShopListItem />
          <ShopListItem />
          <ShopListItem />
          <ShopListItem />
          <ShopListItem />
          <ShopListItem />
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
  containerStyle: {
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  textInputStyle: {
    color: '#ffffff',
  },
});

export default Billing;
