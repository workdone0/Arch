import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button} from 'react-native-elements';
import InvoiceView from '../components/invoice-view';
class OutletView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shop: null,
    };
  }
  async componentDidMount() {
    this.props.navigation.setOptions({
      title: this.props.route.params.shop
        ? this.props.route.params.shop.name
        : '',
    });
    this.setState({
      shop: await this.props.route.params.shop,
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
          TouchableComponent={TouchableWithoutFeedback}
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
