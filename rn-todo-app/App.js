import React, {useEffect, useCallback, useState} from "react";
import {View} from 'react-native';
import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import {MainLayout} from "./src/MainLayout";
import {TodoState} from "./src/context/todo/TodoState";
import {ScreenState} from './src/context/screens/ScreenState'

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [isReady, setIsReady] = useState(false)


    // 1 так подключаем функции для подключения шрифтов
    useEffect(() => {
        async function prepare() {
            try {
                // load fonts, make any API calls you need to do here
                await Font.loadAsync({
                    'osvald-bold': require('./assets/Oswald/static/Oswald-Bold.ttf'),
                    'osvald-regular': require('./assets/Oswald/static/Oswald-Regular.ttf')
                });
            } catch (e) {
                console.warn(e);
            } finally {
                // Tell the application to render
                setIsReady(true);
            }
        }

        prepare();
    }, [isReady]);
    // 2 так подключаем функции для подключения шрифтов вызываем проверку и hideAsync коллбэком после загрузки будт все шрифты подключены
    const onLayoutRootView = useCallback(async () => {
        if (isReady) {
            await SplashScreen.hideAsync();
        }
    }, [isReady]);

    if (!isReady) {
        return null;
    }

    return (
        <ScreenState>
            <TodoState>
                <View onLayout={onLayoutRootView}>
                    <MainLayout/>
                </View>
            </TodoState>
        </ScreenState>

    );
}
