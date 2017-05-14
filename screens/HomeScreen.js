import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import brands from '../constants/Brands';

import { MonoText } from '../components/StyledText';
import Brand from '../components/Brand';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Home',
  }

  handleSelectBrand = (brand, image) => () => {
    this.props.navigation.navigate('Brand', { brand, image });
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.welcomeContainer}>
            <Text style={styles.header}>DkJ - Dean's kilojoules tracker</Text>
            <Text style={styles.header}>Where are you eating at?</Text>
          </View>

          <View style={styles.getStartedContainer}>
            {
              brands.map(({ name, image }) => (
                <Brand
                  key={name}
                  title={name}
                  image={image}
                  navigate={this.handleSelectBrand(name, image)}
                />
              ))
            }
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
  header: {
    fontSize: 30,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  brandImage: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
});
