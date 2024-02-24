import { Select } from "antd";
import { useTranslation } from "react-i18next";

export const LanguagePicker = () => {
  const { i18n } = useTranslation();
  return (
    <Select
      defaultValue={"ru"}
      size="large"
      options={[
        { value: "en", label: "EN" },
        { value: "ru", label: "RU" },
      ]}
      onSelect={(language) => i18n.changeLanguage(language)}
    />
  );
};
