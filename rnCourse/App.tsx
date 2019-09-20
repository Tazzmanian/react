import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ListItems from './src/components/ListItems/ListItems';
import InputComponent from './src/components/InputComponent/InputComponent';

export default class App extends Component {

  state: AppState = {
    placeName: '',
    places: []
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
        places: prev.places.concat(this.state.placeName),
        placeName: ''
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <InputComponent
          placeName={this.state.placeName}
          placeNameChangeHandler={this.placeNameChangeHandler}
          placeSubmitHandler={this.placeSubmitHandler}
        />
        <ListItems places={this.state.places} />
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
  }
});

interface AppState {
  placeName: string;
  places: Array<string>;
}
