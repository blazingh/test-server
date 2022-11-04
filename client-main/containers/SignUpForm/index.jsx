import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import * as Yup from 'yup';
import CountDown from '~/components/CountDown';
import InputButton from '~/components/inputs/InputButton';
import InputNumber from '~/components/inputs/InputNumber';
import InputText from '~/components/inputs/InputText';
import { AuthContext } from '~/contexts/Auth';
import useLocalRouter from '~/hooks/useLocaleRouter/useLocaleRouter';

const SignUpForm = ({ callBack, redirect }) => {
  const [{ error: userError, loading: userLoading }, { signUp, requestSms }] =
    useContext(AuthContext);
  const { query } = useRouter();
  const { localePush } = useLocalRouter();

  const [smsResponse, setsmsResponse] = useState({
    id: null,
    loading: false,
    error: null,
    sent: false,
  });

  //function to reset smsResponse state data
  const resetSmsRequest = () => {
    setsmsResponse({
      id: null,
      loading: false,
      error: null,
      sent: false,
    });
  };
  //funtion runs after submitning
  const afterSubmit = () => {
    if (typeof callBack == 'function') {
      callBack();
    }
    redirect && query.redirect && localePush(query.redirect);
  };
  // on submit function
  const onSubmit = (values) => {
    !userLoading && signUp({ ...values, id: smsResponse.id, afterSubmit });
  };
  // sms code request
  const getSmsCode = (values) => {
    if (smsResponse.sent) return;
    setsmsResponse((p) => ({
      ...p,
      id: null,
      loading: true,
      error: false,
    }));
    requestSms(values.phoneNumber, (value) => {
      console.log(value);

      setsmsResponse(value);
    });
  };
  // sign up validation function
  const validate = Yup.object().shape({
    code: Yup.string().min(4, 'Must be 4 digits').required('Required'),
    password: Yup.string().required('Required'),
    password_confirmation: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });
  // pjone number validation function
  const phoneValidate = Yup.object().shape({
    phoneNumber: Yup.string().min(10, 'Must be 10 digits').required('Required'),
  });

  return (
    <div>
      {/*  */}
      <Formik
        initialValues={{
          phoneNumber: '',
        }}
        validationSchema={phoneValidate}
        onSubmit={getSmsCode}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          setFieldValue,
          setFieldTouched,
        }) => {
          return (
            <Form>
              {/* phone number input and sms code request form */}
              <div className=" relative">
                <InputNumber
                  defaultValue={values.phoneNumber}
                  format="(###) ### ####"
                  displayEmptyFormat
                  mask={'_'}
                  maxLenght={10}
                  className="w-full my-2"
                  label="Phone Number"
                  onChange={(value) => {
                    setFieldValue('phoneNumber', value);
                  }}
                  onBlur={() => {
                    !touched.phoneNumber && setFieldTouched('phoneNumber');
                  }}
                  error={touched.phoneNumber ? errors.phoneNumber : null}
                  extraButton={
                    smsResponse?.sent ? (
                      <CountDown
                        countDown="05:00"
                        afterCountEnd={resetSmsRequest}
                      />
                    ) : smsResponse.loading ? (
                      '...'
                    ) : (
                      'Send Code'
                    )
                  }
                  extraClick={() => {
                    handleSubmit();
                  }}
                />
              </div>
              {smsResponse.error && (
                <div className=" m-1 text-red-400 dis-text-md w-full text-center ">
                  {smsResponse.error}
                </div>
              )}
            </Form>
          );
        }}
      </Formik>
      {/* sign up form after sms code request */}
      <Formik
        initialValues={{
          password: '',
          code: '',
          password_confirmation: '',
        }}
        validationSchema={validate}
        onSubmit={onSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          setFieldValue,
          setFieldTouched,
        }) => {
          return (
            <Form className=" relative ">
              {!smsResponse.id && (
                <div className=" w-full h-full absolute bg-white opacity-50 z-20 ">
                  {' '}
                </div>
              )}
              {/* sms code input */}
              <InputNumber
                defaultValue={values.phoneNumber}
                format="####"
                displayEmptyFormat
                mask={'_'}
                maxLenght={4}
                className="w-full my-2"
                label="sms code"
                onChange={(value) => {
                  setFieldValue('code', value);
                }}
                onBlur={() => {
                  !touched.code && setFieldTouched('code');
                }}
                error={touched.code ? errors.code : null}
              />
              {/* password input */}
              <InputText
                defaultValue={values.password}
                className="w-full  my-2"
                label="Password"
                placeholder="********"
                password
                error={touched.password ? errors.password : null}
                onChange={(value) => {
                  setFieldValue('password', value);
                }}
                onBlur={() => {
                  !touched.password && setFieldTouched('password');
                }}
              />
              {/* password Cconfirmation input */}
              <InputText
                defaultValue={values.password_confirmation}
                className="w-full  my-2"
                label="Password confirmation"
                placeholder="********"
                password
                error={
                  touched.password_confirmation
                    ? errors.password_confirmation
                    : null
                }
                onChange={(value) => {
                  setFieldValue('password_confirmation', value);
                }}
                onBlur={() => {
                  !touched.password_confirmation &&
                    setFieldTouched('password_confirmation');
                }}
              />
              {/* submit button */}
              <div className=" mt-6 ">
                <InputButton
                  loading={userLoading}
                  label={'sign up'}
                  center
                  rounded
                  sizeIndex={2}
                  onClick={handleSubmit}
                />
              </div>
              {userError && (
                <div className=" w-full text-center text-red-400 mt-2 ">
                  {' '}
                  {userError}{' '}
                </div>
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignUpForm;
