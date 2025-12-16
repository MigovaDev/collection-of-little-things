import { fallbackLanguage,Language } from '@constants/languages';

type TranslationKey =
  | 'landing.title'
  | 'landing.goToBiometrics'
  | 'landing.goToThemes'
  | 'landing.goToLanguages'
  | 'landing.goToBubbles'
  | 'themes.title'
  | 'themes.dark'
  | 'themes.light'
  | 'themes.toxic'
  | 'themes.selected'
  | 'home.welcome'
  | 'home.subtitle'
  | 'home.description'
  | 'home.logout'
  | 'home.logoutConfirm'
  | 'common.cancel'
  | 'password.headerWithBiometry'
  | 'password.headerWithoutBiometry'
  | 'password.sos'
  | 'password.delete'
  | 'password.incorrectPasscode'
  | 'password.biometricTitle'
  | 'password.biometricNotAvailable'
  | 'password.biometricPrompt'
  | 'password.biometricFailedTitle'
  | 'password.biometricFailedMessage'
  | 'password.errorTitle'
  | 'password.errorMessage'
  | 'languages.title'
  | 'languages.russian'
  | 'languages.english'
  | 'languages.german'
  | 'languages.selected'
  | 'bubbles.countTitle'
  | 'bubbles.countDescription'
  | 'bubbles.start'
  | 'bubbles.playTitle'
  | 'bubbles.congrats'
  | 'bubbles.errorRange'
  | 'bubbles.backToHome';

type TranslationDictionary = Record<TranslationKey, string>;

export const translations: Record<Language, TranslationDictionary> = {
  [Language.En]: {
    'landing.title': 'Collection of little things',
    'landing.goToBiometrics': 'Go to biometrics',
    'landing.goToThemes': 'Go to themes',
    'landing.goToLanguages': 'Go to languages',
    'landing.goToBubbles': 'Go to bubbles',

    'themes.title': 'Choose Theme',
    'themes.dark': 'Dark',
    'themes.light': 'Light',
    'themes.toxic': 'Toxic',
    'themes.selected': 'Selected',

    'home.welcome': 'Welcome!',
    'home.subtitle': 'You have successfully authenticated using biometric authentication.',
    'home.description':
      'You are now in the secure area of the app. Your biometric authentication was successful and you can access all features.',
    'home.logout': 'Logout',
    'home.logoutConfirm': 'Are you sure you want to logout?',
    'common.cancel': 'Cancel',

    'password.headerWithBiometry': 'Swipe up for {{biometryType}} or \n Enter Passcode',
    'password.headerWithoutBiometry': 'Enter Passcode',
    'password.sos': 'SOS',
    'password.delete': 'Delete',
    'password.incorrectPasscode': 'Incorrect Passcode',
    'password.biometricTitle': 'Biometric Authentication',
    'password.biometricNotAvailable': 'Biometric authentication is not available on this device.',
    'password.biometricPrompt': 'Authenticate',
    'password.biometricFailedTitle': 'Authentication Failed',
    'password.biometricFailedMessage':
      'Biometric authentication was cancelled or failed.',
    'password.errorTitle': 'Error',
    'password.errorMessage': 'An error occurred during authentication.',

    'languages.title': 'Languages',
    'languages.russian': 'Russian',
    'languages.english': 'English',
    'languages.german': 'German',
    'languages.selected': 'Selected',
    'bubbles.countTitle': 'Enter the number of bubbles',
    'bubbles.countDescription': 'The value must be in the range from 1 to 20.',
    'bubbles.start': 'Start popping',
    'bubbles.playTitle': 'Bubbles',
    'bubbles.congrats': 'Congratulations, you are the bubble popping champion!',
    'bubbles.errorRange': 'Please enter a whole number from 1 to 20.',
    'bubbles.backToHome': 'Back to home',
  },
  [Language.Ru]: {
    'landing.title': 'Collection of little things',
    'landing.goToBiometrics': 'Перейти к биометрии',
    'landing.goToThemes': 'Перейти к темам',
    'landing.goToLanguages': 'Выбрать язык',
    'landing.goToBubbles': 'Перейти к пузырям',

    'themes.title': 'Выберите тему',
    'themes.dark': 'Тёмная',
    'themes.light': 'Светлая',
    'themes.toxic': 'Токсичная',
    'themes.selected': 'Выбрано',

    'home.welcome': 'Добро пожаловать!',
    'home.subtitle': 'Вы успешно прошли биометрическую аутентификацию.',
    'home.description':
      'Вы находитесь в защищённой зоне приложения. Биометрическая аутентификация прошла успешно, и вам доступны все функции.',
    'home.logout': 'Выйти',
    'home.logoutConfirm': 'Вы уверены, что хотите выйти?',
    'common.cancel': 'Отмена',

    'password.headerWithBiometry': 'Свайпните вверх для {{biometryType}} или \n введите код',
    'password.headerWithoutBiometry': 'Введите код',
    'password.sos': 'SOS',
    'password.delete': 'Удалить',
    'password.incorrectPasscode': 'Неверный код',
    'password.biometricTitle': 'Биометрическая аутентификация',
    'password.biometricNotAvailable': 'Биометрическая аутентификация недоступна на этом устройстве.',
    'password.biometricPrompt': 'Авторизоваться',
    'password.biometricFailedTitle': 'Ошибка аутентификации',
    'password.biometricFailedMessage':
      'Биометрическая аутентификация была отменена или завершилась неуспешно.',
    'password.errorTitle': 'Ошибка',
    'password.errorMessage': 'Произошла ошибка во время аутентификации.',

    'languages.title': 'Языки',
    'languages.russian': 'Русский',
    'languages.english': 'Английский',
    'languages.german': 'Немецкий',
    'languages.selected': 'Выбран',
    'bubbles.countTitle': 'Введите количество пузырей',
    'bubbles.countDescription': 'Значение должно быть в диапазоне от 1 до 20.',
    'bubbles.start': 'Начать лопать',
    'bubbles.playTitle': 'Пузыри',
    'bubbles.congrats': 'Поздравляю, вы чемпион по лопанью пузырей',
    'bubbles.errorRange': 'Введите целое число от 1 до 20.',
    'bubbles.backToHome': 'Вернуться на главную',
  },
  [Language.De]: {
    'landing.title': 'Collection of little things',
    'landing.goToBiometrics': 'Zu Biometrie',
    'landing.goToThemes': 'Zu Themes',
    'landing.goToLanguages': 'Sprache wählen',
    'landing.goToBubbles': 'Zu Bubbles',

    'themes.title': 'Theme wählen',
    'themes.dark': 'Dunkel',
    'themes.light': 'Hell',
    'themes.toxic': 'Toxic',
    'themes.selected': 'Ausgewählt',

    'home.welcome': 'Willkommen!',
    'home.subtitle': 'Sie haben sich erfolgreich biometrisch authentifiziert.',
    'home.description':
      'Sie befinden sich nun im sicheren Bereich der App. Die biometrische Authentifizierung war erfolgreich und Sie haben Zugriff auf alle Funktionen.',
    'home.logout': 'Abmelden',
    'home.logoutConfirm': 'Sind Sie sicher, dass Sie sich abmelden möchten?',
    'common.cancel': 'Abbrechen',

    'password.headerWithBiometry': 'Wischen Sie nach oben für {{biometryType}} oder \n geben Sie den Code ein',
    'password.headerWithoutBiometry': 'Code eingeben',
    'password.sos': 'SOS',
    'password.delete': 'Löschen',
    'password.incorrectPasscode': 'Falscher Code',
    'password.biometricTitle': 'Biometrische Authentifizierung',
    'password.biometricNotAvailable':
      'Biometrische Authentifizierung ist auf diesem Gerät nicht verfügbar.',
    'password.biometricPrompt': 'Authentifizieren',
    'password.biometricFailedTitle': 'Authentifizierung fehlgeschlagen',
    'password.biometricFailedMessage':
      'Die biometrische Authentifizierung wurde abgebrochen oder ist fehlgeschlagen.',
    'password.errorTitle': 'Fehler',
    'password.errorMessage': 'Während der Authentifizierung ist ein Fehler aufgetreten.',

    'languages.title': 'Sprachen',
    'languages.russian': 'Russisch',
    'languages.english': 'Englisch',
    'languages.german': 'Deutsch',
    'languages.selected': 'Ausgewählt',

    'bubbles.countTitle': 'Geben Sie die Anzahl der Blasen ein',
    'bubbles.countDescription': 'Der Wert muss im Bereich von 1 bis 20 liegen.',
    'bubbles.start': 'Los geht\'s',
    'bubbles.playTitle': 'Bubbles',
    'bubbles.congrats': 'Glückwunsch, du bist der Champion im Blasenplatzen!',
    'bubbles.errorRange': 'Bitte gib eine ganze Zahl von 1 bis 20 ein.',
    'bubbles.backToHome': 'Zurück zum Start',
  },
};

export type { TranslationKey };

export const translate = (
  language: Language,
  key: TranslationKey,
  params?: Record<string, string | number>,
) => {
  const dict = translations[language] ?? translations[fallbackLanguage];
  const template = dict[key] ?? translations[fallbackLanguage][key] ?? key;

  if (!params) {
    return template;
  }

  return template.replace(/\{\{(\w+)\}\}/g, (_match, paramKey) => {
    const value = params[paramKey];
    return value !== undefined ? String(value) : '';
  });
};


