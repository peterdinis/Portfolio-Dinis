import React from "react";

const lngs = {
  en: { nativeName: "English" },
  sk: { nativeName: "Slovak" },
};

function LanguageChange() {
  const {i18n } = useTranslation();

  return (
    <div>
      {Object.keys(lngs).map((lng) => (
        <button
          key={lng}
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
          }}
          type="submit"
          onClick={() => {
            i18n.changeLanguage(lng);
          }}
        >
          {lngs[lng].nativeName}
        </button>
      ))}
    </div>
  );
}

export default LanguageChange;
