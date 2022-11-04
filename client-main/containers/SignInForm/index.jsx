import { Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import * as Yup from 'yup';
import InputButton from '~/components/inputs/InputButton';
import InputNumber from '~/components/inputs/InputNumber';
import InputText from '~/components/inputs/InputText';
import { AuthContext } from '~/contexts/Auth';
import useLocalRouter from '~/hooks/useLocaleRouter/useLocaleRouter';

const SignInForm = ({ callBack, redirect }) => {
  const [{ error: userError, loading: userLoading }, { signIn }] =
    useContext(AuthContext);
  const { query } = useRouter();
  const { localePush } = useLocalRouter();
  //funtion runs after submitning
  const afterSubmit = () => {
    if (typeof callBack == 'function') {
      callBack();
    }
    redirect && query.redirect && localePush(query.redirect);
  };
  // on submit function
  const onSubmit = (values) => {
    !userLoading && signIn(values.phoneNumber, values.password, afterSubmit);
  };
  // input validation function
  const validate = Yup.object().shape({
    phoneNumber: Yup.string().min(10, 'Must be 10 digits').required('Required'),
    password: Yup.string().required('Required'),
  });

  return (
    <div>
      <Formik
        initialValues={{ phoneNumber: '', password: '' }}
        validationSchema={validate}
        onSubmit={onSubmit}
      >
        {({
          values,
          setFieldValue,
          handleSubmit,
          errors,
          touched,
          setFieldTouched,
        }) => {
          return (
            <Form>
              {/* phone number input */}
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
              {/* submit button */}
              <div className=" mt-6 ">
                <InputButton
                  loading={userLoading}
                  label={'sign in'}
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

export default SignInForm;
