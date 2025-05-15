import {Button, FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native'
import React, {useState} from 'react'
import {useRouter} from "expo-router";
import BackButton from "../components/BackButton";
import GoalItem from "../components/b15finished_goalitem";
import GoalInput from "../components/b15finished_goalinput";

const B15FinishedApp = () => {
    const router = useRouter();
    const [modalIsVisible, setModalIsVisible] = useState(false);
    const [courseGoals, setCourseGoals] = useState([]);

    function startAddGoalHandler() {
        setModalIsVisible(true);
    }

    function endAddGoalHandler() {
        setModalIsVisible(false);
    }

    function addGoalHandler(enteredGoalText) {
        setCourseGoals((currentCourseGoals) => [
            ...currentCourseGoals,
            { text: enteredGoalText, id: Math.random().toString() },
        ]);
        endAddGoalHandler();
    }

    function deleteGoalHandler(id) {
        setCourseGoals((currentCourseGoals) => {
            return currentCourseGoals.filter((goal) => goal.id !== id);
        });
    }

    return (
        <View style={styles.container}>
            <SafeAreaView >
                <BackButton router={router}/>
                <Button
                    title="Add New Goal"
                    color="#a065ec"
                    onPress={startAddGoalHandler}
                />
                <GoalInput
                    visible={modalIsVisible}
                    onAddGoal={addGoalHandler}
                    onCancel={endAddGoalHandler}
                />
                <View style={styles.goalsContainer}>
                    <FlatList
                        data={courseGoals}
                        renderItem={(itemData) => {
                            return (
                                <GoalItem
                                    text={itemData.item.text}
                                    id={itemData.item.id}
                                    onDeleteItem={deleteGoalHandler}
                                />
                            );
                        }}
                        keyExtractor={(item, index) => {
                            return item.id;
                        }}
                        alwaysBounceVertical={false}
                    />
                </View>
            </SafeAreaView>
        </View>
    )
}
export default B15FinishedApp
const styles = StyleSheet.create({
    safeAreaA: {
        height: 100,
        flexDirection: 'row'
    },
})
