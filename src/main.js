import React, {Component} from 'react';
import {
  Navigator,
  StyleSheet
} from 'react-native';
import NavigationBar from './components/common/navigationBar';
import HoleList from './components/holeList/holeList';
import Hole from './components/hole/hole';
import Parse from 'parse/react-native';

const ROUTES = {
  holeList: HoleList,
  hole: Hole
};

export default class Main extends Component {
  componentWillMount() {
    Parse.initialize("discgolf");
    Parse.clientKey= 'discgolf';
    Parse.serverURL = 'https://discgolf-api.herokuapp.com/parse';
  }

  _renderScene(route, navigator) {
    var Comp = ROUTES[route.name];

    if (route.name !== 'hole') {
      return (
        <Comp route={route} navigator={navigator} />
      )
    } else {
      return (
        <Hole route={route} navigator={navigator} id={route.id}/>
      )
    }
  }

  render() {
    return (
      <Navigator
        style={styles.container}
        initialRoute={{name: 'holeList', index: 0}}
        renderScene={this._renderScene}
        configureScene={() => {return Navigator.SceneConfigs.PushFromRight; }}
        navigationBar={NavigationBar}
        sceneStyle={{paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight}}
        />
    )
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
