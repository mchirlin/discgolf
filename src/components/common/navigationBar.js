import React, {Component} from 'react'
import {
  Navigator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

module.exports = (
  <Navigator.NavigationBar
    routeMapper={{
      LeftButton: (route, navigator, index, navState) =>
        {
          if (route.index === 0) {
            return null;
          } else {
            return (
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => navigator.pop()}>
                <View>
                  <Text>Back</Text>
                </View>
              </TouchableOpacity>
            );
          }
        },
      RightButton: () => { return null; },
      Title: (route, navigator, index, navState) =>
        {
          return (
            <View style={{ padding: 10 }}>
              <Text>Some title here</Text>
            </View>
          );
        },
     }}
     style={{
       backgroundColor: '#7dd0c9'
     }}
   />
)
