import React, {Component} from 'react';
import {
  ListView,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Parse from 'parse/react-native';
import HoleListItem from './holeListItem';
import HoleObject from '../../objects/holeObject';

export default class HoleList extends Component {
  constructor() {
    super();

    this.state = {
      dataSource: null
    }

    this._onHolesLoaded = this._onHolesLoaded.bind(this);
    this._renderRow = this._renderRow.bind(this);
  }

  _onHolesLoaded(holes) {
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    var holeArr = holes.map( (hole) => {
      console.log(hole.id);
      return {
        id: hole.id,
        hole: hole.get("hole")
      }
    });
    this.setState({
      dataSource: ds.cloneWithRows(holeArr)
    });
  }

  componentWillMount() {
    var query = new Parse.Query(HoleObject);
    query.find({
      success: (holes) => {
        this._onHolesLoaded(holes)
      },
      error: (object, error) => {
        console.log(object, error);
      }
    })
  }

  _renderSeparator(sectionId, rowId) {
    return <View key={rowId} style={{height: 2, backgroundColor: '#7dd0c9'}} />
  }

  _renderRow(rowData) {
    return <HoleListItem
      key={rowData.hole.index}
      id={rowData.id}
      hole={rowData.hole}
      imgSource={THUMB_URLS[0]}
      navigator={this.props.navigator}
      route={this.props.route}
      />
  }

  render() {
    if (!this.state.dataSource) {
      return <Text>Loading...</Text>
    }

    return (
      <ListView
        renderSeparator={this._renderSeparator}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
      />
    )
  }
}

var THUMB_URLS = [
  require('../../../img/1a.jpg')
  ];
