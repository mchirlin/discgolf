import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';

export default class HoleListItem extends Component {
  constructor() {
    super();

    this._onHoleListItemPress = this._onHoleListItemPress.bind(this);
  }

  _onHoleListItemPress() {
    this.props.navigator.push({
      name: 'hole',
      holeNumber: this.props.number,
      index: 1
    });
  }

  render() {
    return (
      <TouchableHighlight
         onPress={this._onHoleListItemPress}
         underlayColor={'gray'}
      >
        <View style={styles.container}>
          <Image style={styles.thumb} source={this.props.imgSource} />
          <View style={styles.infoContainer}>
            <Text>This is hole #{this.props.number}</Text>
            <Text>Par: {this.props.par}</Text>
            <Text>Distance: {this.props.distance}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    backgroundColor: '#F6F6F6'
  },
  thumb: {
    width: 64,
    height: 64,
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1,
    paddingLeft: 10
  }
});
