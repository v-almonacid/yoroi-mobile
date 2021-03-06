// @flow

import React from 'react'
import {Button} from '../UiKit'
import {createStackNavigator} from 'react-navigation'
import SendScreen from './SendScreen'
import ConfirmScreen from './ConfirmScreen'
import AddressReaderQR from './AddressReaderQR'
import BiometricAuthScreen from './BiometricAuthScreen'
import iconQR from '../../assets/img/qr_code.png'

import HeaderBackButton from '../UiKit/HeaderBackButton'
import {
  defaultNavigationOptions,
  defaultStackNavigatorOptions,
} from '../../navigationOptions'

import {SEND_ROUTES} from '../../RoutesList'

import styles from './styles/QrButton.style'

const SendScreenNavigator = createStackNavigator(
  {
    [SEND_ROUTES.MAIN]: {
      screen: SendScreen,
      navigationOptions: ({navigation}) => ({
        title: navigation.getParam('title'),
        headerRight: (
          <Button
            style={styles.qrButton}
            onPress={() =>
              navigation.navigate(SEND_ROUTES.ADDRESS_READER_QR, {
                onSuccess: (address) => {
                  const handler = navigation.getParam('onScanAddress')
                  handler && handler(address)
                  navigation.navigate(SEND_ROUTES.MAIN)
                },
              })
            }
            iconImage={iconQR}
            title=""
            withoutBackground
          />
        ),
        ...defaultNavigationOptions,
      }),
    },
    [SEND_ROUTES.ADDRESS_READER_QR]: AddressReaderQR,
    [SEND_ROUTES.CONFIRM]: ConfirmScreen,
    [SEND_ROUTES.BIOMETRICS_SIGNING]: {
      screen: BiometricAuthScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: SEND_ROUTES.MAIN,
    navigationOptions: ({navigation}) => ({
      title: navigation.getParam('title'),
      headerLeft: <HeaderBackButton navigation={navigation} />,
      ...defaultNavigationOptions,
    }),
    ...defaultStackNavigatorOptions,
  },
)

export default SendScreenNavigator
