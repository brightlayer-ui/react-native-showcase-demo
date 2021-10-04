/* eslint-disable no-console */
import { Body1, H5, Subtitle1 } from '@pxblue/react-native-components';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
    Appbar,
    Avatar,
    Badge,
    Banner,
    Button,
    BottomNavigation,
    Card,
    Checkbox,
    Chip,
    DataTable,
    Dialog,
    Divider,
    FAB,
    HelperText,
    IconButton,
    List,
    Menu,
    Modal,
    Paragraph,
    Portal,
    RadioButton,
    Surface,
    Switch,
    Title,
    ToggleButton,
    TextInput,
    useTheme,
    ProgressBar,
    Snackbar,
    ActivityIndicator,
} from 'react-native-paper';

// import { ThemedTextInput as TextInput } from './themed-text-input';
import {
    ThemedActivityIndicator,
    ThemedAppbar,
    ThemedAvatar,
    ThemedBadge,
    ThemedButton,
    ThemedBottomNavigation,
    ThemedCheckbox,
    ThemedChip,
    ThemedDivider,
    ThemedFAB,
    ThemedProgressBar,
    ThemedRadioButton,
    ThemedSnackbar,
    ThemedSwitch,
    ThemedTextInput,
    ThemedToggleButton,
} from '@pxblue/react-native-components/themed';
const AvatarTestImage = require('../assets/images/test-avatar.png');

const MusicRoute = (): JSX.Element => <Subtitle1>Music</Subtitle1>;
const AlbumsRoute = (): JSX.Element => <Subtitle1>Albums</Subtitle1>;
const RecentsRoute = (): JSX.Element => <Subtitle1>Recents</Subtitle1>;

const styles = StyleSheet.create({
    card: {
        padding: 0,
        margin: 10,
        marginBottom: 5,
    },
    surface: {
        padding: 8,
        height: 100,
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
    information: {
        marginTop: 8,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
});

export const KitchenSink: React.FC = (): JSX.Element => {
    const theme = useTheme();
    const [bannerVisible, setBannerVisible] = React.useState(true);
    const [checkboxAndroidOne, setCheckboxAndroidOne] = React.useState<'checked' | 'unchecked' | 'indeterminate'>(
        'unchecked'
    );
    const [checkboxAndroidTwo, setCheckboxAndroidTwo] = React.useState<'checked' | 'unchecked' | 'indeterminate'>(
        'checked'
    );
    const [checkboxIOSOne, setCheckboxIOSOne] = React.useState<'checked' | 'unchecked' | 'indeterminate'>('unchecked');
    const [checkboxIOSTwo, setCheckboxIOSTwo] = React.useState<'checked' | 'unchecked' | 'indeterminate'>('checked');
    const [dialogVisible, setDialogVisible] = React.useState(false);
    const [helperTextInputText, setHelperTextInputText] = React.useState('');
    const [accordionOneExpanded, setAccordionOneExpanded] = React.useState(false);
    const [accordionTwoExpanded, setAccordionTwoExpanded] = React.useState(false);
    const [menuVisible, setMenuVisible] = React.useState(false);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [radioButtonAndroidValue, setRadioButtonAndroidValue] = React.useState('first');
    const [radioButtonIOSValue, setRadioButtonIOSValue] = React.useState('first');
    const [snackbarVisible, setSnackbarVisible] = React.useState(false);
    const [snackbarTwoVisible, setSnackbarTwoVisible] = React.useState(false);
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);
    const [toggleButtonValue, setToggleButtonValue] = useState('left');
    const [nameInputText, setNameInputText] = React.useState('');
    const [emailInputText, setEmailInputText] = React.useState('');
    const [errorNameInputText, setErrorNameInputText] = React.useState('');
    const [errorEmailInputText, setErrorEmailInputText] = React.useState('');
    const [index, setIndex] = React.useState(0);

    const onChangeHelperTextInputText = (text: string): void => setHelperTextInputText(text);

    const helperTextInputHasErrors = (): boolean => !helperTextInputText.includes('@');

    const [routes] = React.useState([
        { key: 'music', title: 'Music', icon: 'music', color: 'red', badge: true },
        { key: 'albums', title: 'Albums', icon: 'album', color: 'orange', badge: '1' },
        { key: 'recents', title: 'Recents', icon: 'history', color: 'yellow' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    });

    const [state, setState] = React.useState({ open: false });

    const onStateChange = ({ open }: { open: boolean }): void => setState({ open });

    const { open } = state;

    return (
        <>
            <H5 style={{ marginVertical: 48 }}>Default Components</H5>
            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Banner</H5>
                    <View style={{ marginTop: 24 }}>
                        <Banner
                            visible={bannerVisible}
                            actions={[
                                {
                                    label: 'Fix it',
                                    onPress: (): void => setBannerVisible(false),
                                },
                                {
                                    label: 'Learn more',
                                    onPress: (): void => setBannerVisible(false),
                                },
                            ]}
                            icon="account-circle"
                        >
                            There was a problem processing a transaction on your credit card.
                        </Banner>
                        {!bannerVisible && (
                            <ThemedButton
                                mode={'contained'}
                                onPress={(): void => {
                                    setBannerVisible(true);
                                }}
                            >
                                Show Banner
                            </ThemedButton>
                        )}
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Card</H5>
                    <View style={{ marginTop: 24 }}>
                        <Card style={{ elevation: 4 }}>
                            <Card.Title
                                title="Card Title"
                                subtitle="Card Subtitle"
                                left={(): JSX.Element => <ThemedAvatar.Icon icon="account-circle" size={40} />}
                            />
                            <Card.Content>
                                <Title>Card title</Title>
                                <Paragraph>Card content</Paragraph>
                            </Card.Content>
                            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
                            <Card.Actions style={{ justifyContent: 'flex-end' }}>
                                <ThemedButton>Cancel</ThemedButton>
                                <ThemedButton>Ok</ThemedButton>
                            </Card.Actions>
                        </Card>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Data Table</H5>
                    <View style={{ marginTop: 24 }}>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Dessert</DataTable.Title>
                                <DataTable.Title numeric>Calories</DataTable.Title>
                                <DataTable.Title numeric>Fat (g)</DataTable.Title>
                            </DataTable.Header>
                            <DataTable.Row>
                                <DataTable.Cell>Ice Cream</DataTable.Cell>
                                <DataTable.Cell numeric>137</DataTable.Cell>
                                <DataTable.Cell numeric>7</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Chocolate Chip Cookie</DataTable.Cell>
                                <DataTable.Cell numeric>78</DataTable.Cell>
                                <DataTable.Cell numeric>4.5</DataTable.Cell>
                            </DataTable.Row>
                            <DataTable.Row>
                                <DataTable.Cell>Angel Food Cake</DataTable.Cell>
                                <DataTable.Cell numeric>129</DataTable.Cell>
                                <DataTable.Cell numeric>0.2</DataTable.Cell>
                            </DataTable.Row>
                        </DataTable>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Dialog</H5>
                    <View style={{ marginTop: 24 }}>
                        <Portal>
                            <Dialog visible={dialogVisible} onDismiss={(): void => setDialogVisible(false)}>
                                <Dialog.Title>This is a title</Dialog.Title>
                                <Dialog.Content>
                                    <Paragraph>This is simple dialog</Paragraph>
                                </Dialog.Content>
                                <Dialog.Actions>
                                    <ThemedButton onPress={(): void => setDialogVisible(false)}>Cancel</ThemedButton>
                                    <ThemedButton onPress={(): void => setDialogVisible(false)}>Ok</ThemedButton>
                                </Dialog.Actions>
                            </Dialog>
                        </Portal>
                        {!dialogVisible && (
                            <ThemedButton
                                mode={'contained'}
                                onPress={(): void => {
                                    setDialogVisible(true);
                                }}
                            >
                                Show Dialog
                            </ThemedButton>
                        )}
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Helper Text</H5>
                    <View style={{ marginTop: 24 }}>
                        <ThemedTextInput
                            label="Email"
                            value={helperTextInputText}
                            onChangeText={onChangeHelperTextInputText}
                            error={helperTextInputHasErrors()}
                        />
                        <HelperText type="error" visible={helperTextInputHasErrors()}>
                            Email address is invalid!
                        </HelperText>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Icon Button</H5>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 24 }}
                    >
                        <IconButton icon="fire" size={24} onPress={(): void => console.log('Icon Button Pressed')} />
                        <IconButton icon="fire" size={40} onPress={(): void => console.log('Icon Button Pressed')} />
                        <IconButton icon="fire" size={56} onPress={(): void => console.log('Icon Button Pressed')} />
                        <IconButton icon="fire" size={72} onPress={(): void => console.log('Icon Button Pressed')} />
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>List</H5>
                    <View style={{ marginTop: 24 }}>
                        <View>
                            <List.Item
                                title="Item 1"
                                description="Item 1 Description"
                                left={(): JSX.Element => <List.Icon icon="folder" />}
                            />
                            <List.Item
                                title="Item 2"
                                description="Item 2 Description"
                                left={(): JSX.Element => <List.Icon icon="folder" />}
                            />
                            <List.Item
                                title="Item 3"
                                description="Item 3 Description"
                                left={(): JSX.Element => <List.Icon icon="folder" />}
                            />
                        </View>
                        <View>
                            <List.Section title="Accordions">
                                <List.Accordion
                                    title="Accordion 1"
                                    left={(): JSX.Element => <List.Icon icon="folder" />}
                                    expanded={accordionOneExpanded}
                                    onPress={(): void => setAccordionOneExpanded(!accordionOneExpanded)}
                                >
                                    <List.Item title="Item 1" description="Item 1 Description" />
                                    <List.Item title="Item 2" description="Item 2 Description" />
                                </List.Accordion>
                                <List.Accordion
                                    title="Accordion 2"
                                    left={(): JSX.Element => <List.Icon icon="folder" />}
                                    expanded={accordionTwoExpanded}
                                    onPress={(): void => setAccordionTwoExpanded(!accordionTwoExpanded)}
                                >
                                    <List.Item title="Item 1" description="Item 1 Description" />
                                    <List.Item title="Item 2" description="Item 2 Description" />
                                </List.Accordion>
                            </List.Section>
                        </View>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Menu</H5>
                    <View style={{ marginTop: 24 }}>
                        <Menu
                            visible={menuVisible}
                            onDismiss={(): void => setMenuVisible(false)}
                            anchor={
                                <ThemedButton mode={'contained'} onPress={(): void => setMenuVisible(true)}>
                                    Show menu
                                </ThemedButton>
                            }
                        >
                            <Menu.Item onPress={(): void => setMenuVisible(false)} title="Item 1" />
                            <Menu.Item onPress={(): void => setMenuVisible(false)} title="Item 2" />
                            <ThemedDivider />
                            <Menu.Item onPress={(): void => setMenuVisible(false)} title="Item 3" />
                            <Menu.Item onPress={(): void => setMenuVisible(false)} title="Item 4" />
                        </Menu>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Modal</H5>
                    <View style={{ marginTop: 24 }}>
                        <Portal theme={theme}>
                            <Modal
                                visible={modalVisible}
                                onDismiss={(): void => setModalVisible(false)}
                                contentContainerStyle={{
                                    backgroundColor: theme.colors.surface,
                                    padding: 24,
                                    height: 300,
                                    marginHorizontal: 24,
                                }}
                            >
                                <Body1>Example Modal. Click outside this area to dismiss.</Body1>
                            </Modal>
                        </Portal>
                        <ThemedButton
                            mode={'contained'}
                            onPress={(): void => {
                                setModalVisible(true);
                            }}
                        >
                            Show Modal
                        </ThemedButton>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Surface</H5>
                    <View style={{ marginTop: 24 }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <Surface style={[styles.surface, { elevation: 1 }]}>
                                <Body1>Surface 1</Body1>
                            </Surface>
                            <Surface style={[styles.surface, { elevation: 2 }]}>
                                <Body1>Surface 2</Body1>
                            </Surface>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 24 }}>
                            <Surface style={[styles.surface, { elevation: 3 }]}>
                                <Body1>Surface 3</Body1>
                            </Surface>
                            <Surface style={[styles.surface, { elevation: 4 }]}>
                                <Body1>Surface 4</Body1>
                            </Surface>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 24 }}>
                            <Surface style={[styles.surface, { elevation: 5 }]}>
                                <Body1>Surface 5</Body1>
                            </Surface>
                            <Surface style={[styles.surface, { elevation: 6 }]}>
                                <Body1>Surface 6</Body1>
                            </Surface>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 24 }}>
                            <Surface style={[styles.surface, { elevation: 7 }]}>
                                <Body1>Surface 7</Body1>
                            </Surface>
                            <Surface style={[styles.surface, { elevation: 8 }]}>
                                <Body1>Surface 8</Body1>
                            </Surface>
                        </View>
                    </View>
                </View>
            </Card>

            {/**
             * BEGIN THEMED WRAPPER COMPONENT SECTION
             *  */}

            <H5 style={{ marginVertical: 48 }}>Themed (Wrapper) Components</H5>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Activity Indicator</H5>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            marginTop: 24,
                        }}
                    >
                        <ActivityIndicator animating={true} size={'small'} />
                        <ActivityIndicator animating={true} size={'large'} />
                        <ThemedActivityIndicator animating={true} size={'small'} />
                        <ThemedActivityIndicator animating={true} size={'large'} />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Appbar</H5>
                    <View style={{ marginTop: 24 }}>
                        <Appbar style={{ marginBottom: 16 }}>
                            <Appbar.Content title="Title" subtitle="Subtitle" />
                            <Appbar.Action icon="magnify" />
                            <Appbar.Action icon="dots-vertical" />
                        </Appbar>
                        <Appbar style={{ marginBottom: 16 }}>
                            <Appbar.BackAction />
                            <Appbar.Content title="Title" subtitle="Subtitle" />
                            <Appbar.Action icon="magnify" />
                            <Appbar.Action icon="dots-vertical" />
                        </Appbar>
                        <ThemedAppbar style={{ marginBottom: 16 }}>
                            <Appbar.Content title="Title" subtitle="Subtitle" />
                            <Appbar.Action icon="magnify" />
                            <Appbar.Action icon="dots-vertical" />
                        </ThemedAppbar>
                        <ThemedAppbar>
                            <Appbar.BackAction />
                            <Appbar.Content title="Title" subtitle="Subtitle" />
                            <Appbar.Action icon="magnify" />
                            <Appbar.Action icon="dots-vertical" />
                        </ThemedAppbar>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Avatar</H5>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            marginTop: 24,
                        }}
                    >
                        <Avatar.Icon size={40} icon="account-circle" />
                        <Avatar.Image size={40} source={AvatarTestImage} />
                        <Avatar.Text size={40} label="PX" />
                        <ThemedAvatar.Icon size={40} icon="account-circle" />
                        <ThemedAvatar.Image size={40} source={AvatarTestImage} />
                        <ThemedAvatar.Text size={40} label="PX" />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Badge</H5>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                            marginTop: 24,
                        }}
                    >
                        <Badge size={24} visible></Badge>
                        <Badge size={24} visible>
                            3
                        </Badge>
                        <Badge size={40} visible>
                            8
                        </Badge>
                        <ThemedBadge size={24} visible></ThemedBadge>
                        <ThemedBadge size={24} visible>
                            3
                        </ThemedBadge>
                        <ThemedBadge size={40} visible>
                            8
                        </ThemedBadge>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>BottomNavigation</H5>
                    <View style={{ marginTop: 24 }}>
                        <BottomNavigation
                            style={{ marginBottom: 16 }}
                            navigationState={{ index, routes }}
                            onIndexChange={setIndex}
                            renderScene={renderScene}
                        />
                        <ThemedBottomNavigation
                            navigationState={{ index, routes }}
                            onIndexChange={setIndex}
                            renderScene={renderScene}
                        />
                    </View>
                </View>
            </Card>

            <Card style={{ padding: 20, margin: 20, marginBottom: 0 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        icon="download"
                        mode="text"
                        onPress={(): void => console.log('Pressed Text Button')}
                        style={{ width: 150 }}
                    >
                        Press me
                    </Button>
                    <ThemedButton
                        icon="download"
                        mode="text"
                        onPress={(): void => console.log('Pressed Text Button')}
                        style={{ width: 150 }}
                    >
                        Press me
                    </ThemedButton>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        icon="download"
                        mode="outlined"
                        onPress={(): void => console.log('Pressed Outlined Button')}
                        style={{ marginTop: 24, width: 150 }}
                    >
                        Press me
                    </Button>
                    <ThemedButton
                        icon="download"
                        mode="outlined"
                        onPress={(): void => console.log('Pressed Outlined Button')}
                        style={{ marginTop: 24, width: 150 }}
                    >
                        Press me
                    </ThemedButton>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        icon="download"
                        mode="contained"
                        onPress={(): void => console.log('Pressed Contained Button')}
                        style={{ marginTop: 24, width: 150 }}
                    >
                        Press me
                    </Button>
                    <ThemedButton
                        icon="download"
                        mode="contained"
                        onPress={(): void => console.log('Pressed Contained Button')}
                        style={{ marginTop: 24, width: 150 }}
                    >
                        Press me
                    </ThemedButton>
                </View>
            </Card>
            <Card style={{ padding: 20, margin: 20, marginBottom: 0 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        icon="download"
                        mode="text"
                        onPress={(): void => console.log('Pressed Text Button')}
                        style={{ width: 150 }}
                        disabled
                    >
                        Press me
                    </Button>
                    <ThemedButton
                        icon="download"
                        mode="text"
                        onPress={(): void => console.log('Pressed Text Button')}
                        style={{ width: 150 }}
                        disabled
                    >
                        Press me
                    </ThemedButton>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        icon="download"
                        mode="outlined"
                        onPress={(): void => console.log('Pressed Outlined Button')}
                        style={{ marginTop: 24, width: 150 }}
                        disabled
                    >
                        Press me
                    </Button>
                    <ThemedButton
                        icon="download"
                        mode="outlined"
                        onPress={(): void => console.log('Pressed Outlined Button')}
                        style={{ marginTop: 24, width: 150 }}
                        disabled
                    >
                        Press me
                    </ThemedButton>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Button
                        icon="download"
                        mode="contained"
                        onPress={(): void => console.log('Pressed Contained Button')}
                        style={{ marginTop: 24, width: 150 }}
                        disabled
                    >
                        Press me
                    </Button>
                    <ThemedButton
                        icon="download"
                        mode="contained"
                        onPress={(): void => console.log('Pressed Contained Button')}
                        style={{ marginTop: 24, width: 150 }}
                        disabled
                    >
                        Press me
                    </ThemedButton>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Checkbox (Android)</H5>
                    <View style={{ marginTop: 24 }}>
                        <View style={styles.row}>
                            <Body1 style={{ flex: 1 }}>Init Unchecked</Body1>
                            <Checkbox.Android
                                status={checkboxAndroidOne}
                                onPress={(): void =>
                                    checkboxAndroidOne === 'unchecked'
                                        ? setCheckboxAndroidOne('checked')
                                        : setCheckboxAndroidOne('unchecked')
                                }
                            />
                            <ThemedCheckbox.Android
                                status={checkboxAndroidOne}
                                onPress={(): void =>
                                    checkboxAndroidOne === 'unchecked'
                                        ? setCheckboxAndroidOne('checked')
                                        : setCheckboxAndroidOne('unchecked')
                                }
                            />
                        </View>
                        <View style={styles.row}>
                            <Body1 style={{ flex: 1 }}>Init Checked</Body1>
                            <Checkbox.Android
                                status={checkboxAndroidTwo}
                                onPress={(): void =>
                                    checkboxAndroidTwo === 'unchecked'
                                        ? setCheckboxAndroidTwo('checked')
                                        : setCheckboxAndroidTwo('unchecked')
                                }
                            />
                            <ThemedCheckbox.Android
                                status={checkboxAndroidTwo}
                                onPress={(): void =>
                                    checkboxAndroidTwo === 'unchecked'
                                        ? setCheckboxAndroidTwo('checked')
                                        : setCheckboxAndroidTwo('unchecked')
                                }
                            />
                        </View>
                        <View style={styles.row}>
                            <Body1 style={{ flex: 1 }}>Indeterminate</Body1>
                            <Checkbox.Android status={'indeterminate'} />
                            <ThemedCheckbox.Android status={'indeterminate'} />
                        </View>
                        <View style={styles.row}>
                            <Body1 style={{ flex: 1 }}>Disabled Checked</Body1>
                            <Checkbox.Android status={'checked'} disabled={true} />
                            <ThemedCheckbox.Android status={'checked'} disabled={true} />
                        </View>
                        <View style={styles.row}>
                            <Body1 style={{ flex: 1 }}>Disabled Unchecked</Body1>
                            <Checkbox.Android status={'unchecked'} disabled={true} />
                            <ThemedCheckbox.Android status={'unchecked'} disabled={true} />
                        </View>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Checkbox (iOS)</H5>
                    <View style={{ marginTop: 24 }}>
                        <View style={styles.row}>
                            <Body1 style={{ flex: 1 }}>Init Unchecked</Body1>
                            <Checkbox.IOS
                                status={checkboxIOSOne}
                                onPress={(): void =>
                                    checkboxIOSOne === 'unchecked'
                                        ? setCheckboxIOSOne('checked')
                                        : setCheckboxIOSOne('unchecked')
                                }
                            />
                            <ThemedCheckbox.IOS
                                status={checkboxIOSOne}
                                onPress={(): void =>
                                    checkboxIOSOne === 'unchecked'
                                        ? setCheckboxIOSOne('checked')
                                        : setCheckboxIOSOne('unchecked')
                                }
                            />
                        </View>
                        <View style={styles.row}>
                            <Body1 style={{ flex: 1 }}>Init Checked</Body1>
                            <Checkbox.IOS
                                status={checkboxIOSTwo}
                                onPress={(): void =>
                                    checkboxIOSTwo === 'unchecked'
                                        ? setCheckboxIOSTwo('checked')
                                        : setCheckboxIOSTwo('unchecked')
                                }
                            />
                            <ThemedCheckbox.IOS
                                status={checkboxIOSTwo}
                                onPress={(): void =>
                                    checkboxIOSTwo === 'unchecked'
                                        ? setCheckboxIOSTwo('checked')
                                        : setCheckboxIOSTwo('unchecked')
                                }
                            />
                        </View>
                        <View style={styles.row}>
                            <Body1 style={{ flex: 1 }}>Indeterminate</Body1>
                            <Checkbox.IOS status={'indeterminate'} />
                            <ThemedCheckbox.IOS status={'indeterminate'} />
                        </View>
                        <View style={styles.row}>
                            <Body1 style={{ flex: 1 }}>Disabled Checked</Body1>
                            <Checkbox.IOS status={'checked'} disabled={true} />
                            <ThemedCheckbox.IOS status={'checked'} disabled={true} />
                        </View>
                        <View style={styles.row}>
                            <Body1 style={{ flex: 1 }}>Disabled Unchecked</Body1>
                            <Checkbox.IOS status={'unchecked'} disabled={true} />
                            <ThemedCheckbox.IOS status={'unchecked'} disabled={true} />
                        </View>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Chip</H5>
                    <View style={{ alignItems: 'center', marginTop: 24 }}>
                        <Chip
                            icon="information"
                            style={{
                                width: 250,
                            }}
                        >
                            Unselected Flat Chip
                        </Chip>
                        <Chip
                            icon="information"
                            selected={true}
                            style={{
                                marginTop: 24,
                                width: 250,
                            }}
                        >
                            Selected Flat Chip
                        </Chip>
                        <Chip
                            icon="information"
                            disabled={true}
                            style={{
                                marginTop: 24,
                                width: 250,
                            }}
                        >
                            Disabled Flat Chip
                        </Chip>
                        <Chip icon="information" mode={'outlined'} style={{ marginTop: 24, width: 250 }}>
                            Unselected Outlined Chip
                        </Chip>
                        <Chip
                            icon="information"
                            mode={'outlined'}
                            selected={true}
                            style={{
                                marginTop: 24,
                                width: 250,
                            }}
                        >
                            Selected Outlined Chip
                        </Chip>
                        <Chip
                            icon="information"
                            mode={'outlined'}
                            disabled={true}
                            style={{ marginTop: 24, width: 250 }}
                        >
                            Disabled Outlined Chip
                        </Chip>
                        <ThemedDivider style={{ width: '100%', marginTop: 24 }} />
                        <ThemedChip
                            icon="information"
                            style={{
                                width: 250,
                                marginTop: 24,
                            }}
                            onClose={(): void => {}}
                        >
                            Unselected Flat Chip
                        </ThemedChip>
                        <ThemedChip
                            icon="information"
                            selected={true}
                            style={{
                                marginTop: 24,
                                width: 250,
                            }}
                            onClose={(): void => {}}
                        >
                            Selected Flat Chip
                        </ThemedChip>
                        <ThemedChip
                            icon="information"
                            disabled={true}
                            style={{
                                marginTop: 24,
                                width: 250,
                            }}
                            onClose={(): void => {}}
                        >
                            Disabled Flat Chip
                        </ThemedChip>
                        <ThemedChip icon="information" mode={'outlined'} style={{ marginTop: 24, width: 250 }}>
                            Unselected Outlined Chip
                        </ThemedChip>
                        <ThemedChip
                            icon="information"
                            mode={'outlined'}
                            selected={true}
                            style={{
                                marginTop: 24,
                                width: 250,
                            }}
                            onClose={(): void => {}}
                        >
                            Selected Outlined Chip
                        </ThemedChip>
                        <ThemedChip
                            icon="information"
                            mode={'outlined'}
                            disabled={true}
                            selected
                            style={{ marginTop: 24, width: 250 }}
                        >
                            Disabled Outlined Chip
                        </ThemedChip>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Divider</H5>
                    <View style={{ marginTop: 24 }}>
                        <Body1>Item 1</Body1>
                        <Divider />
                        <Body1>Item 2</Body1>
                        <Divider />
                        <Body1>Item 3</Body1>
                        <Divider />
                        <Body1>Item 1</Body1>
                        <ThemedDivider />
                        <Body1>Item 2</Body1>
                        <ThemedDivider />
                        <Body1>Item 3</Body1>
                        <ThemedDivider />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Fab</H5>
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <FAB
                            style={{ margin: 16, width: 40 }}
                            small
                            icon="plus"
                            onPress={(): void => console.log('Pressed Small Fab')}
                        />
                        <FAB
                            style={{ margin: 16, width: 56 }}
                            icon="plus"
                            onPress={(): void => console.log('Pressed Default Fab')}
                        />
                        <FAB
                            style={{ margin: 16 }}
                            label={'Extended Fab'}
                            icon="check"
                            onPress={(): void => console.log('Pressed Extended Fab')}
                        />
                    </View>
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <ThemedFAB
                            style={{ margin: 16, width: 40 }}
                            small
                            icon="plus"
                            onPress={(): void => console.log('Pressed Small Fab')}
                        />
                        <ThemedFAB
                            style={{ margin: 16, width: 56 }}
                            icon="plus"
                            onPress={(): void => console.log('Pressed Default Fab')}
                        />
                        <ThemedFAB
                            style={{ margin: 16 }}
                            label={'Extended Fab'}
                            icon="check"
                            onPress={(): void => console.log('Pressed Extended Fab')}
                        />
                    </View>
                </View>
                <Portal>
                    <ThemedFAB.Group
                        visible
                        open={open}
                        icon={open ? 'calendar-today' : 'plus'}
                        actions={[
                            { icon: 'plus', onPress: (): void => console.log('Pressed add') },
                            {
                                icon: 'star',
                                label: 'Star',
                                onPress: (): void => console.log('Pressed star'),
                            },
                            {
                                icon: 'email',
                                label: 'Email',
                                onPress: (): void => console.log('Pressed email'),
                            },
                            {
                                icon: 'bell',
                                label: 'Remind',
                                onPress: (): void => console.log('Pressed notifications'),
                                small: false,
                            },
                        ]}
                        onStateChange={onStateChange}
                        onPress={(): void => {
                            if (open) {
                                // do something if the speed dial is open
                            }
                        }}
                    />
                </Portal>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Progress Bar</H5>
                    <View style={{ marginTop: 24 }}>
                        <ProgressBar progress={0} />
                        <ProgressBar progress={0.5} style={{ marginTop: 24 }} />
                        <ProgressBar progress={1.0} style={{ marginTop: 24 }} />
                        <ProgressBar indeterminate style={{ marginTop: 24 }} />
                        <ThemedProgressBar progress={0} style={{ marginTop: 24 }} />
                        <ThemedProgressBar progress={0.5} style={{ marginTop: 24 }} />
                        <ThemedProgressBar progress={1.0} style={{ marginTop: 24 }} />
                        <ThemedProgressBar indeterminate style={{ marginTop: 24 }} />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Radio Button (Android)</H5>
                    <View style={{ marginTop: 24 }}>
                        <RadioButton.Group
                            onValueChange={(value: string): void => setRadioButtonAndroidValue(value)}
                            value={radioButtonAndroidValue}
                        >
                            <View style={styles.row}>
                                <Body1 style={{ flex: 1 }}>First Item</Body1>
                                <RadioButton.Android value="first" />
                            </View>
                            <View style={styles.row}>
                                <Body1 style={{ flex: 1 }}>Second Item</Body1>
                                <RadioButton.Android value="second" />
                            </View>
                            <View style={styles.row}>
                                <Body1 style={{ flex: 1 }}>Third Item</Body1>
                                <RadioButton.Android value="third" />
                            </View>
                        </RadioButton.Group>
                        <ThemedRadioButton.Group
                            onValueChange={(value: string): void => setRadioButtonAndroidValue(value)}
                            value={radioButtonAndroidValue}
                        >
                            <View style={styles.row}>
                                <Body1 style={{ flex: 1 }}>First Item</Body1>
                                <ThemedRadioButton.Android value="first" />
                            </View>
                            <View style={styles.row}>
                                <Body1 style={{ flex: 1 }}>Second Item</Body1>
                                <ThemedRadioButton.Android value="second" />
                            </View>
                            <View style={styles.row}>
                                <Body1 style={{ flex: 1 }}>Third Item</Body1>
                                <ThemedRadioButton.Android value="third" />
                            </View>
                        </ThemedRadioButton.Group>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Radio Button (iOS)</H5>
                    <View style={{ marginTop: 24 }}>
                        <RadioButton.Group
                            onValueChange={(value: string): void => setRadioButtonIOSValue(value)}
                            value={radioButtonIOSValue}
                        >
                            <View style={styles.row}>
                                <Body1 style={{ flex: 1 }}>First Item</Body1>
                                <RadioButton.IOS value="first" />
                            </View>
                            <View style={styles.row}>
                                <Body1 style={{ flex: 1 }}>Second Item</Body1>
                                <RadioButton.IOS value="second" />
                            </View>
                            <View style={styles.row}>
                                <Body1 style={{ flex: 1 }}>Third Item</Body1>
                                <RadioButton.IOS value="third" />
                            </View>
                        </RadioButton.Group>
                        <ThemedRadioButton.Group
                            onValueChange={(value: string): void => setRadioButtonIOSValue(value)}
                            value={radioButtonIOSValue}
                        >
                            <View style={styles.row}>
                                <Body1 style={{ flex: 1 }}>First Item</Body1>
                                <ThemedRadioButton.IOS value="first" />
                            </View>
                            <View style={styles.row}>
                                <Body1 style={{ flex: 1 }}>Second Item</Body1>
                                <ThemedRadioButton.IOS value="second" />
                            </View>
                            <View style={styles.row}>
                                <Body1 style={{ flex: 1 }}>Third Item</Body1>
                                <ThemedRadioButton.IOS value="third" />
                            </View>
                        </ThemedRadioButton.Group>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Snackbar</H5>
                    <View style={{ marginTop: 24 }}>
                        <Portal>
                            <Snackbar
                                visible={snackbarVisible}
                                onDismiss={(): void => setSnackbarVisible(false)}
                                action={{
                                    label: 'Dismiss',
                                    onPress: (): void => {
                                        setSnackbarVisible(false);
                                    },
                                }}
                            >
                                Hey there! I&apos;m a Snackbar.
                            </Snackbar>
                        </Portal>
                        <ThemedButton mode={'contained'} onPress={(): void => setSnackbarVisible(!snackbarVisible)}>
                            {snackbarVisible ? 'Hide Snackbar' : 'Show Snackbar'}
                        </ThemedButton>
                    </View>
                </View>
            </Card>
            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Snackbar</H5>
                    <View style={{ marginTop: 24 }}>
                        <Portal>
                            <ThemedSnackbar
                                visible={snackbarTwoVisible}
                                onDismiss={(): void => setSnackbarTwoVisible(false)}
                                action={{
                                    label: 'Dismissy',
                                    onPress: (): void => {
                                        setSnackbarTwoVisible(false);
                                    },
                                }}
                            >
                                Hey there! I&apos;m a Snackbar.
                            </ThemedSnackbar>
                        </Portal>
                        <ThemedButton mode={'contained'} onPress={(): void => setSnackbarTwoVisible(!snackbarVisible)}>
                            {snackbarTwoVisible ? 'Hide Snackbar' : 'Show Snackbar'}
                        </ThemedButton>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Switch</H5>
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <View style={styles.row}>
                            <Body1 style={{ flex: 1 }}>Enabled - On</Body1>
                            <Switch
                                value={true}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                            />
                            <ThemedSwitch
                                value={true}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                                style={{ marginLeft: 8 }}
                            />
                        </View>
                        <View style={[styles.row, { marginTop: 24 }]}>
                            <Body1 style={{ flex: 1 }}>Enabled - Off</Body1>
                            <Switch
                                value={false}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                            />
                            <ThemedSwitch
                                value={false}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                                style={{ marginLeft: 8 }}
                            />
                        </View>
                        <View style={[styles.row, { marginTop: 24 }]}>
                            <Body1 style={{ flex: 1 }}>Disabled - On</Body1>
                            <Switch disabled value={true} />
                            <ThemedSwitch
                                value={true}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                                disabled
                                style={{ marginLeft: 8 }}
                            />
                        </View>
                        <View style={[styles.row, { marginTop: 24 }]}>
                            <Body1 style={{ flex: 1 }}>Disabled - Off</Body1>
                            <Switch disabled value={false} />
                            <ThemedSwitch
                                value={false}
                                onValueChange={(): void => {
                                    setIsSwitchOn(!isSwitchOn);
                                }}
                                disabled
                                style={{ marginLeft: 8 }}
                            />
                        </View>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Text Input</H5>
                    <View style={{ marginTop: 24 }}>
                        <TextInput
                            label="Name"
                            value={nameInputText}
                            onChangeText={(text: string): void => setNameInputText(text)}
                        />
                        <TextInput
                            label="Email"
                            mode="outlined"
                            style={{ marginTop: 24 }}
                            value={emailInputText}
                            onChangeText={(text: string): void => setEmailInputText(text)}
                        />
                        <TextInput
                            label="Name Error"
                            style={{ marginTop: 24 }}
                            value={errorNameInputText}
                            onChangeText={(text: string): void => setErrorNameInputText(text)}
                            error
                        />
                        <TextInput
                            label="Email Error"
                            mode="outlined"
                            style={{ marginTop: 24 }}
                            value={errorEmailInputText}
                            onChangeText={(text: string): void => setErrorEmailInputText(text)}
                            error
                        />
                        <TextInput label="Name Disabled" value="John Smith" style={{ marginTop: 24 }} disabled />
                        <TextInput
                            label="Email Disabled"
                            mode="outlined"
                            value="j.smith@email.com"
                            style={{ marginTop: 24 }}
                            disabled
                        />
                        <Divider style={{ marginTop: 24, marginHorizontal: -24, backgroundColor: 'cyan' }} />
                        <ThemedTextInput
                            label="Name"
                            style={{ marginTop: 24 }}
                            value={nameInputText}
                            onChangeText={(text: string): void => setNameInputText(text)}
                        />
                        <ThemedTextInput
                            label="Email"
                            mode="outlined"
                            style={{ marginTop: 24 }}
                            value={emailInputText}
                            onChangeText={(text: string): void => setEmailInputText(text)}
                        />
                        <ThemedTextInput
                            label="Name Error"
                            style={{ marginTop: 24 }}
                            value={errorNameInputText}
                            onChangeText={(text: string): void => setErrorNameInputText(text)}
                            error
                        />
                        <ThemedTextInput
                            label="Email Error"
                            mode="outlined"
                            style={{ marginTop: 24 }}
                            value={errorEmailInputText}
                            onChangeText={(text: string): void => setErrorEmailInputText(text)}
                            error
                        />
                        <ThemedTextInput label="Name Disabled" value="John Smith" style={{ marginTop: 24 }} disabled />
                        <ThemedTextInput
                            label="Email Disabled"
                            mode="outlined"
                            value="j.smith@email.com"
                            style={{ marginTop: 24 }}
                            disabled
                        />
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <View style={{ justifyContent: 'center', marginHorizontal: 24, marginVertical: 24 }}>
                    <H5>Toggle Button</H5>
                    <View style={{ marginTop: 24, alignItems: 'center' }}>
                        <ToggleButton.Row
                            onValueChange={(value: string): void => setToggleButtonValue(value)}
                            value={toggleButtonValue}
                        >
                            <ToggleButton icon="format-align-left" value="left" />
                            <ToggleButton icon="format-align-center" value="center" />
                            <ToggleButton icon="format-align-right" value="right" />
                        </ToggleButton.Row>
                        <ThemedToggleButton.Row
                            onValueChange={(value: string): void => setToggleButtonValue(value)}
                            value={toggleButtonValue}
                        >
                            <ThemedToggleButton icon="format-align-left" value="left" />
                            <ThemedToggleButton icon="format-align-center" value="center" />
                            <ThemedToggleButton icon="format-align-right" value="right" />
                        </ThemedToggleButton.Row>
                    </View>
                </View>
            </Card>
        </>
    );
};
