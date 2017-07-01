import React from 'react';
import {
  FlatList,
  View,
  Image,
} from 'react-native';
import {
  RkCard,
  RkText, RkStyleSheet
} from 'react-native-ui-kitten';
import {Avatar} from '../../components/avatar';
import {SocialBar} from '../../components/socialBar';
import {Data} from '../../data';
let moment = require('moment');

export class Feed extends React.Component {
  static navigationOptions = {
    title: 'Feed'.toUpperCase()
  };

  constructor(props) {
    super(props);

    this.data = Data.getPosts();
  }

  _keyExtractor(post, index) {
    return post.id;
  }

  _renderItem(info) {
    return (
      <RkCard style={styles.card}>
        <View rkCardHeader>
          <Avatar rkType='small'
                  style={styles.avatar}
                  img={info.item.avatar}/>
          <View>
            <RkText rkType='header4'>{info.item.username}</RkText>
            <RkText rkType='secondary2 alterColor'>{moment(info.item.time).format('LT')}</RkText>
          </View>
        </View>
        <Image rkCardImg source={info.item.photo}/>
        <View rkCardContent>
          <RkText rkType='primary3'>{info.item.text}</RkText>
        </View>
        <View rkCardFooter>
          <SocialBar/>
        </View >
      </RkCard>
    )
  }

  render() {
    return (
      <FlatList data={this.data}
                renderItem={this._renderItem}
                keyExtractor={this._keyExtractor}
                style={styles.container}/>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  container: {
    backgroundColor: theme.colors.screen.scroll,
    paddingVertical: 8,
    paddingHorizontal: 10
  },
  card: {
    marginVertical: 8,
  },
  avatar: {
    marginRight: 16
  }
}));