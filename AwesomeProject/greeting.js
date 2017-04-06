import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';

export class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export class LotsOfGreetings extends Component {
  render () {
    return (
      <View style={{alignItems: 'center'}}>
        <Greeting name='Frank'/>
        <Greeting name='Bi'/>
        <Greeting name='322'/>
      </View>
    );
  }
}
