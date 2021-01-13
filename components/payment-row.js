import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Button, Input} from 'react-native-elements';

class PaymentRow extends Component {
  render() {
    return (
      <View style={{width: '100%', flexDirection: 'row'}}>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Input
            placeholder="Enter Payment Amount"
            inputStyle={{color: '#ffffff'}}
            keyboardType="phone-pad"
          />
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
          }}>
          <Button title="Pay" type="solid" />
        </View>
      </View>
    );
  }
}

export default PaymentRow;
