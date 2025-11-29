// mobile/app.config.ts
import { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    ...config,
    name: "MYAII",
    slug: "mobile", // Muss zum EAS-Projekt-Slug passen
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    scheme: "myaii",
    userInterfaceStyle: "light",
    splash: {
      // Vorläufig verwenden wir das Icon als Splash-Bild,
      // damit keine Asset-Errors auftreten.
      image: "./assets/icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "ch.atlex.myaii", // <- so im Apple-Developer-Portal erfassen
      infoPlist: {
        // Deine App verwendet nur Standard-/exempt-Verschlüsselung
        // (typisch: HTTPS, keine eigene Krypto) -> false.
        ITSAppUsesNonExemptEncryption: false
      }
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      package: "ch.atlex.myaii"
    },
    web: {
      favicon: "./assets/favicon.png"
    }
    // IMPORTANT:
    // Wir definieren KEIN eigenes `extra` hier, damit das von EAS
    // gesetzte `extra.eas.projectId` aus `...config` erhalten bleibt.
  };
};
