'use client';

import { changeVisibility, useAppDispatch } from '@/app/store/store';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTranslation } from 'react-i18next';

export default function Header() {
  const { i18n } = useTranslation('common');

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  const dispatch = useAppDispatch();

  const handleChangeVisibility = (choosenPage: string) => {
    dispatch(changeVisibility(choosenPage));
  };

  return (
    <header className="flex flex-wrap justify-between items-center font-semibold py-2 px-4 gap-4 w-full flex-col md:flex-row">
      <h1>Vivi.dev</h1>
      <div className="flex items-center gap-4 flex-col md:flex-row">
        <div className="flex gap-2 items-center justify-center">
          <button
            className="btn-nav"
            onClick={() => handleChangeVisibility('about')}
          >
            Sobre
          </button>
          <button
            className="btn-nav"
            onClick={() => handleChangeVisibility('projects')}
          >
            Projetos
          </button>
        </div>
        <div className="flex gap-2 flex-wrap">
          <ThemeToggle />
          <button
            onClick={() => changeLanguage('en')}
            className={`px-2 py-1 rounded ${
              i18n.language === 'en'
                ? 'bg-gray-700 text-white'
                : 'bg-transparent text-gray-500'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => changeLanguage('pt')}
            className={`px-2 py-1 rounded ${
              i18n.language === 'pt'
                ? 'bg-gray-700 text-white'
                : 'bg-transparent text-gray-400'
            }`}
          >
            PT
          </button>
        </div>
      </div>
    </header>
  );
}
