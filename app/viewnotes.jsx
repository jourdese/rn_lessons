import {SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import BackButton from "../components/BackButton";
import {useRouter} from "expo-router";

const Viewnotes = () => {
    const router = useRouter();
    return (

        <View style={styles.container}>
            <SafeAreaView style={styles.safeAreaA}>
                <BackButton router={router}/>
            </SafeAreaView>
            <SafeAreaView style={styles.safeAreaB}>
                <View style={styles.blueBox}>
                    <Text style={styles.text}>flex: 1</Text>
                </View>
                <View style={styles.redBox}>
                    <Text style={styles.text}>flex: 2</Text>
                </View>
                <View style={styles.helloWorld}>
                    <Text>Hello World!</Text>
                </View>
            </SafeAreaView>
        </View>
    )
}

export default Viewnotes

const styles = StyleSheet.create({
    text: {
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    containerCollapsable: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    outerBox: {
        backgroundColor: 'lightgray',
        padding: 20,
    },
    innerBox: {
        backgroundColor: 'skyblue',
        padding: 10,
    },
    textCollapsable: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    safeAreaA: {
        height: 100,
        flexDirection: 'row'
    },
    safeAreaB: {
        height: 50,
        flexDirection: 'row'
    },
    blueBox: {
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center'
    },
    redBox: {
        backgroundColor: 'red',
        flex: 2,
        justifyContent: 'center'
    },
    helloWorld: {justifyContent: 'center'}


})
