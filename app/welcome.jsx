import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import AlertButton from "../components/AlertButton";
import ScreenWrapper from "../components/ScreenWrapper";
import {useRouter} from "expo-router";
import BackButton from "../components/BackButton";

const Welcome = () => {
    const router = useRouter();

    return (
        <ScreenWrapper bg="white">
            <BackButton router={router}/>
            <View style={styles.buttonContainer}>
                <AlertButton title={"Press Me"} word={"hehe1"}/>
                <AlertButton title={"Press Me"} word={"hehe2"}/>
            </View>
            <View style={styles.buttonContainer}>
                <AlertButton title={"Press Me"} word={"hehe3"} color="#841584"/>
            </View>
            <View style={styles.alternativeLayoutButtonContainer}>
                <AlertButton title="This looks great!" word={"hehe4"}/>
                <AlertButton title="OK!" color="#841584" word={"hehe5"}/>
            </View>
        </ScreenWrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20,
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Welcome;