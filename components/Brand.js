import React, { PropTypes } from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import brands from '../constants/Brands';

const Brand = ({
  navigate,
  title,
  image,
}) => (
  <TouchableOpacity
    onPress={navigate}>
    <Image
      source={image}
      title={title}
      style={styles.brandImage} />
    </TouchableOpacity>
);

const styles = StyleSheet.create({
  brandImage: {
    width: 300,
    height: 100,
    resizeMode: 'contain',
  },
});

Brand.propTypes = {
  navigate: PropTypes.func.isRequired,
  image: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
}

export default Brand;
