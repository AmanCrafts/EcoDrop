import { router } from "expo-router";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Droplets } from "lucide-react-native";
export default function SplashScreen() {
    useEffect(() => {
        // Auto-navigate to onboarding after 2 seconds
        const timer = setTimeout(() => {
            router.replace("/onboarding");
        }, 2000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <LinearGradient
            colors={['#0EA5E9', '#0284C7', '#0369A1']}
            style={styles.container}
        >
            <SafeAreaView style={styles.safeArea}>
                <View style={styles.content}>
                    <View style={styles.logoContainer}>
                        <Droplets size={80} color="#fff" />
                        <Text style={styles.appName}>EcoDrop</Text>
                        <Text style={styles.tagline}>Smart Rainwater Harvesting</Text>
                    </View>
                    <View style={styles.loaderContainer}>
                        <ActivityIndicator size="large" color="#fff" />
                        <Text style={styles.loadingText}>Loading...</Text>
                    </View>
                </View>
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
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 80,
    },
    appName: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 20,
        textAlign: 'center',
    },
    tagline: {
        fontSize: 16,
        color: '#E0F2FE',
        marginTop: 8,
        textAlign: 'center',
    },
    loaderContainer: {
        alignItems: 'center',
    },
    loadingText: {
        color: '#fff',
        marginTop: 16,
        fontSize: 16,
    },
});