import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { signIn } from '../../redux/actions/user';

import LoginStyle from './LoginStyle'
import logoHetic from '../../assets/imgs/logo-hetic.png'

const Login = ({ signIn }) => {
  return (
    <Formik
      initialValues={{ email: 'alex@alex.com', password: '123123123123' }}
      validate={values => {
        let errors = {};
        if (!values.email) { errors.email = 'Required'; }
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
          errors.email = 'Invalid email address'; }
        return errors;
      }}
      onSubmit={values => { signIn(values) }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <LoginStyle className="PageLogin">
          <div className="form-container">
            <img className="logo-hetic" src= {logoHetic} alt=""/>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Adresse mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="login-input"
                />
              {errors.email && touched.email && errors.email}
              </div>
              <div className="input-group">
                <label htmlFor="password">Mot de passe</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className="login-input"

                />
                {errors.password && touched.password && errors.password}
              </div>
              <a href="/resetpassword" className="resetpassword">Reset password</a>
              <button className="login-submit" type="submit" disabled={isSubmitting}>CONNEXION</button>
            </form>
          </div>
        </LoginStyle>
      )}
    </Formik>
  );
}


const mapStateToProps = state => {
  return {

  }
};


const mapDispatchToProps = dispatch => {
  return {
    signIn: values => dispatch(signIn(values)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
