import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useEffect } from 'react';

export default function Splash() {

    useEffect(() => {
    }, []);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <Text style={styles.appName}>KinderApp</Text>
            </View>
            <Text style={styles.description}>
                Desarrolla la magia de la lectura
            </Text>
            <Text style={styles.description}>
                desde temprana edad.
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7084F3',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 70,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
    },
    appName: {
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 15
    },
    description: {
        color: '#FFFFFF',
        fontSize: 18,
        textAlign: 'center',

        paddingHorizontal: 20,
    },

});