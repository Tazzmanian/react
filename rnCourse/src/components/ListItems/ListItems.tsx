import React, { Component } from "react";
import { Text, View, StyleSheet } from "react-native";
import ListItem from "../ListItem/ListItem";

const ListItems = (props) => {
    const placesOutput = props.places
        .map((place, index) =>
            <ListItem key={index} placeName={place} />
        );
    return (
        <View style={styles.listContainer}>
            {placesOutput}
        </View>
    );
}

const styles = StyleSheet.create({
    listContainer: {
        width: "100%",
    }
});

export default ListItems;
