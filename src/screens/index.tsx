import React from "react";
import { StatusBarHeader } from "@components/StatusBarHeader"
import { LangProvider } from "@context/LanguageProvider"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainScreen } from "./MainScreen"
import { SettingsScreen } from "./SettingsScreen";
import { DriverScreen } from "./DriverScreen";
import { ScreenNames } from "@interfaces/index";
import { ScreenValuesProvider } from "@src/context/ScreenValuesProvider";

const Stack = createNativeStackNavigator<ScreenNames>();

const Main = () => {
    return (
        <ScreenValuesProvider>
            <LangProvider>
                <StatusBarHeader />
                <NavigationContainer>
                    <Stack.Navigator 
                        screenOptions={{
                            headerShown: false
                        }}>
                        <Stack.Screen 
                            name="Main"
                            component={MainScreen}
                            />
                        <Stack.Screen 
                            name="Setting"
                            component={SettingsScreen}
                            />
                        <Stack.Screen 
                            name="Driver"
                            component={DriverScreen}
                            />
                    </Stack.Navigator>
                </NavigationContainer>
            </LangProvider>
        </ScreenValuesProvider>
    )
}

export default Main