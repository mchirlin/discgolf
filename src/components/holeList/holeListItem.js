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
      id: this.props.id,
      name: 'hole'
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
            <Text>This is hole #{this.props.hole.index}</Text>
            <Text>Par: {this.props.hole.par}</Text>
            <Text>Distance: {this.props.hole.distance}</Text>
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
