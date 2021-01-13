import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Input, ThemeConsumer} from 'react-native-elements';

import ShopListItem from '../components/shop-list-item';
import {shopList} from '../api/shops';

class Billing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shops: [],
    };
  }
  async componentDidMount() {
    const response = await shopList();
    if (response.status === 200) {
      this.setState({
        shops: response.data.shops,
      });
    }
  }
  shopClicked = (shop) => {
    this.props.navigation.navigate('outletview', {shop: shop});
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
          {this.state.shops.length > 0 ? (
            this.state.shops.map((shop) => {
              return (
                <TouchableOpacity
                  onPress={() => this.shopClicked(shop)}
                  activeOpacity={0.8}>
                  <ShopListItem key={shop._id} shop={shop} />
                </TouchableOpacity>
              );
            })
          ) : (
            <ActivityIndicator size="large" color="#ffffff" />
          )}
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
