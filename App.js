import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SplashScreen from './src/screens/splash-screen/splash-screen';
import AuthChoose from './src/screens/splash-screen/auth-choose';
import Login from './src/screens/auth/login';
import Signup from './src/screens/auth/signup';
import Home from './src/screens/screens/home';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');

  const handleLogout = () => {
    setCurrentScreen('splash');
  };

  // Screen Routing Control
  switch (currentScreen) {
    case 'splash':
      return (
        <>
          <SplashScreen onEnter={() => setCurrentScreen('auth-choose')} />
          <StatusBar style="light" />
        </>
      );

    case 'auth-choose':
      return (
        <>
          <AuthChoose 
            onLogin={() => setCurrentScreen('login')} 
            onSignup={() => setCurrentScreen('signup')} 
            onBack={() => setCurrentScreen('splash')} 
          />
          <StatusBar style="light" />
        </>
      );

    case 'login':
      return (
        <>
          <Login 
            onLoginSuccess={() => setCurrentScreen('home')} 
            onSignupRedirect={() => setCurrentScreen('signup')} 
            onBack={() => setCurrentScreen('auth-choose')} 
          />
          <StatusBar style="light" />
        </>
      );

    case 'signup':
      return (
        <>
          <Signup 
            onSignupSuccess={() => setCurrentScreen('home')} 
            onLoginRedirect={() => setCurrentScreen('login')} 
            onBack={() => setCurrentScreen('auth-choose')} 
          />
          <StatusBar style="light" />
        </>
      );

    case 'home':
    default:
      return (
        <>
          <Home onLogout={handleLogout} />
          <StatusBar style="light" />
        </>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070714',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#00f3ff',
    textAlign: 'center',
    letterSpacing: 2,
    marginBottom: 10,
  },
  subText: {
    fontSize: 14,
    color: '#a0aec0',
    textAlign: 'center',
    marginBottom: 30,
  },
  backButton: {
    borderColor: '#ff007b',
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
  },
  backButtonText: {
    color: '#ff007b',
    fontWeight: 'bold',
    letterSpacing: 1.5,
  }
});


