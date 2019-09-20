import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends Component {

  state = {
    placeName: ''
  }

  placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!sdafsdf</Text>
        <TextInput
          style={{width: 300, borderColor: "black", borderWidth: 1}}
          placeholder="An ...."
          value={this.state.placeName}
          onChangeText={this.placeNameChangeHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
