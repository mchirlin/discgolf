import React, {Component} from 'react';
import {
  Image,
  Text,
  View,
  StyleSheet
} from 'react-native';
import Parse from 'parse/react-native';
import HoleMap from './holeMap';
import HoleObject from '../../objects/holeObject';

const THUMB_URLS = [
  require('../../../img/1a.jpg')
  ];

export default class Hole extends Component {
  constructor() {
    super();

    this.state = {
      hole: null
    }
  }

  _onHoleLoaded(hole) {
    this.setState({
      hole: hole.get("hole")
    });
  }

  componentWillMount() {
    var query = new Parse.Query(HoleObject);
    query.get(this.props.id, {
      success: (hole) => {
        console.log(hole);
        this._onHoleLoaded(hole)
      },
      error: (object, error) => {
        console.log(object, error);
      }
    })
  }

  render() {
    if (!this.state.hole) {
      return <Text>Loading...</Text>
    }

    return (
      <View style={styles.container}>
        <View style={styles.mapContainer}>
          <HoleMap coordinates={this.state.hole.coordinates}/>
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.imageContainer}>
            <View style={{justifyContent: 'flex-start'}}>
              <Text>Par: {this.state.hole.par}</Text>
              <Text>Distance: {this.state.hole.distance}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>Start</Text>
              <Image style={styles.thumb} source={THUMB_URLS[0]} />
              <Text>{this.state.hole.startText}</Text>
            </View>
            <View style={styles.column}>
              <Text style={styles.label}>End</Text>
              <Image style={styles.thumb} source={THUMB_URLS[0]} />
              <Text>{this.state.hole.endText}</Text>
            </View>
          </View>
          <View style={{height: 2, backgroundColor: '#7dd0c9'}} />
          <View style={styles.instructionContainer}>
            <View style={styles.column}>
              <Text style={styles.label}>Special Instructions</Text>
              <Text>{this.state.hole.instructions}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapContainer: {
    flex: 3,
    borderColor: '#7dd0c9',
    borderBottomWidth: 2
  },
  descriptionContainer: {
    flex: 2
  },
  imageContainer: {
    flex: 3,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  instructionContainer: {
    flex: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  column: {
    alignItems: 'center'
  },
  label: {
    fontSize: 20
  },
  thumb: {
    width: 100,
    height: 100,
  },
});
