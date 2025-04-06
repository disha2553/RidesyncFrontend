import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'in.ridesync.io',
  appName: 'RideSync',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    PushNotifications: {
      presentationOptions: ["badge", "alert", "sound"]
    },
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ["google.com", "phone"],
    },
    GoogleAuth: {
      scopes: [
        "profile",
        "email"
      ],
      serverClientId: '268378667595-nrmpuf5uijinb0egsl2sv04ki1kmc0ig.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    }
  }
};

export default config;
