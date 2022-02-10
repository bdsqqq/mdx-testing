import type { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";

import commonNamespace from "../locales/en/common";

// This solution works but it gives me paths that are not leaves.
// From https://dev.to/pffigueiredo/typescript-utility-keyof-nested-object-2pa3
type NestedKeyOf<ObjectType extends object> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

// This solution is more robust and gives me more options
// From https://ostack.cn/qa/?qa=416461/
type Cons<H, T> = T extends readonly any[]
  ? ((h: H, ...t: T) => void) extends (...r: infer R) => void
    ? R
    : never
  : never;

type Prev = [
  never,
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  ...0[]
];

// type NestedObjectPaths = "a" | "b" | "nest" | "otherNest" | "nest.c" | "otherNest.c"
type Paths<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? {
      [K in keyof T]-?: K extends string | number
        ? `${K}` | Join<K, Paths<T[K], Prev[D]>>
        : never;
    }[keyof T]
  : "";

type Join<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}${"" extends P ? "" : "."}${P}`
    : never
  : never;
// type NestedObjectLeaves = "a" | "b" | "nest.c" | "otherNest.c"
type Leaves<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: Join<K, Leaves<T[K], Prev[D]>> }[keyof T]
  : "";

const Home: NextPage = () => {
  const commonTranslation = useTranslation("common");
  const t = (translationKey: Leaves<typeof commonNamespace>) => {
    return commonTranslation.t(translationKey);
  };

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
