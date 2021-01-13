import React, {Component} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {Input, Button} from 'react-native-elements';

import Product from '../components/product';
class Invoice extends Component {
  confirmClicked = () => {
    this.props.navigation.navigate('home');
  };
  render() {
    return (
      <View style={styles.mainView}>
        <Input
          inputStyle={styles.textInputStyle}
          inputContainerStyle={styles.containerStyle}
          placeholder="Search for Products"
          leftIcon={{
            type: 'font-awesome',
            name: 'search',
            color: '#ffffff',
          }}
        />
        <ScrollView>
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
        </ScrollView>
        <Button
          style={{marginBottom: 0}}
          onPress={this.confirmClicked}
          buttonStyle={{backgroundColor: '#f05454', height: 50}}
          title="Confirm"
          TouchableComponent={TouchableWithoutFeedback}
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
export default Invoice;
