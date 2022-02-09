import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";

interface localizedPage {
  t: typeof translations["en"];
}

const Home: NextPage<localizedPage> = () => {
  const { t, lang } = useTranslation("common");

  return (
    <div>
      <h1>{t("title")}</h1>
    </div>
  );
};

export default Home;

export function getStaticProps({ locale }: { locale: "en" | "pt" }) {
  return {
    props: {
      t: translations[locale],
    },
  };
}

const translations = {
  en: {
    title: "Hello",
  },
  pt: {
    title: "olar",
  },
} as const;
