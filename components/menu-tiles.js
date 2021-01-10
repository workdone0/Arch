import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

class MenuTiles extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.viewA}>
          <Icon name={`${this.props.icon}`} color="#ffffff" size={25} />
          <Icon name="forward" color="#ffffff" size={25} />
        </View>
        <Text style={styles.textl1}>{this.props.textl1}</Text>
        <Text style={styles.textl2}>{this.props.textl2}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainView: {
    elevation: 5,
    backgroundColor: '#393e46',
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
  },
  viewA: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginBottom: 5,
  },
  textl1: {
    fontSize: 25,
    color: '#ffffff',
    fontFamily: 'OpenSans-Regular',
  },
  textl2: {
    fontSize: 20,
    color: '#ffffff',
    fontFamily: 'OpenSans-Light',
  },
});

export default MenuTiles;
