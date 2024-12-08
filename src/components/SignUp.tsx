import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

interface SignupFormValues {
    email: string;
    password: string;
    confirmPassword: string;
}

const Signup: React.FC = () => {
    const navigate = useNavigate();

    const initialValues: SignupFormValues = {
        email: '',
        password: '',
        confirmPassword: '',
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Confirm Password is required'),
    });

    const handleSubmit = (values: SignupFormValues) => {
        console.log('Signup Data:', values);

        setTimeout(() => {
            alert('Signup Successful!');
            navigate('/login'); // Redirect to login after signup
        }, 500);
    };

    return (
        <div >
            <h2>Signup</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" />
                        <span style={{ color: 'red' }}>
                            <ErrorMessage name="email" component="span" />
                        </span>
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password" />
                        <span style={{ color: 'red' }}>
                            <ErrorMessage name="password" component="span" />
                        </span>
                    </div>

                    <div>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <Field type="password" id="confirmPassword" name="confirmPassword" />
                        <span style={{ color: 'red' }}>
                            <ErrorMessage name="confirmPassword" component="span" />
                        </span>
                    </div>

                    <button type="submit">Sign Up</button>
                </Form>
            </Formik>

            <p>
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    );
};

export default Signup;
