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
              fontFamily: 'OpenSans-Bold',
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
                fontSize: 25,
                fontFamily: 'OpenSans-Light',
                color: '#ffffff',
              }}>
              Price: $100
            </Text>
          </View>
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Input
              label="Quantity"
              inputStyle={{color: '#ffffff', fontSize: 25}}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Product;
