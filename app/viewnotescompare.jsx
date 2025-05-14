import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Viewnotes = () => {
    return (
        <View style={styles.container}>

            <SafeAreaView style={styles.safeArea}>
                <View style={styles.blueBox}>
                    <Text style={styles.text}>flex: 1</Text>
                </View>

                <View style={styles.redBox}>
                    <Text style={styles.text}>flex: 2</Text>
                </View>

                <View style={styles.textBox}>
                    <Text>Hello World!</Text>
                </View>
            </SafeAreaView>
        </View>
    );
};

export default Viewnotes;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        height: 100,
        flexDirection: 'row',
    },
    blueBox: {
        backgroundColor: 'blue',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    redBox: {
        backgroundColor: 'red',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
    },
});
