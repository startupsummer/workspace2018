import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './Footer.styles';

const Footer = (props) => (
  <View style={styles.footer}>
    <TouchableOpacity style={styles.wrap} onPress={props.toggleActiveTab}>
        <View style={styles.content}>
          <Text style={styles.text}>
            {`Show ${props.nextTab}`}
          </Text>
        </View>     
    </TouchableOpacity>
  </View>   
  
);

export default Footer;
