import { useTranslation } from 'react-i18next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Datenschutz = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-warm-beige">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container-narrow">
          <h1 className="font-serif text-4xl md:text-5xl text-deep-brown mb-8">
            {t('privacy.title')}
          </h1>
          
          <div className="prose prose-lg max-w-none text-deep-brown/80">
            {/* 1. Datenschutz auf einen Blick */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-deep-brown mb-4">
                {t('privacy.overview.title')}
              </h2>
              
              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.overview.generalTitle')}
              </h3>
              <p>{t('privacy.overview.generalText')}</p>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.overview.dataCollectionTitle')}
              </h3>
              
              <h4 className="font-medium text-deep-brown mb-2 mt-4">
                {t('privacy.overview.responsibleTitle')}
              </h4>
              <p>{t('privacy.overview.responsibleText')}</p>

              <h4 className="font-medium text-deep-brown mb-2 mt-4">
                {t('privacy.overview.howCollectTitle')}
              </h4>
              <p>{t('privacy.overview.howCollectText1')}</p>
              <p className="mt-2">{t('privacy.overview.howCollectText2')}</p>

              <h4 className="font-medium text-deep-brown mb-2 mt-4">
                {t('privacy.overview.useDataTitle')}
              </h4>
              <p>{t('privacy.overview.useDataText')}</p>

              <h4 className="font-medium text-deep-brown mb-2 mt-4">
                {t('privacy.overview.rightsTitle')}
              </h4>
              <p>{t('privacy.overview.rightsText')}</p>
            </section>

            {/* 2. Allgemeine Hinweise und Pflichtinformationen */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-deep-brown mb-4">
                {t('privacy.general.title')}
              </h2>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.general.privacyTitle')}
              </h3>
              <p>{t('privacy.general.privacyText1')}</p>
              <p className="mt-2">{t('privacy.general.privacyText2')}</p>
              <p className="mt-2">{t('privacy.general.privacyText3')}</p>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.general.responsibleTitle')}
              </h3>
              <p>{t('privacy.general.responsibleIntro')}</p>
              <p className="mt-2">
                <strong>Bernhard Prager</strong><br />
                Wassermanngasse 8<br />
                1210 Wien

              </p>
              <p className="mt-2">
                Telefon: +43 676 397 92 50<br />
                E-Mail: prager.bernhard@gmx.at
              </p>
              <p className="mt-2">{t('privacy.general.responsibleExplanation')}</p>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.general.storageDurationTitle')}
              </h3>
              <p>{t('privacy.general.storageDurationText')}</p>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.general.legalBasisTitle')}
              </h3>
              <p>{t('privacy.general.legalBasisText')}</p>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.general.revokeTitle')}
              </h3>
              <p>{t('privacy.general.revokeText')}</p>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.general.objectionTitle')}
              </h3>
              <p className="uppercase font-medium text-sm">{t('privacy.general.objectionText1')}</p>
              <p className="uppercase font-medium text-sm mt-2">{t('privacy.general.objectionText2')}</p>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.general.complaintTitle')}
              </h3>
              <p>{t('privacy.general.complaintText')}</p>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.general.portabilityTitle')}
              </h3>
              <p>{t('privacy.general.portabilityText')}</p>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.general.infoTitle')}
              </h3>
              <p>{t('privacy.general.infoText')}</p>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.general.restrictionTitle')}
              </h3>
              <p>{t('privacy.general.restrictionText')}</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>{t('privacy.general.restrictionItem1')}</li>
                <li>{t('privacy.general.restrictionItem2')}</li>
                <li>{t('privacy.general.restrictionItem3')}</li>
                <li>{t('privacy.general.restrictionItem4')}</li>
              </ul>
              <p className="mt-2">{t('privacy.general.restrictionOutro')}</p>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.general.sslTitle')}
              </h3>
              <p>{t('privacy.general.sslText1')}</p>
              <p className="mt-2">{t('privacy.general.sslText2')}</p>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.general.spamTitle')}
              </h3>
              <p>{t('privacy.general.spamText')}</p>
            </section>

            {/* 3. Datenerfassung auf dieser Website */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl text-deep-brown mb-4">
                {t('privacy.dataCollection.title')}
              </h2>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.dataCollection.cookiesTitle')}
              </h3>
              <p>{t('privacy.dataCollection.cookiesText1')}</p>
              <p className="mt-2">{t('privacy.dataCollection.cookiesText2')}</p>
              <p className="mt-2">{t('privacy.dataCollection.cookiesText3')}</p>
              <p className="mt-2">{t('privacy.dataCollection.cookiesText4')}</p>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.dataCollection.contactFormTitle')}
              </h3>
              <p>{t('privacy.dataCollection.contactFormText1')}</p>
              <p className="mt-2">{t('privacy.dataCollection.contactFormText2')}</p>
              <p className="mt-2">{t('privacy.dataCollection.contactFormText3')}</p>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.dataCollection.emailTitle')}
              </h3>
              <p>{t('privacy.dataCollection.emailText1')}</p>
              <p className="mt-2">{t('privacy.dataCollection.emailText2')}</p>
              <p className="mt-2">{t('privacy.dataCollection.emailText3')}</p>

              <h3 className="font-serif text-xl text-deep-brown mb-3 mt-6">
                {t('privacy.dataCollection.whatsappTitle')}
              </h3>
              <p>{t('privacy.dataCollection.whatsappText1')}</p>
              <p className="mt-2">{t('privacy.dataCollection.whatsappText2')}</p>
              <p className="mt-2">{t('privacy.dataCollection.whatsappText3')}</p>
              <p className="mt-2">{t('privacy.dataCollection.whatsappText4')}</p>
              <p className="mt-2">{t('privacy.dataCollection.whatsappText5')}</p>
              <p className="mt-2">{t('privacy.dataCollection.whatsappText6')}</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Datenschutz;