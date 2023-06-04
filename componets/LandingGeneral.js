import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import theme from '../theme';

export default function LandingGeneral({ navigation, route }) {
    const activities = [
        {
            subject: "Español",
            category: "Lectura",
            level: "Basico",
            title: "Lectura de silabas",
            description: "Lee en voz alta la silaba",
            soon: false,
            component: "ActivityRepeat"
        }, {
            subject: "Español",
            category: "Escucha",
            level: "Basico",
            title: "Escucha de silabas",
            description: "Escucha y selecciona la opcion correcta",
            soon: true
        },
    ];

    const renderActivityCard = (activity) => {
        return (
            <TouchableOpacity
                style={styles.activityCard}
                key={activity.title}
                onPress={() => {
                    if (activity.soon) {
                        Alert.alert("KinderApp", "Muy pronto!")
                    } else {
                        navigation.navigate(activity.component)
                    }
                }}>
                <Text style={styles.activityTitle}>{activity.title}</Text>
                <Text style={styles.activityDescription}>{activity.subject}</Text>
                <Text style={styles.activityDescription}>{activity.level}</Text>
                <Text style={styles.activityDescription}>{activity.description}</Text>
            </TouchableOpacity>


        );
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.appTitle}>KinderApp</Text>
                <View style={styles.activityContainer}>
                    {activities.map((activity) => renderActivityCard(activity))}
                </View>
            </View>
        </ScrollView>
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
        width: '100%',
        backgroundColor: '#F3F3F3',
        borderRadius: 10,
        padding: 10,
        marginBottom: 15,
        borderColor: theme.colors.black,
        borderWidth: 1
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
