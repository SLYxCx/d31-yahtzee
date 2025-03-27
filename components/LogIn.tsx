' use client '
import React from 'react';
import {StyleSheet, TextInput, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { useUserAuth } from "../_utils/auth-context";

export default function LogIn() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const { user, signUp, logIn, firebaseSignOut } = useUserAuth();
    const router = useRouter();

    const handleSignUp = async () => {
        try {
          await signUp(email, password);
          // User signed up successfully
        } catch (error) {
          console.error("Signup error:", error);
          // Handle signup error
        }
      };

      const handleLogIn = async () => {
        try {
          await logIn(email, password);
          // User logged in successfully
        } catch (error) {
          console.error("Login error:", error);
          // Handle login error
        }
      };

    const signIn = () => {
            router.push("/(play)");
        }

    const createAccount = () => {
        router.push("/(play)");
    }

    const play = () => {
        router.push("/(play)");
    }

    return (
    <SafeAreaProvider>
    <SafeAreaView>

        <View style={styles.section}>
            <Text style={styles.text}>
                Sign In
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder='Username'
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder='Password'
            />
            <TouchableOpacity 
                style={styles.button}
                onPress={handleLogIn}>
                <View>
                    <Text>Login</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.button}
                onPress={handleSignUp}>
                <View>
                    <Text>Create Account</Text>
                </View>
            </TouchableOpacity>
        </View>

        <View>
        <Text style={styles.text2}>Continue without signing in</Text>
        <TouchableOpacity 
            style={styles.button}
            onPress={play}>
            <View>
                <Text>Let's Play!</Text>
            </View>
        </TouchableOpacity>
        </View>

    </SafeAreaView>
    </SafeAreaProvider>
    );
};

const styles = StyleSheet.create({
    section:
    {
        paddingBottom: 75,
        borderBottomWidth: 1
    },
    text:
    {
        paddingTop: 75,
        fontSize: 32,
        textAlign: "center",
    },
    text2:
    {
        paddingTop: 30,
        paddingBottom: 20,
        fontSize: 16,
        textAlign: "center",
    },
    input: 
    {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: 
    {
        backgroundColor: "pink",
        width: 150,
        height: 35,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
});
