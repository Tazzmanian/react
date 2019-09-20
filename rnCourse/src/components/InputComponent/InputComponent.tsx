import React from 'react';
import { View, TextInput, Button, StyleSheet } from "react-native";


const InputComponent = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.placeInput}
                placeholder="An ...."
                value={props.placeName}
                onChangeText={props.placeNameChangeHandler} />
            <Button
                style={styles.placeBtn}
                title="ADD"
                onPress={props.placeSubmitHandler}
            />
        </View>
    );
}

const styles = StyleSheet.create({
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

export default InputComponent;
