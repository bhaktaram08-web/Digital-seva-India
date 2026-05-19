import React, { useState, useRef } from 'react';
import { 
  StyleSheet, 
  StatusBar, 
  View, 
  ActivityIndicator, 
  Text, 
  TouchableOpacity 
} from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [WEB_URL] = useState('https://gov-service-hub--bhaktaram08.replit.app');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const webViewRef = useRef(null);

  // Reload action if something fails
  const handleReload = () => {
    setHasError(false);
    setIsLoading(true);
    webViewRef.current?.reload();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Premium Dark Orange Status Bar */}
      <StatusBar barStyle="light-content" backgroundColor="#e65100" />
      
      {/* Main Secure WebView Wrapper */}
      <View style={styles.content}>
        <WebView 
          ref={webViewRef}
          source={{ uri: WEB_URL }} 
          style={{ flex: 1 }}
          
          // Advanced Performance Settings
          javaScriptEnabled={true}
          domStorageEnabled={true}
          databaseEnabled={true}
          startInLoadingState={true}
          scalesPageToFit={true}
          showsVerticalScrollIndicator={false}
          
          // State Monitors
          onLoadStart={() => setIsLoading(true)}
          onLoadEnd={() => setIsLoading(false)}
          onError={() => setHasError(true)}
          onHttpError={() => setHasError(true)}
        />

        {/* 1. Professional Loading Screen */}
        {isLoading && !hasError && (
          <View style={styles.centerContainer}>
            <ActivityIndicator size="large" color="#e65100" />
            <Text style={styles.loadingText}>Digital Seva India Loading...</Text>
          </View>
        )}

        {/* 2. Professional Error & Crash Handler */}
        {hasError && (
          <View style={styles.centerContainer}>
            <Text style={styles.errorText}>Network connection issue or timeout.</Text>
            <TouchableOpacity style={styles.retryButton} onPress={handleReload}>
              <Text style={styles.retryButtonText}>Refresh Page</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e65100', // Matches your theme layout
  },
  content: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  centerContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: '#333333',
    fontWeight: '500',
  },
  errorText: {
    fontSize: 16,
    color: '#d32f2f',
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: '500',
  },
  retryButton: {
    backgroundColor: '#e65100',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    elevation: 3,
  },
  retryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
