import type { NextPage } from "next";
interface localizedPage {
  t: typeof translations["en"];
}

const Home: NextPage<localizedPage> = ({ t }) => {
  return (
    <div>
      <h1>{t.title}</h1>
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
