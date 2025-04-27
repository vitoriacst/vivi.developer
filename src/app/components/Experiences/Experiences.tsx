import { t } from 'i18next';

export default function Experiences() {
  return (
    <section>
      <h1 className="text-md font-bold">{t('experiences')}</h1>
      <p>{t('experiencesDescription')}</p>
    </section>
  );
}
