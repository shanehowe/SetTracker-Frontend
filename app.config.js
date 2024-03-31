import "dotenv/config";

export default {
  name: "set-tracker",
  slug: "set-tracker",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./src/assets/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./src/assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  plugins: ["expo-apple-authentication", "expo-secure-store"],
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: false,
    usesAppleSignIn: true,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./src/assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./src/assets/favicon.png",
  },
  extra: {
    apiUrl: process.env.API_URL,
    env: process.env.ENV,
  },
};
