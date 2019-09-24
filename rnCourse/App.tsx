import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ListItems from './src/components/ListItems/ListItems';
import InputComponent from './src/components/InputComponent/InputComponent';
// import imagePlace from './src/assets/1.jpg';

export default class App extends Component {

  state: AppState = {
    placeName: '',
    places: [],
    image: null
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
        places: prev.places.concat({
          key: Math.random(),
          value: this.state.placeName,
          image: {
            uri: 'https://drive.google.com/open?id=1Cc0mfzBEUD4IOQx4d5D4z4_Em5r3xemA'
          }
        }),
        placeName: ''
      }
    });
  }

  onItemDeleted = (key) => {
    this.setState(prevState => {
      const prev = prevState as AppState;
      // prev.places.splice(index, 1);
      return {
        places: prev.places.filter( (place) => place.key !== key )
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
        <ListItems
          places={this.state.places}
          onItemDeleted={this.onItemDeleted}
        />
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

export interface AppState {
  placeName?: string;
  places?: Array<{key: number, value: string}>;
  image?: any;
  placeNameChangeHandler?: Function;
  placeSubmitHandler?: Function;
  onItemDeleted?: Function;
}
