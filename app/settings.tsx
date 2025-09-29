import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Switch
} from "react-native";
import {
    Moon,
    Sun,
    Globe,
    ChevronRight,
    Info,
    Mail,
    Star
} from "lucide-react-native";
export default function SettingsScreen() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [selectedLanguage] = useState('English');
    const handleLanguagePress = () => {
        console.log('Language selection pressed');
    };
    const handleAboutPress = () => {
        console.log('About WaterSaver: v1.0 - Smart rainwater harvesting assessment app');
    };
    const handleContactPress = () => {
        console.log('Contact: support@watersaver.com | +91-9876543210');
    };
    const handleRatePress = () => {
        console.log('Rate app pressed - Thank you for using WaterSaver!');
    };
    const settingsItems = [
        {
            title: 'Dark Mode',
            subtitle: 'Switch between light and dark theme',
            icon: isDarkMode ? Moon : Sun,
            color: '#6366F1',
            action: 'toggle',
            value: isDarkMode,
            onToggle: setIsDarkMode
        },
        {
            title: 'Language',
            subtitle: selectedLanguage,
            icon: Globe,
            color: '#10B981',
            action: 'press',
            onPress: handleLanguagePress
        },
        {
            title: 'About',
            subtitle: 'App information and version',
            icon: Info,
            color: '#0EA5E9',
            action: 'press',
            onPress: handleAboutPress
        },
        {
            title: 'Contact Us',
            subtitle: 'Get in touch with our team',
            icon: Mail,
            color: '#F59E0B',
            action: 'press',
            onPress: handleContactPress
        },
        {
            title: 'Rate App',
            subtitle: 'Rate us on the app store',
            icon: Star,
            color: '#EF4444',
            action: 'press',
            onPress: handleRatePress
        },
    ];
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Text style={styles.title}>Settings</Text>
                    <Text style={styles.subtitle}>
                        Customize your WaterSaver experience
                    </Text>
                </View>
                <View style={styles.settingsContainer}>
                    {settingsItems.map((item) => (
                        <View key={item.title} style={styles.settingItem}>
                            <TouchableOpacity
                                style={styles.settingContent}
                                onPress={item.action === 'press' ? item.onPress : undefined}
                                disabled={item.action === 'toggle'}
                            >
                                <View style={styles.settingLeft}>
                                    <View style={[styles.iconContainer, { backgroundColor: item.color }]}>
                                        <item.icon size={20} color="#fff" />
                                    </View>
                                    <View style={styles.textContainer}>
                                        <Text style={styles.settingTitle}>{item.title}</Text>
                                        <Text style={styles.settingSubtitle}>{item.subtitle}</Text>
                                    </View>
                                </View>
                                <View style={styles.settingRight}>
                                    {item.action === 'toggle' ? (
                                        <Switch
                                            value={item.value}
                                            onValueChange={item.onToggle}
                                            trackColor={{ false: '#D1D5DB', true: '#0EA5E9' }}
                                            thumbColor={item.value ? '#fff' : '#fff'}
                                        />
                                    ) : (
                                        <ChevronRight size={20} color="#9CA3AF" />
                                    )}
                                </View>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        WaterSaver - Smart Rainwater Harvesting
                    </Text>
                    <Text style={styles.versionText}>Version 1.0.0</Text>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC',
    },
    scrollContent: {
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    header: {
        marginBottom: 32,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1F2937',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#6B7280',
        lineHeight: 24,
    },
    settingsContainer: {
        flex: 1,
        gap: 12,
    },
    settingItem: {
        backgroundColor: '#fff',
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    settingContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    settingLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    settingTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 2,
    },
    settingSubtitle: {
        fontSize: 14,
        color: '#6B7280',
    },
    settingRight: {
        marginLeft: 16,
    },
    footer: {
        alignItems: 'center',
        marginTop: 40,
        paddingTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#E5E7EB',
    },
    footerText: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 4,
    },
    versionText: {
        fontSize: 12,
        color: '#9CA3AF',
    },
});