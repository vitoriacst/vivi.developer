import { Code, FileUser, Mail, MessageCircle } from 'lucide-react';
import { useTranslation } from 'next-i18next';
import { toast } from 'react-toastify';

export const Contact = () => {
  const { t, i18n } = useTranslation('common');

  const handleClickCopyEmail = () => {
    navigator.clipboard.writeText('vitoria.cst.holanda@gmail.com');
    toast('Email copiado com sucesso!');
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    if (i18n.language === 'en') {
      link.href = 'curriculum.pdf';
      link.download = 'curriculum.pdf';
      link.click();
    } else {
      link.href = 'curriculo.pdf';
      link.download = 'curriculo.pdf';
      link.click();
    }
    toast('Currículo baixado com sucesso!');
  };

  return (
    <div className="flex w-full items-start justify-start flex-col gap-2 mt-2 flex-wrap">
      <section className="flex flex-wrap gap-2">
        <a
          href={'https://www.linkedin.com/in/vitoria-cstholanda/'}
          target="_blank"
          className="flex gap-2 border-2 p-1 rounded-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg"
        >
          <MessageCircle />
          Linkedin
        </a>
        <button
          onClick={handleClickCopyEmail}
          className="flex gap-2 border-2 p-1 rounded-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer"
        >
          <Mail />
          Email
        </button>
        <a
          href={'https://github.com/vitoriacst'}
          target="_blank"
          className="flex gap-2 border-2 p-1 rounded-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer"
        >
          <Code />
          Github
        </a>
        <button
          onClick={handleDownloadResume}
          className="flex gap-2 border-2 p-1 rounded-sm transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg cursor-pointer"
        >
          <FileUser />
          {t('download')}
        </button>
      </section>
    </div>
  );
};
