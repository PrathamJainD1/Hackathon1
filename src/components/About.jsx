import { useLanguage } from "../context/LanguageContext";
import AnimatedSection from "./AnimatedSection";

export default function About() {
  const { t } = useLanguage();

  return (
    <AnimatedSection>
      <section className="p-10 text-center text-white">
        <h2 className="text-3xl mb-4 text-green-400 drop-shadow-lg">
          {t("about")}
        </h2>
        <p className="text-lg opacity-80">{t("welcome")}</p>
      </section>
    </AnimatedSection>
  );
}
