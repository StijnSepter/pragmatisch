import React from "react";
import { useLanguage } from "../context/LanguageContext";

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as any)}
    >
      <option value="nl">🇳🇱 Nederlands</option>
      <option value="en">🇬🇧 English</option>
    </select>
  );
};

export default LanguageSwitcher;
