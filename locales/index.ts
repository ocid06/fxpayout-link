import { en } from './en';
import { id } from './id';
import { ar } from './ar';
import { ru } from './ru';
import { zh } from './zh';

export const translations = {
  en,
  id,
  ar,
  ru,
  zh,
} as const;

export type Locale = keyof typeof translations;
