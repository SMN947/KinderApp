import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import theme from '../theme';

const ThemeDemo = () => {
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* Colors */}
                <View style={[styles.box, { backgroundColor: theme.colors.primary }]}>
                    <Text style={styles.text}>{theme.colors.primary}</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.secondary }]}>
                    <Text style={styles.text}>{theme.colors.secondary}</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.tertiary }]}>
                    <Text style={styles.text}>{theme.colors.tertiary}</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.default }]}>
                    <Text style={styles.text}>{theme.colors.default}</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.info }]}>
                    <Text style={styles.text}>{theme.colors.info}</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.warn }]}>
                    <Text style={styles.text}>{theme.colors.warn}</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.error }]}>
                    <Text style={styles.text}>{theme.colors.error}</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.white }]}>
                    <Text style={styles.text}>{theme.colors.white}</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.black }]}>
                    <Text style={styles.text}>{theme.colors.black}</Text>
                </View>

                {/* Text Sizes */}
                <View style={[styles.box, { backgroundColor: theme.colors.primary }]}>
                    <Text style={[styles.text, { fontSize: theme.textSizes.small }]}>Small Text</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.secondary }]}>
                    <Text style={[styles.text, { fontSize: theme.textSizes.medium }]}>Medium Text</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.tertiary }]}>
                    <Text style={[styles.text, { fontSize: theme.textSizes.large }]}>Large Text</Text>
                </View>

                {/* Text Styles */}
                <View style={[styles.box, { backgroundColor: theme.colors.default }]}>
                    <Text style={[styles.text, theme.textStyles.title]}>Title Text</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.info }]}>
                    <Text style={[styles.text, theme.textStyles.description]}>Description Text</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.primary }]}>
                    <Text style={[styles.text, theme.textStyles.default]}>Default Text</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.warn }]}>
                    <Text style={[styles.text, theme.textStyles.muted]}>Muted Text</Text>
                </View>

                {/* Spacing */}
                <View style={[styles.box, { backgroundColor: theme.colors.primary, marginBottom: theme.spacing.small }]}>
                    <Text style={styles.text}>Small Spacing</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.secondary, marginBottom: theme.spacing.medium }]}>
                    <Text style={styles.text}>Medium Spacing</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.tertiary, marginBottom: theme.spacing.large }]}>
                    <Text style={styles.text}>Large Spacing</Text>
                </View>

                {/* Shadows */}
                <View style={[styles.box, { backgroundColor: theme.colors.default, ...theme.shadows.small }]}>
                    <Text style={styles.text}>Small Shadow</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.info, ...theme.shadows.medium }]}>
                    <Text style={styles.text}>Medium Shadow</Text>
                </View>
                <View style={[styles.box, { backgroundColor: theme.colors.warn, ...theme.shadows.large }]}>
                    <Text style={styles.text}>Large Shadow</Text>
                </View>

                {/* Card */}
                <View style={[styles.box, theme.card]}>
                    <Text style={styles.text}>Card Component</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: 200,
        height: 100,
        marginBottom: theme.spacing.medium,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    text: {
        fontSize: theme.textSizes.medium,
        textAlign: 'center',
    },
});

export default ThemeDemo;
