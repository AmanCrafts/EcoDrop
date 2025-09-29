import { router, useLocalSearchParams } from "expo-router";
import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from "react-native";
import {
    CheckCircle,
    Droplets,
    Home,
    DollarSign,
    Save,
    ArrowLeft
} from "lucide-react-native";

export default function AssessmentResults() {
    const params = useLocalSearchParams();

    // Safely parse parameters with fallbacks
    const roofArea = params.roofArea ? Number(params.roofArea) : 0;
    const dwellers = params.dwellers ? Number(params.dwellers) : 1;
    const openSpace = params.openSpace ? Number(params.openSpace) : 0;

    // Validate that we have required data
    if (!roofArea || !dwellers || roofArea <= 0 || dwellers <= 0) {
        return (
            <View style={styles.container}>
                <View style={styles.errorContainer}>
                    <Text style={styles.errorTitle}>Missing Assessment Data</Text>
                    <Text style={styles.errorText}>
                        Please complete the assessment steps to view results.
                    </Text>
                    <TouchableOpacity
                        style={styles.nextButton}
                        onPress={() => router.push('/assessment-step1')}
                    >
                        <Text style={styles.nextButtonText}>Start Assessment</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    // Calculate results based on input data
    const annualRainfall = 1200; // mm (assumed average)
    const harvestingPotential = Math.round((roofArea * annualRainfall * 0.8) / 1000); // in liters
    const dailyRequirement = dwellers * 150; // 150L per person per day
    const feasibilityScore = Math.min(100, Math.round((harvestingPotential / (dailyRequirement * 365)) * 100));

    // Determine recommended structure and cost
    const getRecommendation = () => {
        if (openSpace >= 200) {
            return {
                structure: "Underground Storage Tank + Recharge Pit",
                capacity: "5000L tank + 2 recharge pits",
                cost: "₹45,000 - ₹65,000"
            };
        } else if (openSpace >= 100) {
            return {
                structure: "Overhead Tank + Small Recharge Pit",
                capacity: "2000L tank + 1 recharge pit",
                cost: "₹25,000 - ₹35,000"
            };
        } else {
            return {
                structure: "Compact Storage System",
                capacity: "1000L modular tank",
                cost: "₹15,000 - ₹25,000"
            };
        }
    };

    const recommendation = getRecommendation();

    const handleSaveReport = () => {
        console.log("Report Saved: Your assessment report has been saved successfully!");
        router.push("/reports");
    };

    const handleGoHome = () => {
        router.push("/home");
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Text style={styles.title}>Assessment Results</Text>
                    <Text style={styles.subtitle}>
                        Based on your property details, heres your rainwater harvesting potential
                    </Text>
                </View>

                {/* Feasibility Score */}
                <View style={styles.scoreCard}>
                    <View style={styles.scoreHeader}>
                        <CheckCircle size={24} color="#10B981" />
                        <Text style={styles.scoreTitle}>Feasibility Score</Text>
                    </View>
                    <Text style={styles.scoreValue}>{feasibilityScore}%</Text>
                    <Text style={styles.scoreDescription}>
                        {feasibilityScore >= 80 ? "Excellent potential for rainwater harvesting" :
                            feasibilityScore >= 60 ? "Good potential with proper planning" :
                                feasibilityScore >= 40 ? "Moderate potential, consider optimization" :
                                    "Limited potential, focus on water conservation"}
                    </Text>
                </View>

                {/* Results Grid */}
                <View style={styles.resultsGrid}>
                    <View style={styles.resultCard}>
                        <Droplets size={32} color="#0EA5E9" />
                        <Text style={styles.resultValue}>{harvestingPotential.toLocaleString()}L</Text>
                        <Text style={styles.resultLabel}>Annual Harvesting Potential</Text>
                    </View>
                    <View style={styles.resultCard}>
                        <Home size={32} color="#8B5CF6" />
                        <Text style={styles.resultValue}>{Math.round(harvestingPotential / 365)}L</Text>
                        <Text style={styles.resultLabel}>Daily Average Collection</Text>
                    </View>
                </View>

                {/* Recommended Structure */}
                <View style={styles.recommendationCard}>
                    <Text style={styles.cardTitle}>Recommended Structure</Text>
                    <View style={styles.recommendationContent}>
                        <Text style={styles.structureName}>{recommendation.structure}</Text>
                        <Text style={styles.structureDetails}>Capacity: {recommendation.capacity}</Text>
                        <View style={styles.costContainer}>
                            <DollarSign size={16} color="#10B981" />
                            <Text style={styles.costText}>{recommendation.cost}</Text>
                        </View>
                    </View>
                </View>

                {/* Benefits */}
                <View style={styles.benefitsCard}>
                    <Text style={styles.cardTitle}>Expected Benefits</Text>
                    <View style={styles.benefitsList}>
                        <Text style={styles.benefitItem}>• Reduce water bills by 30-50%</Text>
                        <Text style={styles.benefitItem}>• Backup water supply during shortages</Text>
                        <Text style={styles.benefitItem}>• Contribute to groundwater recharge</Text>
                        <Text style={styles.benefitItem}>• Reduce dependency on municipal supply</Text>
                        <Text style={styles.benefitItem}>• Support environmental sustainability</Text>
                    </View>
                </View>

                {/* Action Buttons */}
                <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.saveButton} onPress={handleSaveReport}>
                        <Save size={20} color="#fff" />
                        <Text style={styles.saveButtonText}>Save Report</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.homeButton} onPress={handleGoHome}>
                        <ArrowLeft size={20} color="#0EA5E9" />
                        <Text style={styles.homeButtonText}>Back to Home</Text>
                    </TouchableOpacity>
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
    scoreCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 24,
        marginBottom: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    scoreHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 16,
    },
    scoreTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1F2937',
    },
    scoreValue: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#10B981',
        marginBottom: 8,
    },
    scoreDescription: {
        fontSize: 14,
        color: '#6B7280',
        textAlign: 'center',
        lineHeight: 20,
    },
    resultsGrid: {
        flexDirection: 'row',
        gap: 12,
        marginBottom: 24,
    },
    resultCard: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    resultValue: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1F2937',
        marginTop: 12,
        marginBottom: 4,
    },
    resultLabel: {
        fontSize: 12,
        color: '#6B7280',
        textAlign: 'center',
        lineHeight: 16,
    },
    recommendationCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 24,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 16,
    },
    recommendationContent: {
        gap: 8,
    },
    structureName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#0EA5E9',
        marginBottom: 4,
    },
    structureDetails: {
        fontSize: 14,
        color: '#6B7280',
        marginBottom: 12,
    },
    costContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    costText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#10B981',
    },
    benefitsCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 32,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    benefitsList: {
        gap: 8,
    },
    benefitItem: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
    },
    actionButtons: {
        gap: 12,
    },
    saveButton: {
        backgroundColor: '#10B981',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingVertical: 16,
        borderRadius: 12,
    },
    saveButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    homeButton: {
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingVertical: 16,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#0EA5E9',
    },
    homeButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#0EA5E9',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
    errorTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#DC2626',
        marginBottom: 12,
        textAlign: 'center',
    },
    errorText: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
        lineHeight: 24,
        marginBottom: 24,
    },
    nextButton: {
        backgroundColor: '#0EA5E9',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 12,
        alignItems: 'center',
    },
    nextButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
});