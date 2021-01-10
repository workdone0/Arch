import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon} from 'react-native-elements';

class ShopListItem extends Component {
  render() {
    return (
      //Row
      <View style={styles.mainRow}>
        <View style={styles.col1}>
          <Text style={styles.typeText}>R</Text>
        </View>
        <View style={styles.col2}>
          <View>
            <Text style={styles.nameText}>Ambika Store</Text>
          </View>
          <View>
            <Text style={styles.addressText}>Gobarsahi</Text>
          </View>
        </View>
        <View style={styles.col3}>
          <Icon name="forward" color="#ffffff" size={45} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainRow: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 10,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: '#343a40',
  },
  col1: {
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  col2: {
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  col3: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: 5,
    alignItems: 'center',
    flexGrow: 1,
  },
  typeText: {
    color: '#ffffff',
    fontSize: 60,
    fontFamily: 'OpenSans-Bold',
  },
  nameText: {
    color: '#ffffff',
    fontSize: 30,
    fontFamily: 'OpenSans-Regular',
  },
  addressText: {
    color: '#ffffff',
    fontSize: 20,
    fontFamily: 'OpenSans-Regular',
  },
});

export default ShopListItem;
