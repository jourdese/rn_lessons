import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useRouter} from 'expo-router';
import ScreenWrapper from '@/components/ScreenWrapper';
import {wp} from "../helpers/common";
import TopicButton from "../components/TopicButton";

const Index = () => {
    const router = useRouter();

    return (
        <ScreenWrapper bg="white">
            <View style={styles.container}>
                <TopicButton
                    title="Welcome"
                    style={styles.button}
                    onPress={() => router.push('./welcome')}
                />
                <TopicButton
                    title="View"
                    style={styles.button}
                    onPress={() => router.push('./viewnotes')}
                />
            </View>
        </ScreenWrapper>
    );
};

export default Index;

const styles = StyleSheet.create({

    container: {
        flex: 1,
        gap: 1,
        paddingHorizontal: wp(5),
    },
    button: {
        backgroundColor: '#007BFF', // Modern blue color
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 20, // Rounded corners
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10, // Space around button
        elevation: 5, // Shadow for Android
        shadowColor: '#000', // Shadow for iOS
        shadowOffset: { width: 0, height: 4 }, // Shadow position
        shadowOpacity: 0.2, // Shadow transparency
        shadowRadius: 4, // Shadow blur
        borderWidth: 0, // Explicitly setting borderWidth to 0
    },
});
