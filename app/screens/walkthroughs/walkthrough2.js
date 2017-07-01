import React from 'react';
import {
  StyleSheet,
  Image,
  View
} from 'react-native';
import {
  RkText,
  RkStyleSheet,
  RkTheme
} from 'react-native-ui-kitten';

export class Walkthrough2 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let image = RkTheme.current.name === 'light'
      ? <Image source={require('../../assets/images/screensImage.png')}/>
      : <Image source={require('../../assets/images/screensImageDark.png')}/>;

    return (
      <View style={styles.screen}>
        {image}
        <RkText rkType='header2' style={styles.text}>Explore different examples of frequently used pages</RkText>
      </View>
    )
  }
}

let styles = RkStyleSheet.create(theme => ({
  screen: {
    backgroundColor: theme.colors.screen.base,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  text: {
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 50
  }
}));