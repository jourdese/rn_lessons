import {Button, Modal, Image, SafeAreaView, StyleSheet, TextInput, View} from 'react-native'
import React from 'react'
import { useState } from 'react';
import BackButton from "./BackButton";
import {useRouter} from "expo-router";

const B15FinishedGoalInput = (props) => {
    const router = useRouter();
    const [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    }

    return (
        <View style={styles.container}>
            <SafeAreaView style={styles.safeAreaA}>
                <Modal visible={props.visible} animationType="slide">
                    <View style={styles.inputContainer}>
                        <Image
                            style={styles.image}
                            source={require('../assets/images/goal.png')}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Your course goal!"
                            onChangeText={goalInputHandler}
                            value={enteredGoalText}
                        />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button title="Cancel" onPress={props.onCancel} color="#f31282" />
                            </View>
                            <View style={styles.button}>
                                <Button title="Add Goal" onPress={addGoalHandler} color="#b180f0" />
                            </View>
                        </View>
                    </View>
                </Modal>
            </SafeAreaView>
        </View>
    )
}
export default B15FinishedGoalInput
const styles = StyleSheet.create({
    safeAreaA: {
        height: 100,
        flexDirection: 'row'
    },
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius: 6,
        width: '100%',
        padding: 16,
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal: 8,
    },
})
