/**
 Copyright (c) 2021-present, Eaton
 All rights reserved.
 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, View, I18nManager, Text, TouchableOpacity } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import RNRestart from 'react-native-restart';
import {
    ChannelValue,
    EmptyState,
    Header,
    Hero,
    HeroBanner,
    IconFamily,
    InfoListItem,
    ListItemTag,
    ScoreCard,
    CollapsibleHeaderLayout,
} from '@brightlayer-ui/react-native-components';
import { ThemedButton } from '@brightlayer-ui/react-native-components/themed';
import { Card, useTheme } from 'react-native-paper';
import MatIcon from 'react-native-vector-icons/MaterialIcons';
import * as BLUIColors from '@brightlayer-ui/colors';

import { RootStackParamList } from './router';
import { MobileStepperExample } from './components/mobile-stepper-example';
import { useThemeContext } from './contexts/ThemeContext';
import { UserMenuExample } from './components/user-menu-example';
import { KitchenSink } from './components/kitchen-sink';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MyTabs } from './my-tabs';

const backgroundImage = require('./assets/images/farm.jpg');

const Sunny: IconFamily = { family: 'material', name: 'wb-sunny', direction: 'ltr' };
const Notifications: IconFamily = { family: 'material', name: 'notifications', direction: 'ltr' };
const Info: IconFamily = { family: 'material', name: 'info', direction: 'ltr' };
const Clouds: IconFamily = { family: 'material', name: 'cloud', direction: 'ltr' };
const ChartLineVariant: IconFamily = { family: 'material-community', name: 'chart-line-variant', direction: 'ltr' };
const Battery: IconFamily = { family: 'brightlayer-ui', name: 'battery', direction: 'auto' };
const A: IconFamily = { family: 'brightlayer-ui', name: 'grade_a', direction: 'ltr' };
const Temp: IconFamily = { family: 'brightlayer-ui', name: 'temp', direction: 'ltr' };
const Humidity: IconFamily = { family: 'brightlayer-ui', name: 'moisture', direction: 'ltr' };
const Pie: IconFamily = { family: 'material-community', name: 'chart-pie', direction: 'ltr' };
const Clock: IconFamily = { family: 'material-community', name: 'clock-outline', direction: 'ltr' };
const MailIcon: IconFamily = { family: 'material', name: 'mail', direction: 'ltr' };
const MenuIcon: IconFamily = { family: 'material', name: 'menu', direction: 'auto' };
const MoreIcon: IconFamily = { family: 'material', name: 'more-vert', direction: 'ltr' };

const PADDING = 10;

export const toggleRTL = (): void => {
    if (I18nManager.isRTL) {
        I18nManager.allowRTL(false);
        I18nManager.forceRTL(false);
    } else {
        I18nManager.forceRTL(true);
    }
    RNRestart.Restart();
};

type AppProps = {
    navigation: StackNavigationProp<RootStackParamList, 'App'>;
};

export const App: React.FC<AppProps> = ({ navigation }) => {
    const theme = useTheme();
    const { theme: themeType, setTheme } = useThemeContext();

    return (
        <>
            <View style={{ flex: 1, backgroundColor: theme.colors.background }}>
                <Header
                    expandable={true}
                    title={'South Tin Mill'}
                    subtitle={'Gary Steel Works'}
                    info={'Online'}
                    icon={MenuIcon}
                    onIconPress={(): void => {
                        navigation.openDrawer();
                    }}
                    actionItems={[
                        {
                            component: (
                                <UserMenuExample
                                    onToggleRTL={toggleRTL}
                                    onToggleTheme={(): void => setTheme(themeType === 'light' ? 'dark' : 'light')}
                                />
                            ),
                        },
                    ]}
                    backgroundImage={backgroundImage}
                    searchableConfig={{ placeholder: 'Search', autoFocus: true }}
                />
                <ScrollView>
                    <Card style={{ padding: 0, margin: PADDING, marginBottom: 0 }}>
                        <CollapsibleHeaderLayout
                            HeaderProps={{
                                variant: 'dynamic',
                                title: (
                                    <Text style={{ color: BLUIColors.gray[800], fontSize: 32 }}>
                                        School of Fine Arts
                                    </Text>
                                ),
                                fontColor: BLUIColors.gray[800],
                                backgroundColor: 'white',
                                info: (
                                    <TouchableOpacity>
                                        <View
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'row',
                                                alignItems: 'center',
                                            }}
                                        >
                                            <Text
                                                style={{
                                                    fontSize: 16,
                                                    color: BLUIColors.gray[600],
                                                }}
                                            >
                                                Haus Deutch
                                            </Text>
                                            <Icon name={'arrow-drop-up'} size={24} color={BLUIColors.gray[600]} />
                                        </View>
                                    </TouchableOpacity>
                                ),
                                subtitle: (
                                    <Text style={{ fontSize: 14, color: BLUIColors.gray[300] }}>
                                        123 Any Street, Maxvorstadt 45678
                                    </Text>
                                ),
                                icon: { name: 'arrow-back' },
                                onIconPress: () => {
                                    navigation.pop();
                                },
                                actionItems: [{ icon: { name: 'edit' }, onPress: () => {} }],
                                collapsedHeight: 50,
                                expandedHeight: 200,
                                expandable: true,
                            }}
                        >
                            <MyTabs />
                        </CollapsibleHeaderLayout>
                    </Card>
                    <Card style={{ padding: 0, margin: PADDING, marginBottom: 0 }}>
                        <EmptyState
                            title={'Nothing Found'}
                            description={'Not a single thing'}
                            icon={ChartLineVariant}
                            actions={
                                <ThemedButton mode={'outlined'} icon={'plus'}>
                                    Add a Device
                                </ThemedButton>
                            }
                        />
                    </Card>
                    <Card style={{ padding: 0, margin: PADDING, marginBottom: PADDING }}>
                        <HeroBanner>
                            <Hero
                                label={'Healthy'}
                                value={96}
                                units={'/100'}
                                icon={A}
                                fontSize={20}
                                iconColor={theme.dark ? BLUIColors.green[200] : BLUIColors.green[500]}
                            />
                            <Hero
                                label={'Battery'}
                                value={'Full'}
                                icon={Battery}
                                iconColor={theme.dark ? BLUIColors.blue[200] : BLUIColors.blue[500]}
                            />
                            <Hero label={'Estimated'} icon={Clock} iconColor={BLUIColors.gray[500]}>
                                <ChannelValue fontSize={20} value={1} units={'h'} />
                                <ChannelValue fontSize={20} value={37} units={'m'} />
                            </Hero>
                            <Hero
                                label={'Loaded'}
                                icon={Pie}
                                iconColor={theme.dark ? BLUIColors.blue[200] : BLUIColors.blue[500]}
                            >
                                <ChannelValue fontSize={20} value={65} units={'%'} icon={ChartLineVariant} />
                            </Hero>
                            <Hero
                                label={'Not Shown'}
                                value={'5th Item'}
                                icon={Battery}
                                iconColor={theme.dark ? BLUIColors.blue[200] : BLUIColors.blue[500]}
                            />
                        </HeroBanner>
                        <InfoListItem
                            divider={'full'}
                            icon={Sunny}
                            title={'Temperature'}
                            rightComponent={<ChannelValue value={68} units={'°F'} />}
                        />
                        <InfoListItem
                            divider={'full'}
                            icon={Sunny}
                            title={'Temperature'}
                            rightComponent={<ChannelValue value={68} units={'°F'} />}
                        />
                        <InfoListItem
                            divider={'full'}
                            icon={Sunny}
                            title={'Temperature'}
                            rightComponent={
                                <React.Fragment>
                                    <ChannelValue value={1} units={'h'} icon={Clock} />
                                    <ChannelValue value={24} units={'m'} />
                                </React.Fragment>
                            }
                        />
                    </Card>
                    <InfoListItem
                        title={'Emerson Field West'}
                        subtitle={['DG 100', 'EDR 5000', 'Online']}
                        statusColor={BLUIColors.green[500]}
                        hidePadding={true}
                        icon={Battery}
                        avatar
                        rightComponent={<MatIcon name={'mail'} size={24} color={theme.colors.text} />}
                        divider={'partial'}
                        onPress={(): void => {
                            /* do nothing */
                        }}
                    />
                    <InfoListItem
                        title={'South Hills Farm'}
                        subtitle={'Offline'}
                        statusColor={BLUIColors.red[500]}
                        divider={'full'}
                        icon={Pie}
                        iconAlign={'center'}
                        hidePadding={false}
                        fontColor={theme.dark ? BLUIColors.red[200] : BLUIColors.red[500]}
                        rightComponent={<ChannelValue value={15} units={'A'} color={theme.colors.text} />}
                        onPress={(): void => {
                            /* do nothing */
                        }}
                    />
                    <InfoListItem
                        title={'Cherry East'}
                        subtitle={['DG 100', 'EDR 5000', 'Online']}
                        subtitleSeparator={'/'}
                        hidePadding
                        rightComponent={<ListItemTag label={'ACTIVE'} />}
                        onPress={(): void => {
                            /* do nothing */
                        }}
                    />
                    <ScoreCard
                        style={{ margin: PADDING }}
                        headerTitle={'Portland Datacenter Long Name'}
                        headerSubtitle={'6 UPS Devices'}
                        headerInfo={'Attention Required'}
                        headerBackgroundImage={backgroundImage}
                        headerColor={BLUIColors.blue[500]}
                        actionItems={[
                            {
                                icon: MoreIcon,
                                onPress: (): void => {
                                    /* do nothing */
                                },
                            },
                        ]}
                        badgeOffset={-55}
                        badge={
                            <HeroBanner style={{ flex: 0, minWidth: 80, justifyContent: 'flex-end' }}>
                                <Hero
                                    label={'Score'}
                                    iconSize={48}
                                    iconColor={theme.dark ? BLUIColors.green[200] : BLUIColors.green[500]}
                                    value={98}
                                    units={'/100'}
                                    icon={A}
                                />
                            </HeroBanner>
                        }
                        actionRow={
                            <InfoListItem
                                dense
                                chevron
                                hidePadding
                                title={'View Location'}
                                onPress={(): void => {
                                    /* do nothing */
                                }}
                            />
                        }
                    >
                        <View style={{ justifyContent: 'center', marginLeft: -16 }}>
                            <InfoListItem
                                dense
                                icon={Notifications}
                                iconColor={BLUIColors.red[500]}
                                title={'1 Alarm'}
                                fontColor={theme.dark ? BLUIColors.red[200] : BLUIColors.red[500]}
                            />
                            <InfoListItem
                                dense
                                icon={Info}
                                iconColor={theme.dark ? BLUIColors.blue[200] : BLUIColors.blue[500]}
                                title={'1 Event'}
                            />
                            <InfoListItem dense icon={Clouds} title={'Online'} />
                        </View>
                    </ScoreCard>
                    <ScoreCard
                        style={{ margin: PADDING, marginTop: 0 }}
                        headerColor={BLUIColors.red[500]}
                        headerTitle={'Substation 3'}
                        headerSubtitle={'High Humidity Alarm'}
                        headerInfo={'5 Devices'}
                        headerBackgroundImage={backgroundImage}
                        actionItems={[
                            {
                                icon: MailIcon,
                                onPress: (): void => {
                                    /* do nothing */
                                },
                            },
                            {
                                icon: MoreIcon,
                                onPress: (): void => {
                                    /* do nothing */
                                },
                            },
                        ]}
                        badge={
                            <HeroBanner style={{ flex: 0, minWidth: 180, justifyContent: 'flex-end' }}>
                                <Hero label={'Temperature'} iconSize={70} value={69} units={'°F'} icon={Temp} />
                                <Hero
                                    label={'Humidity'}
                                    iconSize={70}
                                    iconColor={BLUIColors.blue[200]}
                                    value={78}
                                    units={'%'}
                                    icon={Humidity}
                                />
                            </HeroBanner>
                        }
                        actionRow={
                            <InfoListItem
                                dense
                                chevron
                                hidePadding
                                title={'View Location'}
                                onPress={(): void => {
                                    /* do nothing */
                                }}
                            />
                        }
                    >
                        <View style={{ justifyContent: 'center', marginLeft: -16 }}>
                            <InfoListItem
                                dense
                                icon={Notifications}
                                iconColor={BLUIColors.red[500]}
                                title={'1 Alarm'}
                                fontColor={theme.dark ? BLUIColors.red[200] : BLUIColors.red[500]}
                            />
                            <InfoListItem
                                dense
                                icon={Info}
                                iconColor={theme.dark ? BLUIColors.blue[200] : BLUIColors.blue[500]}
                                title={'1 Event'}
                            />
                            <InfoListItem dense icon={Clouds} title={'Online'} />
                        </View>
                    </ScoreCard>

                    <MobileStepperExample />

                    <KitchenSink />

                    <SafeAreaView />
                </ScrollView>
            </View>
        </>
    );
};
