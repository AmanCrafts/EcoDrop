import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Droplets, Home, Calculator, Leaf } from "lucide-react-native";
export default function OnboardingScreen() {
    const handleGetStarted = () => {
        router.replace("/home");
    };
    return (
        <LinearGradient
            colors={['#0EA5E9', '#0284C7']}
            style={styles.container}
        >
            <SafeAreaView style={styles.safeArea}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.header}>
                        <Droplets size={60} color="#fff" />
                        <Text style={styles.title}>Welcome to EcoDrop</Text>
                        <Text style={styles.subtitle}>
                            Assess your rooftop rainwater harvesting potential and contribute to water conservation
                        </Text>
                    </View>
                    <View style={styles.featuresContainer}>
                        <View style={styles.feature}>
                            <Home size={40} color="#fff" />
                            <Text style={styles.featureTitle}>Rooftop Assessment</Text>
                            <Text style={styles.featureDescription}>
                                Evaluate your roof&apos;s potential for rainwater collection
                            </Text>
                        </View>
                        <View style={styles.feature}>
                            <Calculator size={40} color="#fff" />
                            <Text style={styles.featureTitle}>Cost Estimation</Text>
                            <Text style={styles.featureDescription}>
                                Get accurate cost estimates for your harvesting system
                            </Text>
                        </View>
                        <View style={styles.feature}>
                            <Leaf size={40} color="#fff" />
                            <Text style={styles.featureTitle}>Eco-Friendly</Text>
                            <Text style={styles.featureDescription}>
                                Contribute to sustainable water management
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.getStartedButton} onPress={handleGetStarted}>
                        <Text style={styles.getStartedText}>Get Started</Text>
                    </TouchableOpacity>
                </ScrollView>
            </SafeAreaView>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    safeArea: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    header: {
        alignItems: 'center',
        marginBottom: 60,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 20,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#E0F2FE',
        marginTop: 12,
        textAlign: 'center',
        lineHeight: 24,
    },
    featuresContainer: {
        flex: 1,
        justifyContent: 'center',
        gap: 40,
    },
    feature: {
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    featureTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
        marginTop: 16,
        textAlign: 'center',
    },
    featureDescription: {
        fontSize: 14,
        color: '#E0F2FE',
        marginTop: 8,
        textAlign: 'center',
        lineHeight: 20,
    },
    getStartedButton: {
        backgroundColor: '#fff',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 12,
        marginTop: 40,
        alignItems: 'center',
    },
    getStartedText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#0EA5E9',
    },
});