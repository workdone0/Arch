import React, {Component} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';
import InvoiceView from '../components/invoice-view';
class OutletView extends Component {
  componentDidMount() {
    this.props.navigation.setOptions({
      title: 'Ambika Store',
    });
  }
  billingClicked = () => {
    this.props.navigation.navigate('invoice');
  };
  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView>
          <InvoiceView />
          <InvoiceView />
          <InvoiceView />
          <InvoiceView />
        </ScrollView>
        <Button
          style={{marginBottom: 0}}
          onPress={this.billingClicked}
          buttonStyle={{backgroundColor: '#f05454', height: 50}}
          title="Add Invoice"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#212529',
    flex: 1,
  },
});

export default OutletView;
