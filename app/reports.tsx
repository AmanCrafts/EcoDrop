import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList
} from "react-native";
import {
    FileText,
    Calendar,
    Droplets,
    TrendingUp,
    Eye
} from "lucide-react-native";
// Dummy data for saved reports
const dummyReports = [
    {
        id: '1',
        name: 'John Doe',
        date: '2024-01-15',
        roofArea: 1200,
        feasibilityScore: 85,
        harvestingPotential: 14400,
        status: 'Excellent'
    },
    {
        id: '2',
        name: 'Jane Smith',
        date: '2024-01-10',
        roofArea: 800,
        feasibilityScore: 72,
        harvestingPotential: 9600,
        status: 'Good'
    },
    {
        id: '3',
        name: 'Mike Johnson',
        date: '2024-01-05',
        roofArea: 600,
        feasibilityScore: 58,
        harvestingPotential: 7200,
        status: 'Moderate'
    },
];
export default function ReportsScreen() {
    const renderReportItem = ({ item }: { item: typeof dummyReports[0] }) => (
        <View style={styles.reportCard}>
            <View style={styles.reportHeader}>
                <View style={styles.reportInfo}>
                    <Text style={styles.reportName}>{item.name}</Text>
                    <View style={styles.dateContainer}>
                        <Calendar size={14} color="#6B7280" />
                        <Text style={styles.reportDate}>{new Date(item.date).toLocaleDateString()}</Text>
                    </View>
                </View>
                <View style={[styles.statusBadge, {
                    backgroundColor: item.status === 'Excellent' ? '#DCFCE7' :
                        item.status === 'Good' ? '#FEF3C7' : '#FEE2E2'
                }]}>
                    <Text style={[styles.statusText, {
                        color: item.status === 'Excellent' ? '#166534' :
                            item.status === 'Good' ? '#92400E' : '#991B1B'
                    }]}>
                        {item.status}
                    </Text>
                </View>
            </View>
            <View style={styles.reportMetrics}>
                <View style={styles.metric}>
                    <TrendingUp size={16} color="#0EA5E9" />
                    <Text style={styles.metricValue}>{item.feasibilityScore}%</Text>
                    <Text style={styles.metricLabel}>Feasibility</Text>
                </View>
                <View style={styles.metric}>
                    <Droplets size={16} color="#10B981" />
                    <Text style={styles.metricValue}>{(item.harvestingPotential / 1000).toFixed(1)}K</Text>
                    <Text style={styles.metricLabel}>Liters/Year</Text>
                </View>
                <View style={styles.metric}>
                    <Text style={styles.metricValue}>{item.roofArea}</Text>
                    <Text style={styles.metricLabel}>Sq Ft</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.viewButton}>
                <Eye size={16} color="#0EA5E9" />
                <Text style={styles.viewButtonText}>View Details</Text>
            </TouchableOpacity>
        </View>
    );
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>My Reports</Text>
                <Text style={styles.subtitle}>
                    View your saved rainwater harvesting assessments
                </Text>
            </View>
            {dummyReports.length > 0 ? (
                <FlatList
                    data={dummyReports}
                    renderItem={renderReportItem}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                />
            ) : (
                <View style={styles.emptyState}>
                    <FileText size={64} color="#D1D5DB" />
                    <Text style={styles.emptyTitle}>No Reports Yet</Text>
                    <Text style={styles.emptyDescription}>
                        Complete an assessment to see your reports here
                    </Text>
                </View>
            )}
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FAFC',
    },
    header: {
        paddingHorizontal: 20,
        paddingVertical: 20,
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
    listContainer: {
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    reportCard: {
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 20,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    reportHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    reportInfo: {
        flex: 1,
    },
    reportName: {
        fontSize: 18,
        fontWeight: '600',
        color: '#1F2937',
        marginBottom: 4,
    },
    dateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    reportDate: {
        fontSize: 14,
        color: '#6B7280',
    },
    statusBadge: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
    },
    statusText: {
        fontSize: 12,
        fontWeight: '600',
    },
    reportMetrics: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    metric: {
        alignItems: 'center',
        gap: 4,
    },
    metricValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    metricLabel: {
        fontSize: 12,
        color: '#6B7280',
    },
    viewButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        paddingVertical: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#0EA5E9',
    },
    viewButtonText: {
        fontSize: 14,
        fontWeight: '600',
        color: '#0EA5E9',
    },
    emptyState: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: '600',
        color: '#1F2937',
        marginTop: 16,
        marginBottom: 8,
    },
    emptyDescription: {
        fontSize: 16,
        color: '#6B7280',
        textAlign: 'center',
        lineHeight: 24,
    },
});