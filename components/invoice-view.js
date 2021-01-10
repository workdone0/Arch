import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {Divider, Input, Button} from 'react-native-elements';
import PaymentRow from './payment-row';

class InvoiceView extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.firstRow}>
          <Text style={styles.invNo}>Inv. No: #2225145425</Text>
        </View>
        <Divider style={styles.divider} />
        <View style={styles.secondRow}>
          <View style={styles.dView}>
            <Text style={styles.textR2}>Date</Text>
            <Text style={styles.textR2}>22/10/2020</Text>
          </View>
          <View style={styles.aView}>
            <Text style={styles.textR2}>Amount</Text>
            <Text style={styles.textR2}>120000</Text>
          </View>
          <View style={styles.pView}>
            <Text style={styles.textR2}>Already Paid</Text>
            <Text style={styles.textR2}>65000</Text>
          </View>
        </View>
        <PaymentRow />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#343a40',
    margin: 10,
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  secondRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  firstRow: {
    paddingHorizontal: 10,
  },
  dView: {
    margin: 10,
    justifyContent: 'space-between',
  },
  aView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  pView: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  invNo: {
    color: '#ffffff',
    fontSize: 30,
    fontFamily: 'OpenSans-Light',
  },
  textR2: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'OpenSans-Light',
  },
  divider: {
    backgroundColor: '#ffffff',
    margin: 4,
  },
});

export default InvoiceView;
