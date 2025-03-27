import { Stack } from "expo-router";


export default function RootLayout() {
    return (
        <Stack
            screenOptions=
                {{
                    headerShown: false,
                }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="modal" options={{presentation: 'modal', animation: 'slide_from_bottom'}}/>
            <Stack.Screen name="(play)" />
            <Stack.Screen name="options" />
        </Stack>
    )
}