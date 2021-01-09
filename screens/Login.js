import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

class Login extends Component {
  buttonPressed = () => {
    this.props.navigation.navigate('home');
  };
  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView style={{flex: 1}}>
          <View style={styles.firstView}>
            <Text style={styles.textl1}>Let's sign you in.</Text>
            <Text style={styles.textl2}>Welcome back.</Text>
            <Text style={styles.textl3}>You have been missed.</Text>
          </View>
          <View style={styles.secondView}>
            <Input
              inputStyle={styles.textInputStyle}
              inputContainerStyle={styles.containerStyle}
              placeholder="User Id"
              leftIcon={{
                type: 'font-awesome',
                name: 'user',
                color: '#ffffff',
              }}
            />
            <Input
              inputStyle={styles.textInputStyle}
              inputContainerStyle={styles.containerStyle}
              placeholder="Password"
              leftIcon={{
                type: 'font-awesome',
                name: 'lock',
                color: '#ffffff',
              }}
            />
          </View>
        </ScrollView>
        <View style={styles.thirdView}>
          <Button
            buttonStyle={styles.button}
            title="Login"
            TouchableComponent={TouchableWithoutFeedback}
            onPress={this.buttonPressed}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: '#212529',
    flex: 1,
  },
  textl1: {
    color: '#ffffff',
    fontSize: 45,
    fontFamily: 'OpenSans-Bold',
    marginBottom: 10,
  },
  textl2: {
    color: '#ffffff',
    fontSize: 35,
    fontFamily: 'OpenSans-Regular',
    marginBottom: 10,
  },
  textl3: {
    color: '#ffffff',
    fontSize: 35,
    fontFamily: 'OpenSans-Regular',
    marginBottom: 10,
  },
  firstView: {
    flex: 1,
    paddingTop: 20,
    paddingLeft: 10,
  },
  secondView: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 45,
  },
  thirdView: {
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingVertical: 10,
  },
  button: {
    borderRadius: 10,
    height: 50,
    backgroundColor: '#343a40',
  },
  containerStyle: {
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  textInputStyle: {
    color: '#ffffff',
  },
});

export default Login;
