import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class HoleMap extends Component {

  render() {
    const { region } = this.props;

    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: -33.898678,
            longitude: 151.232786,
            latitudeDelta: 0.00125,
            longitudeDelta: 0.0005
          }}
          mapType={'hybrid'}
          zoomEnabled={false}
          rotateEnabled={false}
          scrollEnabled={false}
          pitchEnabled={false}
          >
          <MapView.Polyline
            strokeWidth={3}
            strokeColor={'#7dd0c9'}
            lineJoin={'round'}
            coordinates={this.props.coordinates}
            />
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
