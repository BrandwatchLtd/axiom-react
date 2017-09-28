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


export default (axiomLanguage = 'en', textId) => {
  if (!languageFileMap[axiomLanguage]) {
    axiomLanguage = axiomLanguage.split(/[^A-Za-z]/)[0];
  }

  if (!languageFileMap[axiomLanguage]) {
    axiomLanguage = 'en';
  }

  return languageFileMap[axiomLanguage][textId] || textId;
};
