import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'


const TopicButton = ({ onPress, title, style, textStyle, children }) => {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            {children ? (
                children
            ) : (
                <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};
export default TopicButton
const styles = StyleSheet.create({
    buttonText: {
        color: 'white', // White text
        fontSize: 16,
        fontWeight: 'bold', // Bold text
    },
})
