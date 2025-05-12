import {Button, StyleSheet, Alert, View} from 'react-native'
import React from 'react'

const AlertButton = ({title, color, word}) => {

    const onPress = () => {
        Alert.alert(word);
    };

    return (
        <View>
            <Button onPress={onPress} title={title} color={color}/>
        </View>
    )
}
export default AlertButton
const styles = StyleSheet.create({})
