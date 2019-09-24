import React from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AppState } from "../../../App";

const ListItem = (props) => (
    <TouchableOpacity
        onPress={props.onItemPressed}
    >
        <View style={styles.listItem}>
            <Image
                resizeMode="cover"
                source={props.placeImage}
                style={styles.placeImage}
            />
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        maxWidth: "100%",
        padding: 10,
        backgroundColor: "#eee",
        margin: 5,
        flexDirection: "row",
        alignItems: "center"
    },
    placeImage: {
        // maxWidth: "50%",
        marginRight: 3,
        height: 30,
        width: 30
    }
});

export default ListItem;
