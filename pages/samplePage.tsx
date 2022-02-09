import type { NextPage } from "next";
interface localizedPage {
  t: typeof translations["en"];
  locale: "en" | "pt";
}

const Page: NextPage<localizedPage> = ({ t, locale }) => {
  return (
    <div>
      <h1>{t.title}</h1>
    </div>
  );
};

export default Page;

export async function getStaticProps({ locale }: { locale: "en" | "pt" }) {
  return {
    props: {
      t: translations[locale],
      locale,
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
