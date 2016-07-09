import React, {Component} from 'react';
import {
  ListView,
  StyleSheet,
  View,
  RecyclerViewBackedScrollView
} from 'react-native';

import HoleListItem from './holeListItem';

export default class HoleList extends Component {
  constructor() {
    super();

    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows([
        {number: 1, par: 3, distance: '123m'},
        {number: 2, par: 4, distance: '123m'},
        {number: 3, par: 4, distance: '123m'},
        {number: 4, par: 4, distance: '123m'},
        {number: 5, par: 5, distance: '123m'},
        {number: 6, par: 2, distance: '123m'},
        {number: 7, par: 3, distance: '123m'},
        {number: 8, par: 4, distance: '123m'},
        {number: 9, par: 5, distance: '123m'},
        {number: 10, par: 3, distance: '123m'},
        {number: 11, par: 4, distance: '123m'},
        {number: 12, par: 4, distance: '123m'}
      ])
    }

    this._renderRow = this._renderRow.bind(this);
  }

  _renderSeparator(sectionId, rowId) {
    return <View key={rowId} style={{height: 2, backgroundColor: '#7dd0c9'}} />
  }

  _renderRow(rowData) {
    return <HoleListItem
      key={rowData.number}
      number={rowData.number}
      par={rowData.par}
      distance={rowData.distance}
      imgSource={THUMB_URLS[0]}
      navigator={this.props.navigator}
      route={this.props.route}
      />
  }

  //renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
  render() {
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
