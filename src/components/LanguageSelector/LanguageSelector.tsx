import { useState } from "react";
import { availableLanguages, I8nLanguage } from "../../utils/i8n/i8n";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import { setLanguageActionCreator } from "../../store/i8n/i8nSlice";
import LanguageSelectorStyled from "./LanguageSelectorStyled";

const LanguageSelector = (): JSX.Element => {
  const { language } = useAppSelector((state: RootState) => state.i8n);
  const { isLoading } = useAppSelector((state: RootState) => state.ui);
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const currentLanguage = availableLanguages.find(
    (availableLanguage) => availableLanguage[language] !== undefined
  );

  let currrentFlag: string = "";
  if (currentLanguage) {
    currrentFlag = currentLanguage[language] ?? "";
  } else {
  }
  const languagesButtons = availableLanguages.map((languageObj) => {
    const key = Object.keys(languageObj)[0] as I8nLanguage;
    const value = languageObj[key];

    return (
      <li key={key}>
        <button
          onClick={() => {
            dispatch(setLanguageActionCreator(key));
            setIsOpen(false);
          }}
          className={`languages-button ${
            key === language ? "languages-button--current" : ""
          }  `}
        >
          <img
            src={value}
            alt={`${key}`}
            height={25}
            className="language-flag"
          />
        </button>
      </li>
    );
  });

  return (
    <LanguageSelectorStyled>
      {isOpen && !isLoading ? (
        <ul className="header__languages">
          <li key="close button">
            <button
              className="languages-button"
              data-tooltip={"CANCEL"}
              onClick={() => setIsOpen(false)}
            >
              X
            </button>
          </li>
          {languagesButtons}
        </ul>
      ) : (
        <button
          className="select-language-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img
            src={currrentFlag}
            alt={currrentFlag}
            height={25}
            className="language-flag"
          />
        </button>
      )}
    </LanguageSelectorStyled>
  );
};

export default LanguageSelector;
