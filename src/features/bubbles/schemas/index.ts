import { TranslationKey } from '@constants/translations';

import * as yup from 'yup';

type Translate = (key: TranslationKey) => string;

export const createBubblesCountSchema = (t: Translate) =>
  yup.object({
    count: yup
      .string()
      .required(t('bubbles.errorRange'))
      .matches(/^\d+$/, t('bubbles.errorRange'))
      .test('range', t('bubbles.errorRange'), (value?: string) => {
        if (!value) {
          return false;
        }
        const parsed = Number(value);
        return Number.isInteger(parsed) && parsed >= 1 && parsed <= 20;
      }),
  });

