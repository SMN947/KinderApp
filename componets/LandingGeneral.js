import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function LandingGeneral() {
    const activities = [
        { title: 'Activity 1', description: 'Description of Activity 1' },
        { title: 'Activity 2', description: 'Description of Activity 2' },
        { title: 'Activity 3', description: 'Description of Activity 3' },
    ];

    const renderActivityCard = (activity) => {
        return (
            <TouchableOpacity style={styles.activityCard} key={activity.title}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityDescription}>{activity.description}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.appTitle}>KinderApp</Text>
            <View style={styles.activityContainer}>
                {activities.map((activity) => renderActivityCard(activity))}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 20,
    },
    appTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#7084F3',
    },
    activityContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    activityCard: {
        width: '48%',
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
    },
    activityTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    activityDescription: {
        fontSize: 14,
    },
});
