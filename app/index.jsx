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
                    title="Practice"
                    style={styles.button}
                    onPress={() => router.push('./welcome')}
                />
                <TopicButton
                    title="Welcome"
                    style={styles.button}
                    onPress={() => router.push('./welcome')}
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
});
