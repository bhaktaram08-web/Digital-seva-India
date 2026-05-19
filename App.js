import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';

export default function App() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSendOTP = () => {
    if (mobile.length === 10) {
      alert(`OTP sent to +91 ${mobile}`);
    } else {
      alert('Please enter a valid 10-digit mobile number');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#e65100" />
      
      {/* Upper Orange Header Section */}
      <View style={styles.headerContainer}>
        <View style={styles.iconCircle}>
          <Text style={styles.iconText}>🌐</Text>
        </View>
        <Text style={styles.mainTitle}>Digital Seva India</Text>
        <Text style={styles.subTitle}>Your one-stop government services app</Text>
      </View>

      {/* White Input Form Card */}
      <View style={styles.cardContainer}>
        <Text style={styles.cardHeading}>Enter your mobile number</Text>
        <Text style={styles.cardSubHeading}>We will send a 4-digit OTP to verify your number</Text>

        {/* Name Input */}
        <Text style={styles.inputLabel}>Your Name (optional)</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputIcon}>👤</Text>
          <TextInput
            style={styles.textInput}
            placeholder="e.g. Ramesh Kumar"
            placeholderTextColor="#9e9e9e"
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Mobile Number Input */}
        <Text style={styles.inputLabel}>Mobile Number</Text>
        <View style={styles.inputWrapper}>
          <Text style={styles.countryCode}>+91</Text>
          <View style={styles.divider} />
          <TextInput
            style={styles.textInput}
            placeholder="10-digit mobile number"
            placeholderTextColor="#9e9e9e"
            keyboardType="numeric"
            maxLength={10}
            value={mobile}
            onChangeText={setMobile}
          />
        </View>

        {/* Send OTP Button */}
        <TouchableOpacity style={styles.button} onPress={handleSendOTP}>
          <Text style={styles.buttonText}>Send OTP  ➔</Text>
        </TouchableOpacity>

        {/* Terms of Service Footer inside Card */}
        <Text style={styles.termsText}>
          By continuing, you agree to our Terms of Service. Your data is stored only on your device.
        </Text>
      </View>

      {/* Bottom Government Initiative Footer */}
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Government of India initiative</Text>
        <View style={styles.flagContainer}>
          <View style={[styles.flagBar, { backgroundColor: '#FF9933' }]} />
          <View style={[styles.flagBar, { backgroundColor: '#FFFFFF' }]} />
          <View style={[styles.flagBar, { backgroundColor: '#128807' }]} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e65100', // Matches your orange theme
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    paddingBottom: 25,
  },
  iconCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  iconText: {
    fontSize: 32,
    color: '#ffffff',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    letterSpacing: 0.5,
  },
  subTitle: {
    fontSize: 14,
    color: '#ffe0b2',
    marginTop: 8,
    textAlign: 'center',
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 24,
    paddingTop: 30,
    marginHorizontal: 15,
    marginBottom: 60,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  cardHeading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#0d1b2a',
    marginBottom: 6,
  },
  cardSubHeading: {
    fontSize: 14,
    color: '#7f8c8d',
    marginBottom: 20,
    lineHeight: 20,
  },
  inputLabel: {
    fontSize: 13,
    color: '#5c677d',
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f6f9',
    borderRadius: 12,
    paddingHorizontal: 15,
    height: 54,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  inputIcon: {
    fontSize: 18,
    color: '#7f8c8d',
    marginRight: 10,
  },
  countryCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
    marginRight: 10,
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: '#cbd5e1',
    marginRight: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  button: {
    backgroundColor: '#f4f6f9',
    height: 54,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#5c677d',
  },
  termsText: {
    fontSize: 12,
    color: '#7f8c8d',
    textAlign: 'center',
    lineHeight: 18,
    marginTop: 25,
    paddingHorizontal: 10,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#ffe0b2',
    opacity: 0.9,
    marginBottom: 5,
  },
  flagContainer: {
    flexDirection: 'row',
    width: 30,
    height: 4,
    borderRadius: 2,
    overflow: 'hidden',
  },
  flagBar: {
    flex: 1,
  },
});
