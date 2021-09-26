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
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
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
