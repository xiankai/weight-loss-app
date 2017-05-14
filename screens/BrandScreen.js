import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';
import { ExpoLinksView } from '@expo/samples';

import brands from '../constants/Brands';

export default class BrandScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Brand',
  }

  render() {
    const { navigation } = this.props;
    const { brand, image } = navigation.state.params;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Text>{ navigation.state.params.brand }</Text>
            <Image source={image} style={styles.brandImage} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  brandImage: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
});
