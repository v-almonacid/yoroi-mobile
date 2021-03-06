// @flow
import React from 'react'
import {createStackNavigator} from 'react-navigation'

import LanguagePickerScreen from './LanguagePickerScreen'
import HeaderBackButton from '../UiKit/HeaderBackButton'
import {
  defaultNavigationOptions,
  defaultStackNavigatorOptions,
} from '../../navigationOptions'
import {FIRST_RUN_ROUTES} from '../../RoutesList'
import AcceptTermsOfServiceScreen from './AcceptTermsOfServiceScreen'
import CustomPinScreen from './CustomPinScreen'

const WalletInitNavigator = createStackNavigator(
  {
    [FIRST_RUN_ROUTES.LANGUAGE]: {
      screen: LanguagePickerScreen,
      navigationOptions: {
        header: null,
      },
    },
    [FIRST_RUN_ROUTES.ACCEPT_TERMS_OF_SERVICE]: AcceptTermsOfServiceScreen,
    [FIRST_RUN_ROUTES.CUSTOM_PIN]: {
      screen: CustomPinScreen,
      navigationOptions: {
        header: null,
      },
    },
  },
  {
    initialRouteName: FIRST_RUN_ROUTES.LANGUAGE,
    navigationOptions: ({navigation}) => ({
      title: navigation.getParam('title'),
      headerLeft: <HeaderBackButton navigation={navigation} />,
      ...defaultNavigationOptions,
    }),
    cardStyle: {
      backgroundColor: 'transparent',
    },
    ...defaultStackNavigatorOptions,
  },
)

export default WalletInitNavigator
