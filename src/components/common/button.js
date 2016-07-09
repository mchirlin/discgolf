import React, {Component} from 'react';
import {
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

export default class Button extends Component {
  render() {
    return (
      <TouchableHighlight
        style={styles.button}
        underlayColor={'gray'}
        onPress={this.props.onPress}
      >
        <Text style={styles.buttonText}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
}

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'black',
    padding: 5,
    marginTop: 10
  },
  buttonText: {
    flex: 1,
    alignItems: 'center',
    fontSize: 20
  }
})
