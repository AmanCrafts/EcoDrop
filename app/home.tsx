import { router } from "expo-router";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import {
    Droplets,
    Calculator,
    FileText,
    BookOpen,
    Settings,
    ChevronRight
} from "lucide-react-native";
export default function HomeScreen() {
    const menuItems = [
        {
            title: "Start Assessment",
            description: "Evaluate your rainwater harvesting potential",
            icon: Calculator,
            route: "/assessment-step1",
            color: "#10B981",
        },
        {
            title: "My Reports",
            description: "View your saved assessment reports",
            icon: FileText,
            route: "/reports",
            color: "#F59E0B",
        },
        {
            title: "Knowledge Hub",
            description: "Learn about rainwater harvesting",
            icon: BookOpen,
            route: "/knowledge-hub",
            color: "#8B5CF6",
        },
        {
            title: "Settings",
            description: "Customize your app preferences",
            icon: Settings,
            route: "/settings",
            color: "#6B7280",
        },
    ];
    const handleMenuPress = (route: string) => {
        try {
            router.push(route as any);
        } catch (error) {
            console.error('Navigation error:', error);
        }
    };
    return (
        <LinearGradient
            colors={['#0EA5E9', '#0284C7']}
            style={styles.container}
        >
            <SafeAreaView style={styles.safeArea}>
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.header}>
                        <Droplets size={40} color="#fff" />
                        <Text style={styles.title}>EcoDrop</Text>
                        <Text style={styles.subtitle}>
                            Smart Rainwater Harvesting Assessment
                        </Text>
                    </View>
                    <View style={styles.menuContainer}>
                        {menuItems.map((item) => (
                            <TouchableOpacity
                                key={item.route}
                                style={styles.menuItem}
                                onPress={() => handleMenuPress(item.route)}
                            >
                                <View style={styles.menuContent}>
                                    <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                                        <item.icon size={24} color="#fff" />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.menuTitle}>{item.title}</Text>
                                        <Text style={styles.menuDescription}>{item.description}</Text>
                                    </View>
                                    <ChevronRight size={20} color="#9CA3AF" />
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>
                            Contribute to sustainable water management
                        </Text>
                    </View>
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
        paddingVertical: 20,
    },
    header: {
        alignItems: 'center',
        marginBottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: 12,
    },
    subtitle: {
        fontSize: 14,
        color: '#E0F2FE',
        marginTop: 4,
        textAlign: 'center',
    },
    menuContainer: {
        flex: 1,
        gap: 16,
    },
    menuItem: {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        borderRadius: 16,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    menuContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 48,
        height: 48,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    menuTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 4,
    },
    menuDescription: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
    },
    footer: {
        alignItems: 'center',
        marginTop: 40,
    },
    footerText: {
        fontSize: 14,
        color: '#E0F2FE',
        textAlign: 'center',
    },
});