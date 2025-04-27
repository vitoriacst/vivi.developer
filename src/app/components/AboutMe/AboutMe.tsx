import { Wand } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Contact } from '../Contact/Contact';

export default function AboutMe() {
  const { t } = useTranslation('common');

  return (
    <section className="flex flex-col items-start w-full justify-start">
      <div className="mb-2">
        <img src="/logo.png" alt="Vitória Holanda" className="h-24" />
      </div>{' '}
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-2">
          <h1 className="text-2xl font-bold">
            {' '}
            {t('greeting')} {t('apresentation')}
          </h1>
          <Wand className="hover:animate-bounce" />
        </div>
        <h2 className="text-xl font-semibold">{t('position')}</h2>
        <p className="text-sm">{t('aboutMe')}</p>
        <Contact />
      </div>
    </section>
  );
}
