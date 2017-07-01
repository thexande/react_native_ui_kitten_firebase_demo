import React from 'react';
import {
  FlatList,
  Image,
  View
} from 'react-native';
import {
  RkText,
  RkCard, RkStyleSheet
} from 'react-native-ui-kitten';
import {SocialBar} from '../../components';
import {Data} from '../../data';
import firebase from '../../config/Firebase'

let moment = require('moment');

export class Articles1 extends React.Component {
  static navigationOptions = {
    title: 'Article List'.toUpperCase()
  };

  constructor(props) {
    super(props);
    this.ref = null
    console.log("woot")
    this.data = Data.getArticles();
  }

  componentDidMount() {
    this.ref = firebase.database().ref('cheers')
    this.ref.on('value', this.handleCheerUpdate)
  }

  componentWillUnmount() {
    if (this.ref) {
      this.ref.off('value', this.handleToDoUpdate);
    }
  }

  handleCheerUpdate = (snapshot) => {
  console.log(snapshot.val() || {})
}


  _keyExtractor(post, index) {
    return post.id;
  }

  _renderItem(info) {
    return (
      <RkCard rkType='backImg'>
        <Image rkCardImg source={info.item.photo}/>
        <View rkCardImgOverlay rkCardContent style={styles.overlay}>
          <RkText rkType='header2 inverseColor'>{info.item.header}</RkText>
          <RkText rkType='secondary2 inverseColor'>{moment().add(info.item.time, 'seconds').fromNow()}</RkText>
          <View rkCardFooter style={styles.footer}>
            <SocialBar rkType='leftAligned'/>
          </View >
        </View>
      </RkCard>
    )
  }

  render() {
    let info = {};
    info.item = this.data[0];
    return (
      <FlatList data={this.data}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                style={styles.root}/>

    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  overlay: {
    justifyContent: 'flex-end',
  },
  footer: {
    width: 240
  }
}));