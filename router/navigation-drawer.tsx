import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerNavGroup,
    NavItem,
    Subtitle1,
    DrawerFooter,
    IconFamily,
} from '@brightlayer-ui/react-native-components';
import React, { useState, useCallback } from 'react';
import { Image, View } from 'react-native';
import { Divider, useTheme } from 'react-native-paper';
import * as Colors from '@brightlayer-ui/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './index';

const headerBgImage = require('../assets/images/topology_40.png');
const eatonLogo = require('../assets/images/eatonLogo.png');
const eatonLogoWhite = require('../assets/images/eatonLogoWhite.png');

const Battery: IconFamily = { family: 'brightlayer-ui', name: 'battery', direction: 'auto' };
const Humidity: IconFamily = { family: 'brightlayer-ui', name: 'moisture', direction: 'ltr' };
const MenuIcon: IconFamily = { family: 'material', name: 'menu', direction: 'auto' };
const Clock: IconFamily = { family: 'material-community', name: 'clock-outline', direction: 'ltr' };
const MailIcon: IconFamily = { family: 'material', name: 'mail', direction: 'auto' };

export const navGroupItems1: NavItem[] = [
    {
        title: 'Identity Management',
        itemID: 'g1i1',
        icon: Battery,
    },
    {
        title: 'Calendar',
        itemID: 'g1i2',
        icon: Humidity,
    },
    {
        title: 'Accessibility',
        itemID: 'g1i3',
        icon: Clock,
        subtitle: 'Sample subtitle',
        items: [
            {
                title: 'Sub NavItem 1',
                itemID: 'g1i3i1',
            },
            {
                title: 'Sub NavItem 2',
                itemID: 'g1i3i2',
            },
            {
                title: 'Sub NavItem 3',
                itemID: 'g1i3i3',
                items: [
                    {
                        title: 'Deep Nested Nav',
                        itemID: 'g1i3i3i1',
                    },
                ],
            },
        ],
    },
    {
        title: 'Notifications',
        itemID: 'g1i4',
        icon: MailIcon,
    },
];

export const navGroupItems2: NavItem[] = [
    {
        title: 'Devices',
        subtitle: '4 new alerts',
        itemID: 'g2i1',
        statusColor: Colors.yellow[500],
        items: [
            {
                title: 'Sub NavItem 1',
                itemID: 'g2i1i1',
                items: [
                    {
                        statusColor: Colors.red[500],
                        title: 'Deep Nested Nav',
                        itemID: 'g2i1i1i1',
                    },
                ],
            },
            {
                title: 'Sub NavItem 2',
                itemID: 'g2i1i2',
            },
        ],
    },
    {
        title: 'Events',
        itemID: 'g2i2',
    },
    {
        title: 'Settings',
        itemID: 'g2i3',
    },
    {
        subtitle: 'You cant see me, fix InfoListItem',
        title: 'Alerts',
        itemID: 'g2i4',
        activeItemFontColor: Colors.white[50],
        activeItemBackgroundColor: Colors.blue[900],
    },
];

export type NavDrawerProps = {
    navigation: StackNavigationProp<RootStackParamList, 'NavigationDrawer'>;
};
export const NavigationDrawer: React.FC<NavDrawerProps> = ({ navigation }) => {
    const theme = useTheme();
    const [selected, setSelected] = useState('');
    const selectItem = useCallback(
        (id: string) => {
            // Expandable items do not require navigation or selection.
            if (id === 'g2i1i1' || id === 'g2i1' || id === 'g1i3i3' || id === 'g1i3') {
                return;
            }

            navigation.navigate('App');
            setSelected(id);
        },
        [navigation]
    );

    return (
        <Drawer activeItem={selected} onItemSelect={(id: string): void => selectItem(id)}>
            <DrawerHeader
                title={'Drawer Title'}
                subtitle={'Drawer Subtitle'}
                backgroundImage={headerBgImage}
                fontColor={Colors.white[50]}
                icon={MenuIcon}
                onIconPress={(): void => {
                    navigation.closeDrawer();
                }}
            />
            <DrawerBody>
                <DrawerNavGroup items={navGroupItems1} title={'Group 1'} hidePadding={false} />
                <DrawerNavGroup
                    items={navGroupItems2}
                    nestedDivider={true}
                    titleContent={
                        <View>
                            <Subtitle1 style={{ padding: 16 }}>Custom Navgroup Content</Subtitle1>
                            <Divider />
                        </View>
                    }
                />
            </DrawerBody>
            <DrawerFooter>
                <Divider />
                <View
                    style={{
                        padding: 16,
                        backgroundColor: theme.dark ? Colors.darkBlack[100] : 'white',
                        alignItems: 'center',
                    }}
                >
                    <Image source={theme.dark ? eatonLogoWhite : eatonLogo} style={{ height: 60, width: '80%' }} />
                </View>
            </DrawerFooter>
        </Drawer>
    );
};
