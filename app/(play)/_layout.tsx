import { Stack } from "expo-router";


export default function PlayLayout() {
    return (
        <Stack
            screenOptions=
                {{
                    headerShown: false,
                }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="(game)" />
            <Stack.Screen name="(computer)" />
            <Stack.Screen name="results" options={{ presentation: 'modal', animation: 'slide_from_bottom' }} />

        </Stack>
    )
}