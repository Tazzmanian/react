import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const ListItem = (props) => (
    <TouchableOpacity
        onPress={props.onItemPressed}
    >
        <View style={styles.listItem}>
            <Text>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        maxWidth: "100%",
        padding: 10,
        backgroundColor: "#eee",
        margin: 5
    }
});

export default ListItem;
