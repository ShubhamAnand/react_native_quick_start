import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class Chart extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://www.gsmarena.com/'}}
        style={{marginTop: 20}}
      />
    );
  }
}