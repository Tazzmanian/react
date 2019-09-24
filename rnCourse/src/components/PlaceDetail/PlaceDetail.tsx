import React from 'react';
import {Modal, View, Image, Text, Button, StyleSheet} from 'react-native';

const PlaceDetail = props => {
    let modalContent = null;

    if (!!props.selectedPlace) {
        modalContent = (
            <View style={styles.modalContainer}>
                <Image source={props.selectedPlace.image} style={styles.image} />
                <Text style={styles.placeName}>Place: {props.selectedPlace.value}</Text>
            </View>
        );
    }

    return (
    <Modal onRequestClose={props.onCloseModal} visible={props.selectedPlace !== null} animationType="slide">
        <View>
            {modalContent}
            <View>
                <Button title="Delete" color="red" onPress={props.onItemDeleted} />
                <Button title="Close" onPress={props.onCloseModal}/>
            </View>
        </View>
    </Modal>
);
}

export default PlaceDetail;

const styles = StyleSheet.create({
    modalContainer : {
        margin: 22
    },
    image: {
        width: "100%",
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28,
        width: "100%"
    }
});
