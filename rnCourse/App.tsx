import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ListItems from './src/components/ListItems/ListItems';
import InputComponent from './src/components/InputComponent/InputComponent';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
// import imagePlace from './src/assets/1.jpg';

export default class App extends Component {

  state: AppState = {
    placeName: '',
    places: [],
    image: null,
    selectedPlace: null
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
          key: Math.random().toString(),
          value: this.state.placeName,
          image: {
            uri: 'ur'
          }
        }),
        placeName: ''
      }
    });
  }

  onItemSelectedHandler = (key) => {
    this.setState(prevState => {
      const prev = prevState as AppState;
      return {
        selectedPlace: {...prev.places.find(x => x.key === key) }
      };
    });
  }

  onItemDeleteHandler = (key) => {
    this.setState(prevState => {
      const prev = prevState as AppState;
      // prev.places.splice(index, 1);
      return {
        places: prev.places.filter( (place) => place.key !== prev.selectedPlace.key ),
        selectedPlace: null
      }
    });
  }

  onCloseModalHandler = () => {
    this.setState({
        selectedPlace: null
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail
          selectedPlace={this.state.selectedPlace}
          onItemDeleted={this.onItemDeleteHandler}
          onCloseModal={this.onCloseModalHandler}
        />
        <InputComponent
          placeName={this.state.placeName}
          placeNameChangeHandler={this.placeNameChangeHandler}
          placeSubmitHandler={this.placeSubmitHandler}

        />
        <ListItems
          places={this.state.places}
          onItemSelected={this.onItemSelectedHandler}
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
  places?: Array<{key: string, value: string}>;
  image?: any;
  placeNameChangeHandler?: Function;
  placeSubmitHandler?: Function;
  onItemDeleted?: Function;
  selectedPlace?: any;
}
