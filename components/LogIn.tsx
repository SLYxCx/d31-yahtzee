import React from 'react';
import {StyleSheet, TextInput, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { supabase } from '../lib/supabase';

export default function LogIn() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const router = useRouter();
    const signIn = async () => {
        // const { error } = await supabase.auth.signInWithPassword({ email, password });
        // if (error) {
        //     console.log('error')
        // } else {
        //     router.push("/(play)")
        // }
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
            value={email}
            onChangeText={setEmail}
            placeholder='Email'
        />
        <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder='Password'
        />
        <TouchableOpacity 
            style={styles.button}
            onPress={signIn}>
            <View>
                <Text>Sign In</Text>
            </View>
        </TouchableOpacity>
        </View>

        <View style={styles.section}>
        <Text style={styles.text}>
            Create Account
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
            onPress={createAccount}>
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
