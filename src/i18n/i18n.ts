import { Scope, TranslateOptions, I18n } from 'i18n-js';
import * as en from './en.json';
import * as vi from './vi.json';
const i18n = new I18n();
i18n.locale = 'en';
i18n.translations = { en };
i18n.missingTranslation.register('empty', (i18n, scope, options) =>
  i18n.translate('GLOBAL.MISSING_TRANSLATE')
);

export interface Options extends TranslateOptions {
  warning?: boolean;
  appName?: string;
  key?: string;
}

export const translate = (scope: Scope, options?: Options) => {
  let header = '';
  if (options && options.warning) {
    header = i18n.t('ERROR.WARNING_SYMBOL');
  }
  if (options && options.key) {
    scope = `${options.key}.${scope}`;
  }
  return `${header}${i18n.translate(scope, {
    ...options,
    appName: options?.appName || 'Mobile',
  })}`;
};

i18n.t = translate;

export const setI18nConfig = async (lang: string) => {
  switch (lang) {
    case 'en':
      i18n.translations = { en };
      break;
    case 'vi':
      i18n.translations = { vi };
      break;
    default: {
      i18n.translations = { en };
      break;
    }
  }
  i18n.locale = lang || 'en';
};

export default i18n;
