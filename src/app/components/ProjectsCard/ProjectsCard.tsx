import { t } from 'i18next';

interface cardsProps {
  title: string;
  description: string;
  technologies: string;
  link: string;
}

export default function ProjectsCards({
  title,
  description,
  technologies,
  link,
}: cardsProps) {
  return (
    <div className="flex items-start flex-wrap gap-4">
      <article className="flex flex-col justify-between items-center shadow-md p-4 border sm:w-[200px] sm:h-[300px] md:w-[250px] md:h-[250px]">
        <header className="mb-2 text-center">
          <h2 className="text-sm font-bold">{title}</h2>
        </header>

        <div className="flex flex-col flex-1 justify-start">
          <p className="text-xs mb-2">{description}</p>
          <p className="text-xs mb-4 text-gray-700">{technologies}</p>
        </div>

        <footer className="w-full flex justify-center mt-auto">
          <button
            className="w-full bg-black text-white text-xs p-2 rounded-sm cursor-pointer transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg hover:bg-transparent hover:border-2 hover:text-black"
            onClick={() => window.open(link, '_blank')}
          >
            {t('seeMoreButton')}
          </button>
        </footer>
      </article>
    </div>
  );
}
