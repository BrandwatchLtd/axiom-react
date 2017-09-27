import en from './en/common.json';
import de from './de/common.json';
import es from './es/common.json';
import fr from './fr/common.json';

const languageFileMap = {
  de,
  en,
  es,
  fr,
};


export const translate = (axiomLanguage = 'en', textId) => {
  return languageFileMap[axiomLanguage][textId] || textId;
};
