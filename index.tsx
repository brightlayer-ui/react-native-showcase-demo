/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import { MainRouter } from './router';
import { Provider as PaperProvider } from 'react-native-paper';
import React, { useState } from 'react';
import { ThemeContext, ThemeType } from './contexts/ThemeContext';
import { blue, blueDark } from '@brightlayer-ui/react-native-themes';
import { FontScaleContext } from '@brightlayer-ui/react-native-components';

const wrapper = (): JSX.Element => {
    const [theme, setTheme] = useState<ThemeType>('light');

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <PaperProvider theme={theme === 'light' ? blue : blueDark}>
                <FontScaleContext.Provider value={{ maxFontScale: 1.3, disableFontScaling: true }}>
                    <MainRouter />
                </FontScaleContext.Provider>
            </PaperProvider>
        </ThemeContext.Provider>
    );
};

AppRegistry.registerComponent(appName, () => wrapper);
