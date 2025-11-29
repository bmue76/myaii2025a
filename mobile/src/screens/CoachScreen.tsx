// mobile/src/screens/CoachScreen.tsx
import React, { useCallback, useState } from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { WebView } from "react-native-webview";
import { HEYGEN_COACH_URL } from "../config/coachConfig";

const CoachScreen: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [reloadKey, setReloadKey] = useState(0);

  const handleLoadEnd = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleError = useCallback((e: any) => {
    console.log("[CoachScreen] WebView error:", e?.nativeEvent);
    setIsLoading(false);
    setErrorMessage(
      "Der Coach konnte nicht geladen werden. Bitte überprüfe deine Internetverbindung und versuche es erneut."
    );
  }, []);

  const handleRetry = useCallback(() => {
    setErrorMessage(null);
    setIsLoading(true);
    setReloadKey((prev) => prev + 1);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>MYAII Coach</Text>
        <Text style={styles.subtitle}>
          Prototyp – HeyGen-Avatar im integrierten WebView
        </Text>
      </View>

      <View style={styles.content}>
        {errorMessage ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorTitle}>Ups, das ist schiefgelaufen.</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TouchableOpacity style={styles.retryButton} onPress={handleRetry}>
              <Text style={styles.retryButtonText}>Nochmal versuchen</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <>
            <WebView
              key={reloadKey}
              source={{ uri: HEYGEN_COACH_URL }}
              onLoadEnd={handleLoadEnd}
              onError={handleError}
              style={styles.webview}
            />

            {isLoading && (
              <View style={styles.loadingOverlay}>
                <ActivityIndicator size="large" />
                <Text style={styles.loadingText}>Coach wird geladen …</Text>
              </View>
            )}
          </>
        )}
      </View>
    </View>
  );
};

export default CoachScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b1120",
  },
  header: {
    paddingTop: 56,
    paddingHorizontal: 20,
    paddingBottom: 16,
    backgroundColor: "#020617",
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(148, 163, 184, 0.3)",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: "#e5e7eb",
  },
  subtitle: {
    marginTop: 4,
    fontSize: 13,
    color: "#9ca3af",
  },
  content: {
    flex: 1,
    position: "relative",
  },
  webview: {
    flex: 1,
  },
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(15, 23, 42, 0.8)",
    alignItems: "center",
    justifyContent: "center",
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
    color: "#e5e7eb",
  },
  errorContainer: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#fecaca",
    marginBottom: 8,
    textAlign: "center",
  },
  errorMessage: {
    fontSize: 14,
    color: "#fca5a5",
    textAlign: "center",
    marginBottom: 16,
  },
  retryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: "#f97316",
  },
  retryButtonText: {
    color: "#fed7aa",
    fontWeight: "600",
  },
});
