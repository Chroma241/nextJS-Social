import { useTranslation } from "../i18n";
import { Header } from "./components/Header";
import { LanguageSwitcher } from "./components/languageSwitcher";
import MainContent from "./components/MainContent";


export default async function Home({ params: { lng } }: Readonly<{ params: { lng: string } }>) {

  return (
    <main className="mx-auto">
      <Header lng={lng} />
       <MainContent lng={lng}/>
      {/* <LanguageSwitcher lng={lng} />
      <h1>{t('title')}</h1>
      <Link href={`/${lng}/blog`}>{t('to-blog')}</Link> */}
      
    </main>

  );
}
