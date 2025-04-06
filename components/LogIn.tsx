import React from 'react';
import { StyleSheet, TextInput, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { supabase } from '../lib/supabase';

// Main login screen component
export default function LogIn() {
    // State variables for storing email and password input
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    // Navigation hook from Expo Router
    const router = useRouter();

    // Function to handle sign-in (currently navigates directly to /play)
    const signIn = async () => {
        // This block is commented out but shows how you could authenticate with Supabase
        /*
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
            console.log('error');
        } else {
            router.push("/(play)");
        }
        */
        // Directly navigate to /play (placeholder behavior)
        router.push("/(play)");
    };

    // Function to handle account creation (currently navigates directly to /play)
    const createAccount = () => {
        router.push("/(play)");
    };

    // Function to skip login and go straight to play
    const play = () => {
        router.push("/(play)");
    };

    return (
        <SafeAreaProvider>
            <SafeAreaView>
                {/* --- Sign In Section --- */}
                <View style={styles.section}>
                    <Text style={styles.text}>Sign In</Text>

                    {/* Email Input */}
                    <TextInput
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Email'
                    />

                    {/* Password Input */}
                    <TextInput
                        style={styles.input}
                        value={password}
                        onChangeText={setPassword}
                        placeholder='Password'
                    />

                    {/* Sign In Button */}
                    <TouchableOpacity style={styles.button} onPress={signIn}>
                        <View>
                            <Text>Sign In</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* --- Create Account Section --- */}
                <View style={styles.section}>
                    <Text style={styles.text}>Create Account</Text>

                    {/* Username Input (re-uses email state for now) */}
                    <TextInput
                        style={styles.input}
                        onChangeText={setEmail}
                        value={email}
                        placeholder='Username'
                    />

                    {/* Password Input */}
                    <TextInput
                        style={styles.input}
                        onChangeText={setPassword}
                        value={password}
                        placeholder='Password'
                    />

                    {/* Create Account Button */}
                    <TouchableOpacity style={styles.button} onPress={createAccount}>
                        <View>
                            <Text>Create Account</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                {/* --- Continue Without Signing In --- */}
                <View>
                    <Text style={styles.text2}>Continue without signing in</Text>

                    {/* Let's Play Button */}
                    <TouchableOpacity style={styles.button} onPress={play}>
                        <View>
                            <Text>Let's Play!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </SafeAreaProvider>
    );
};

// Style definitions
const styles = StyleSheet.create({
    section: {
        paddingBottom: 75,
        borderBottomWidth: 1,
    },
    text: {
        paddingTop: 75,
        fontSize: 32,
        textAlign: "center",
    },
    text2: {
        paddingTop: 30,
        paddingBottom: 20,
        fontSize: 16,
        textAlign: "center",
    },
    input: {
        height: 40,
        width: 200,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    button: {
        backgroundColor: "pink",
        width: 150,
        height: 35,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5,
    },
});
