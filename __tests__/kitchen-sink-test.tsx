import 'react-native';
import React from 'react';
import { KitchenSink } from '../components/kitchen-sink';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeContext } from '../contexts/ThemeContext';
import { blue } from '@brightlayer-ui/react-native-themes';
import { cleanup } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
jest.useFakeTimers();
jest.mock('react-native-safe-area-context', () => ({
    useSafeAreaInsets: (): { top: number; left: number; right: number; bottom: number } => ({
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }),
}));

describe('Kitchen sink snapshot', () => {
    afterEach(cleanup);
    test('Renders correctly and snapShot matches', () => {
        const snap = renderer
            .create(
                <ThemeContext.Provider value={{ theme: 'light', setTheme: (): void => {} }}>
                    <PaperProvider theme={blue}>
                        <KitchenSink />
                    </PaperProvider>
                </ThemeContext.Provider>
            )
            .toJSON();
        expect(snap).toMatchSnapshot();
    });
});
