import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ScrollView
} from "react-native";
import {
    ChevronDown,
    ChevronRight,
    Droplets,
    Leaf,
    Home,
    DollarSign
} from "lucide-react-native";
// FAQ data
const faqData = [
    {
        id: '1',
        question: 'What is rainwater harvesting?',
        answer: 'Rainwater harvesting is the collection and storage of rainwater from rooftops, land surfaces, or rock catchments using simple techniques such as jars and pots as well as more complex techniques such as underground check dams.',
        icon: Droplets,
        color: '#0EA5E9'
    },
    {
        id: '2',
        question: 'What are the benefits of rainwater harvesting?',
        answer: 'Benefits include: reducing water bills, providing backup water supply during shortages, reducing stormwater runoff, improving groundwater levels, and contributing to environmental sustainability.',
        icon: Leaf,
        color: '#10B981'
    },
    {
        id: '3',
        question: 'How much does a rainwater harvesting system cost?',
        answer: 'Costs vary based on system size and complexity. Simple systems start from ₹15,000, while comprehensive systems with underground storage can cost ₹50,000-₹1,00,000. The investment typically pays back within 3-5 years.',
        icon: DollarSign,
        color: '#F59E0B'
    },
    {
        id: '4',
        question: 'What roof types are suitable for rainwater harvesting?',
        answer: 'Most roof types are suitable including concrete, tile, metal, and asbestos sheets. Avoid collecting from roofs with lead-based paints or materials that may contaminate water.',
        icon: Home,
        color: '#8B5CF6'
    },
    {
        id: '5',
        question: 'How much water can I collect from my roof?',
        answer: 'For every 1mm of rainfall, you can collect approximately 1 liter of water per square meter of roof area. With proper calculation: Roof Area (sq m) × Rainfall (mm) × 0.8 (efficiency factor).',
        icon: Droplets,
        color: '#0EA5E9'
    },
];
const infoSections = [
    {
        title: 'Getting Started',
        content: 'Begin your rainwater harvesting journey by assessing your property, understanding local rainfall patterns, and choosing the right system for your needs.'
    },
    {
        title: 'System Components',
        content: 'A typical system includes: catchment area (roof), gutters, downpipes, first flush diverter, storage tank, and distribution system.'
    },
    {
        title: 'Maintenance Tips',
        content: 'Regular cleaning of gutters, checking for leaks, maintaining first flush diverters, and periodic tank cleaning ensure optimal system performance.'
    },
];
export default function KnowledgeHub() {
    const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null);
    const toggleFAQ = (id: string) => {
        setExpandedFAQ(expandedFAQ === id ? null : id);
    };
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <Text style={styles.title}>Knowledge Hub</Text>
                    <Text style={styles.subtitle}>
                        Learn everything about rainwater harvesting
                    </Text>
                </View>
                {/* Info Sections */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Quick Guide</Text>
                    {infoSections.map((section) => (
                        <View key={section.title} style={styles.infoCard}>
                            <Text style={styles.infoTitle}>{section.title}</Text>
                            <Text style={styles.infoContent}>{section.content}</Text>
                        </View>
                    ))}
                </View>
                {/* FAQ Section */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>
                    {faqData.map((faq) => (
                        <View key={faq.id} style={styles.faqCard}>
                            <TouchableOpacity
                                style={styles.faqHeader}
                                onPress={() => toggleFAQ(faq.id)}
                            >
                                <View style={styles.faqTitleContainer}>
                                    <View style={[styles.faqIcon, { backgroundColor: faq.color }]}>
                                        <faq.icon size={16} color="#fff" />
                                    </View>
                                    <Text style={styles.faqQuestion}>{faq.question}</Text>
                                </View>
                                {expandedFAQ === faq.id ? (
                                    <ChevronDown size={20} color="#6B7280" />
                                ) : (
                                    <ChevronRight size={20} color="#6B7280" />
                                )}
                            </TouchableOpacity>
                            {expandedFAQ === faq.id && (
                                <View style={styles.faqAnswer}>
                                    <Text style={styles.faqAnswerText}>{faq.answer}</Text>
                                </View>
                            )}
                        </View>
                    ))}
                </View>
                {/* Additional Resources */}
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Did You Know?</Text>
                    <View style={styles.factCard}>
                        <Text style={styles.factText}>
                            :droplet: A 1000 sq ft roof can collect approximately 15,000-20,000 liters of water annually in areas with 600mm rainfall.
                        </Text>
                    </View>
                    <View style={styles.factCard}>
                        <Text style={styles.factText}>
                            :seedling: Rainwater harvesting can reduce your water bill by 30-50% and help recharge groundwater levels.
                        </Text>
                    </View>
                    <View style={styles.factCard}>
                        <Text style={styles.factText}>
                            :house: Every household can contribute to water conservation and reduce urban flooding through proper rainwater management.
                        </Text>
                    </View>
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
    section: {
        marginBottom: 32,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 16,
    },
    infoCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 8,
    },
    infoContent: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
    },
    faqCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
        elevation: 2,
    },
    faqHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
    },
    faqTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        gap: 12,
    },
    faqIcon: {
        width: 32,
        height: 32,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    faqQuestion: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1F2937',
        flex: 1,
    },
    faqAnswer: {
        paddingHorizontal: 16,
        paddingBottom: 16,
        paddingLeft: 60,
    },
    faqAnswerText: {
        fontSize: 14,
        color: '#6B7280',
        lineHeight: 20,
    },
    factCard: {
        backgroundColor: '#EFF6FF',
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        borderLeftWidth: 4,
        borderLeftColor: '#0EA5E9',
    },
    factText: {
        fontSize: 14,
        color: '#1E40AF',
        lineHeight: 20,
    },
});