import { useRouter } from 'next/router';
import SvgAnswerQuestionGradient from '~/components/icons/AnswerQuestionGradient';
import SvgBoxGradient from '~/components/icons/BoxGradient';
import SvgCommentGradient from '~/components/icons/CommentGradient';
import SvgCreditCardGradient from '~/components/icons/CreditCardGradient';
import SvgPrescriptionGradient from '~/components/icons/PrescriptionGradient';
import SvgUserCircleGradient from '~/components/icons/UserCircleGradient';
import SvgXrayGradient from '~/components/icons/XrayGradient';
import InputButton from '~/components/inputs/InputButton';
import routes from '~/constants/routes/routes';
import words from '~/constants/text/words';
import useLocalRouter from '~/hooks/useLocaleRouter/useLocaleRouter';

const ProfilePage = () => {
  const { locale } = useRouter();
  const { localePush } = useLocalRouter();
  return (
    <div>
      <div className=" flex flex-col ">
        <InputButton
          onClick={() => {
            localePush(routes.mainPage);
          }}
          bottomBreak
          label={words[locale].myInfo}
          buttonColorIndex={9}
          sizeIndex={1}
          icon={<SvgUserCircleGradient />}
        />

        <InputButton
          onClick={() => {
            localePush(routes.mainPage);
          }}
          bottomBreak
          label={words[locale].myComments}
          buttonColorIndex={9}
          sizeIndex={1}
          icon={<SvgCommentGradient />}
        />

        <InputButton
          onClick={() => {
            localePush(routes.mainPage);
          }}
          bottomBreak
          label={words[locale].myCards}
          buttonColorIndex={9}
          sizeIndex={1}
          icon={<SvgCreditCardGradient />}
        />

        <InputButton
          onClick={() => {
            localePush(routes.mainPage);
          }}
          bottomBreak
          label={words[locale].myOrders}
          buttonColorIndex={9}
          sizeIndex={1}
          icon={<SvgBoxGradient />}
        />

        <InputButton
          onClick={() => {
            localePush(routes.mainPage);
          }}
          bottomBreak
          label={words[locale].myPrescriptions}
          buttonColorIndex={9}
          sizeIndex={1}
          icon={<SvgPrescriptionGradient />}
        />

        <InputButton
          onClick={() => {
            localePush(routes.mainPage);
          }}
          bottomBreak
          label={words[locale].myXRays}
          buttonColorIndex={9}
          sizeIndex={1}
          icon={<SvgXrayGradient />}
        />

        <InputButton
          onClick={() => {
            localePush(routes.mainPage);
          }}
          bottomBreak
          label={words[locale].myQandA}
          buttonColorIndex={9}
          sizeIndex={1}
          icon={<SvgAnswerQuestionGradient />}
        />
      </div>
    </div>
  );
};

export default ProfilePage;
