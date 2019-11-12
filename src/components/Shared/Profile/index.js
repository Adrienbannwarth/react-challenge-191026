import React from 'react';
import { connect } from 'react-redux';
import { Formik } from 'formik';

import { updateProfile } from '../../../redux/actions/profile';
import StyledInput from '../Input/StyledInput';
import StyledButton from '../Button/StyledButton';
import Textarea from '../Textarea/StyledTextarea';

const Profile = ({updateProfile}) => (
    <div>
        <h2>Mon profil</h2>
        <Formik
        initialValues={{ email: 'alex@alex.com', prenom: 'Alex' }}
        validate={values => {
            let errors = {};
            if (!values.email) { errors.email = 'Required'; }
            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address'; }
            return errors;
        }}
        onSubmit={values => { updateProfile(values) }}
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
            <form onSubmit={handleSubmit}>
            <StyledInput
                placeholder="Nom"
                type="nom"
                name="nom"
                id="nom"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.nom}
            />
            <StyledInput
                placeholder="Prénom"
                type="prenom"
                name="prenom"
                id="prenom"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.prenom}
            />
            <StyledInput
                placeholder="Email"
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
            />
            {errors.email && touched.email && errors.email}
            <Textarea
                rows="8"
                placeholder="Description"
                type="description"
                name="description"
                id="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
            />
            <StyledButton type="submit" disabled={isSubmitting}>Valider les modifications</StyledButton>
            </form>
        )}
        </Formik>
    </div>
)

const mapStateToProps = state => {
    return {
  
    }
  };
  
  
  const mapDispatchToProps = dispatch => {
    return {
      updateProfile: values => dispatch(updateProfile(values)),
    }
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);