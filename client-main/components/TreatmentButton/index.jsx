import { useRouter } from 'next/router.js';
import Chevron from '~/components/icons/Chevron.js';
import TranslatedLink from '~/components/TranslatedLink';
import routes from '~/constants/routes/routes.js';
import phrases from '~/constants/text/phrases.js';
import classNames from './styles';
//
//a button created specificly for going to the treament planning page
//params:   text: text that will be displayed, if none was giving the default text will be visible instead
//          query: can take queries so it can be passed to the Link component
//exemple: query={treatment:"whitening"} will go to treatment planning with whitening all ready selected
//
const TreatmentButton = ({ query, text }) => {
  const { locale } = useRouter();
  const phrase = text ? text : phrases[locale]?.treatmentPlaning || '';
  return (
    <div className="relative">
      <TranslatedLink href={routes.treatmentPlaning} query={query}>
        <a className={classNames.treatmentPlaningButton}>{phrase}</a>
      </TranslatedLink>
      <Chevron className={classNames.treatmentPlaningChevron} />
    </div>
  );
};

export default TreatmentButton;
