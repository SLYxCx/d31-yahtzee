import { Stack } from "expo-router";


export default function ComputerLayout() {
    return (
        <Stack
            screenOptions=
                {{
                    headerShown: false,
                }}>
            <Stack.Screen name="index" />
        </Stack>
    )
}