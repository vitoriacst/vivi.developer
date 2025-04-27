'use client';
import { WandSparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation('common');
  return (
    <footer className="py-4 text-center flex item-cente justify-center gap-2">
      {t('footerText')}
      <div>
        <WandSparkles />
      </div>
      {t('footerSecondText')}
    </footer>
  );
}
