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
    button: {
        borderWidth: 2,
        borderColor: '#000', // black border, change if needed
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
})
