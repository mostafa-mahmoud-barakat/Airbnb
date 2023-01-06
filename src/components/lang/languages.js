import React from "react";
import i18next from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import cookies from "js-cookie";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { BsGlobe } from "react-icons/bs";
export const languages = [
  {
    code: "en",
    name: "English",
    country_code: " (USD)",
  },
  {
    code: "ar",
    name: "العربية",
    dir: "rtl",
    country_code: " (EG)",
  },
];
const currentLanguageCode = cookies.get("i18next") || "en";
const currentLanguage = languages.find((l) => l.code === currentLanguageCode);

export default function Langs() {
  
  return (
    <>
      <div className="dropdown">
        <button
          className="border-0 bg-transparent  dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <BsGlobe size={22} />{" "}
          <a>
            {" "}
            {currentLanguage.name}
            {currentLanguage.country_code}{" "}
          </a>
          {/* Dropdown button */}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {languages.map(({ code, name, country_code }) => (
            <li key={country_code}>
              <a
                href={""}
                className={classNames("dropdown-item", {
                  disabled: currentLanguageCode === code,
                })}
                onClick={() => {
                  i18next.changeLanguage(code);
                }}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export function LangIcone() {

  return (
    <>
      <div className="dropdown">
        <button
          className="border-0 bg-transparent  dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
      
          <BsGlobe size={24} />
          {/* Dropdown button */}
        </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {languages.map(({ code, name, country_code }) => (
            <li key={country_code}>
              <a
                href={""}
                className={classNames("dropdown-item", {
                  disabled: currentLanguageCode === code,
                })}
                onClick={() => {
                  i18next.changeLanguage(code);
                }}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
