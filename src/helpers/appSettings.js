// @flow
import ExtendableError from 'es6-error'
import loadLocalResource from 'react-native-local-resource'
import _ from 'lodash'

import storage from '../utils/storage'

import EN_US_TOS from '../i18n/locales/terms-of-use/ada/en-US.md'
import JA_JP_TOS from '../i18n/locales/terms-of-use/ada/ja-JP.md'
import KO_KR_TOS from '../i18n/locales/terms-of-use/ada/ko-KR.md'
import RU_RU_TOS from '../i18n/locales/terms-of-use/ada/ru-RU.md'

const tosByCode = {
  'en-US': EN_US_TOS,
  'ja-JP': JA_JP_TOS,
  'ko-KR': KO_KR_TOS,
  'ru-RU': RU_RU_TOS,
}

// Note(ppershing): following values have to be in sync with
// keys in redux state
export const APP_SETTINGS_KEYS = {
  INSTALLATION_ID: 'installationId',
  CUSTOM_PIN_HASH: 'customPinHash',
  ACCEPTED_TOS: 'acceptedTos',
  LANG: 'languageCode',
  SYSTEM_AUTH_ENABLED: 'isSystemAuthEnabled',
  BIOMETRIC_HW_SUPPORT: 'isBiometricHardwareSupported',
  SEND_CRASH_REPORTS: 'sendCrashReports',
  CAN_ENABLE_BIOMETRIC_ENCRYPTION: 'canEnableBiometricEncryption',
}

export type AppSettingsKey = $Values<typeof APP_SETTINGS_KEYS>

// thrown when app settings is missing
export class AppSettingsError extends ExtendableError {
  constructor(key: AppSettingsKey) {
    super(`Application setting ${key} is missing.`)
  }
}

const getAppSettingsStoragePath = (key: AppSettingsKey) => `/appSettings/${key}`

export const writeAppSettings = (setting: AppSettingsKey, value: any) => {
  const appSettingsKey = getAppSettingsStoragePath(setting)
  return storage.write(appSettingsKey, value)
}

export const removeAppSettings = async (setting: AppSettingsKey) => {
  await storage.remove(getAppSettingsStoragePath(setting))
}

export const readAppSettings = async () => {
  const appSettingsKeys = Object.keys(APP_SETTINGS_KEYS).map((key) =>
    getAppSettingsStoragePath(APP_SETTINGS_KEYS[key]),
  )

  const appSettings = await storage.readMany(appSettingsKeys)
  return appSettings.reduce((acc, [key, value]) => {
    const setting = _.last(key.split('/'))
    return {...acc, [setting]: value}
  }, {})
}

export const loadTOS = async (languageCode: string) => {
  const tosFile = tosByCode[languageCode]
  const tos = await loadLocalResource(tosFile)
  return tos
}
