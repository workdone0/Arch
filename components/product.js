import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Icon, Input} from 'react-native-elements';

class Product extends Component {
  render() {
    return (
      <View style={{backgroundColor: '#343a40', margin: 10, borderRadius: 10}}>
        <View style={{alignItems: 'center'}}>
          <Text
            style={{
              fontSize: 30,
              fontFamily: 'OpenSans-Light',
              color: '#ffffff',
            }}>
            H. Neem Face Wash
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text
              style={{
                fontSize: 20,
                fontFamily: 'OpenSans-Light',
                color: '#ffffff',
                marginBottom: 10,
              }}>
              MRP: ₹100
            </Text>
            <Text
              style={{
                fontSize: 20,
                backgroundColor: '#f05454',
                fontFamily: 'OpenSans-Light',
                color: '#ffffff',
              }}>
              In Stock: 52
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Input
              label="Quantity"
              inputStyle={{color: '#ffffff', fontSize: 25}}
              keyboardType="phone-pad"
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Product;
