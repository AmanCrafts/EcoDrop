import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView
} from "react-native";
import { Home, Square } from "lucide-react-native";
export default function AssessmentStep2() {
    const params = useLocalSearchParams();
    const [roofArea, setRoofArea] = useState("");
    const [openSpace, setOpenSpace] = useState("");
    const handleNext = () => {
        try {
            if (!roofArea.trim() || isNaN(Number(roofArea)) || Number(roofArea) <= 0) {
                console.log("Error: Please enter a valid roof area");
                return;
            }
            if (!openSpace.trim() || isNaN(Number(openSpace)) || Number(openSpace) < 0) {
                console.log("Error: Please enter a valid open space area");
                return;
            }
            // Navigate to results with all collected data
            router.push({
                pathname: "/assessment-results",
                params: {
                    name: params.name,
                    dwellers: params.dwellers,
                    roofArea,
                    openSpace
                }
            });
        } catch (error) {
            console.error('Navigation error in assessment step 2:', error);
        }
    };
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Text style={styles.title}>Property Details</Text>
                    <Text style={styles.subtitle}>
                        Now let&apos;s gather information about your property dimensions
                    </Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.inputGroup}>
                        <View style={styles.labelContainer}>
                            <Home size={20} color="#0EA5E9" />
                            <Text style={styles.label}>Roof Area (sq ft)</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter total roof area"
                            value={roofArea}
                            onChangeText={setRoofArea}
                            keyboardType="numeric"
                        />
                        <Text style={styles.helperText}>
                            Measure the total area of your rooftop that can collect rainwater
                        </Text>
                    </View>
                    <View style={styles.inputGroup}>
                        <View style={styles.labelContainer}>
                            <Square size={20} color="#0EA5E9" />
                            <Text style={styles.label}>Open Space (sq ft)</Text>
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholder="Enter available open space"
                            value={openSpace}
                            onChangeText={setOpenSpace}
                            keyboardType="numeric"
                        />
                        <Text style={styles.helperText}>
                            Available ground space for installing storage tanks or recharge structures
                        </Text>
                    </View>
                    <View style={styles.infoCard}>
                        <Text style={styles.infoTitle}>:bulb: Measurement Tips</Text>
                        <Text style={styles.infoText}>
                            • For roof area: Length × Width of your roof{`
`}              • For open space: Available yard or compound area{`
`}              • Use approximate measurements if exact values aren&apos;t available
                        </Text>
                    </View>
                </View>
                <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressFill, { width: '100%' }]} />
                    </View>
                    <Text style={styles.progressText}>Step 2 of 2</Text>
                </View>
                <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
                    <Text style={styles.nextButtonText}>Calculate Results</Text>
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
    infoCard: {
        backgroundColor: '#FEF3C7',
        borderRadius: 12,
        padding: 16,
        borderLeftWidth: 4,
        borderLeftColor: '#F59E0B',
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#92400E',
        marginBottom: 8,
    },
    infoText: {
        fontSize: 14,
        color: '#92400E',
        lineHeight: 20,
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