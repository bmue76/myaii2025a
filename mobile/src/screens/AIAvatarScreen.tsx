// mobile/src/screens/AIAvatarScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';

const AIAvatarScreen: React.FC = () => {
  return (
    <View style={styles.root}>
      {/* Top Header */}
      <View style={styles.headerBackground}>
        <View style={styles.headerContent}>
          <View style={styles.headerIconCircle}>
            <Text style={styles.headerIconText}>👤</Text>
          </View>
          <Text style={styles.headerTitle}>AI AVATAR</Text>
          <View style={styles.headerIconCircle}>
            <Text style={styles.headerIconText}>⬆️</Text>
          </View>
        </View>
      </View>

      {/* Content */}
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Card 1 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>
              WÄHLE EINEN AI AVATAR DEINER WAHL
            </Text>
          </View>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.placeholderText}>
              Avatar-Galerie (später Bild / Auswahl-Komponente)
            </Text>
          </View>
        </View>

        {/* Card 2 */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>
              ERSTELLE DEINEN AI TWIN
            </Text>
          </View>
          <View style={styles.imagePlaceholder}>
            <Text style={styles.placeholderText}>
              AI-Twin Visual (später Bild / Upload-Flow)
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    // ganz leichter Grauton statt rein weiss
    backgroundColor: '#f7f7fb',
  },
  headerBackground: {
    backgroundColor: '#cfe3ff',
    paddingTop: 56,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f8fbff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIconText: {
    fontSize: 22,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1.6,
    color: '#2f2f54',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 25,      // +5px mehr Abstand zur oberen Leiste
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: '#e0ecff',
    borderRadius: 16,    // reduzierter Radius für die Kacheln
    marginBottom: 20,
    overflow: 'hidden',
  },
  cardHeader: {
    backgroundColor: '#ffffff',
    paddingVertical: 10,
    paddingHorizontal: 14,
  },
  cardHeaderText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#2f2f54',
    letterSpacing: 1,
  },
  imagePlaceholder: {
    backgroundColor: '#121826',
    minHeight: 170,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  placeholderText: {
    fontSize: 12,
    color: '#e5e7eb',
    textAlign: 'center',
  },
});

export default AIAvatarScreen;
