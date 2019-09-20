import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class App extends Component {

  state: AppState = {
    placeName: '',
    places: [1]
  }

  placeNameChangeHandler = (val) => {
    this.setState({
      placeName: val
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }


    this.setState(prevState => {
      const prev = prevState as AppState;
      return {
        places: prev.places.concat(this.state.placeName)
      }
    });
  }

  render() {
    const placesOutput = this.state.places.map((place, index) => <Text key={index}>{place}</Text>);
    return (
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!sdafsdf</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="An ...."
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler} />
          <Button
            style={styles.placeBtn}
            title="ADD"
            onPress={this.placeSubmitHandler}
          />
        </View>
        <View>
          {placesOutput}
        </View>
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
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    // backgroundColor: "red"
  },
  placeInput: {
    width: "70%",
    borderWidth: 1
  },
  placeBtn: {
    // width: "30%"
  }
});

interface AppState {
  placeName: string;
  places: Array<string>;
}
