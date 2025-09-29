import { router } from "expo-router";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { User, Users } from "lucide-react-native";
export default function AssessmentStep1() {
    const [name, setName] = useState("");
    const [dwellers, setDwellers] = useState("");
    const handleNext = () => {
        try {
            if (!name.trim()) {
                console.log("Error: Please enter your name");
                return;
            }
            if (!dwellers.trim() || isNaN(Number(dwellers)) || Number(dwellers) <= 0) {
                console.log("Error: Please enter a valid number of dwellers");
                return;
            }
            // Store data in a simple way (in a real app, you'd use context or state management)
            router.push({
                pathname: "/assessment-step2",
                params: { name, dwellers }
            });
        } catch (error) {
            console.error('Navigation error in assessment step 1:', error);
        }
    };
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Text style={styles.title}>Basic Information</Text>
                    <Text style={styles.subtitle}>
                        Let&apos;s start with some basic details about your household
                    </Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <View style={styles.labelContainer}>
                            <User size={20} color="#0EA5E9" />
                            <Text style={styles.label}>Full Name</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter your full name"
                            value={name}
                            onChangeText={setName}
                            autoCapitalize="words"
                        />
                    </View>
                    <View style={styles.inputGroup}>
                        <View style={styles.labelContainer}>
                            <Users size={20} color="#0EA5E9" />
                            <Text style={styles.label}>Number of Dwellers</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter number of people in household"
                            value={dwellers}
                            onChangeText={setDwellers}
                            keyboardType="numeric"
                        />
                        <Text style={styles.helperText}>
                            Include all family members living in the house
                        </Text>
                    </View>
                </View>
                <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: '50%' }]} />
                    </View>
                    <Text style={styles.progressText}>Step 1 of 2</Text>
                </View>
                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Text style={styles.nextButtonText}>Next</Text>
                </TouchableOpacity>
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
        marginBottom: 40,
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
    form: {
        flex: 1,
        gap: 24,
    },
    inputGroup: {
        gap: 8,
    },
    labelContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        color: '#374151',
    },
    input: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 14,
        fontSize: 16,
        color: '#1F2937',
    },
    helperText: {
        fontSize: 14,
        color: '#6B7280',
        marginTop: 4,
    },
    progressContainer: {
        marginVertical: 32,
        alignItems: 'center',
    },
    progressBar: {
        width: '100%',
        height: 4,
        backgroundColor: '#E5E7EB',
        borderRadius: 2,
        marginBottom: 8,
    },
    progressFill: {
        height: '100%',
        backgroundColor: '#0EA5E9',
        borderRadius: 2,
    },
    progressText: {
        fontSize: 14,
        color: '#6B7280',
    },
    nextButton: {
        backgroundColor: '#0EA5E9',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
    },
    nextButtonText: {
        fontSize: 18,
        fontWeight: '600',
        color: '#fff',
    },
});