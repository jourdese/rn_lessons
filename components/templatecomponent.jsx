import {SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import BackButton from "./BackButton";
import {useRouter} from "expo-router";

const Templatecomponent = () => {
    const router = useRouter();
    return (
        <View style={styles.container}>
        <SafeAreaView >
            <BackButton router={router}/>
        </SafeAreaView>
        </View>
    )
}
export default Templatecomponent
const styles = StyleSheet.create({
    safeAreaA: {
        height: 100,
        flexDirection: 'row'
    },
})
