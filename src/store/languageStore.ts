import { Language } from '@constants/languages';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

type LanguageState = {
  language: Language;
  setLanguage: (language: Language) => void;
};

export const useLanguageStore = create<LanguageState>()(
  persist(
    set => ({
      language: Language.En,
      setLanguage: (language: Language) => set({ language }),
    }),
    {
      name: 'language-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);


