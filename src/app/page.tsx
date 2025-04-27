'use client';

import { useTranslation } from 'react-i18next';
import AboutMe from './components/AboutMe/AboutMe';
import Experiences from './components/Experiences/Experiences';
import ProjectsCards from './components/ProjectsCard/ProjectsCard';
import { useAppSelector } from './store/store';

export default function Home() {
  const { t } = useTranslation('common');
  const pageManagement = useAppSelector((state) => state.visibility.page);

  return (
    <main className="flex w-full flex-col items-center justify-center sm:p-6 flex-wrap">
      <div className="w-full max-w-[900px] flex flex-col md:flex-row gap-4 flex-wrap">
        <div className="w-full flex flex-col gap-4 bg-white p-6 rounded-md flex-wrap">
          <AboutMe />
        </div>
      </div>
      <div className="mt-4 w-full max-w-[900px] flex flex-col md:flex-row gap-4 h-full md:h-96 flex-wrap">
        <div className="w-full flex items-center justify-center gap-4 bg-white p-6 rounded-md h-full">
          {pageManagement === 'projects' && (
            <div className="flex gap-2 flex-col sm:flex-row">
              <ProjectsCards
                title={t('projectsDescription.0.musicPlataform')}
                description={t(
                  'projectsDescription.0.musicPlataformDescription'
                )}
                technologies="JavaScript . Css . Redux"
                link={t('projectsDescription.0.musicPlataformLink')}
              />
              <ProjectsCards
                title={t('projectsDescription.0.daaiProject')}
                description={t('projectsDescription.0.daaiDescription')}
                technologies="TypeScript . Tailwind . Stencil"
                link={t('projectsDescription.0.daaiLink')}
              />
              <ProjectsCards
                title={t('projectsDescription.0.beersApp')}
                description={t('projectsDescription.0.beersAppDescription')}
                technologies="JavaScript . Node . Jest"
                link={t('projectsDescription.0.beersAppLink')}
              />
            </div>
          )}

          {pageManagement === 'about' && (
            <div>
              <Experiences />
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
