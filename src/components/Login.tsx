import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

interface LoginFormValues {
    email: string;
    password: string;
    rememberMe: boolean;
}

const Login: React.FC = () => {
    const navigate = useNavigate();

    const initialValues: LoginFormValues = {
        email: '',
        password: '',
        rememberMe: false,
    };

    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Email is required'),
        password: Yup.string().required('Password is required'),
    });

    const handleSubmit = (values: LoginFormValues) => {
        console.log('Login Data:', values);

        // Simulating authentication
        setTimeout(() => {
            alert('Login Successful!');
            if (values.rememberMe) {
                localStorage.setItem('userEmail', values.email);
            }
            navigate('/dashboard'); // Redirect to a dashboard or desired route
        }, 500);
    };

    return (
        <div className="login-form">
            <h2>Login</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label htmlFor="email">Email</label>
                        <Field type="email" id="email" name="email" />
                        <ErrorMessage name="email" component="div" className="error-message" />
                    </div>

                    <div>
                        <label htmlFor="password">Password</label>
                        <Field type="password" id="password" name="password" />
                        <ErrorMessage name="password" component="div" className="error-message" />
                    </div>

                    <div>
                        <label>
                            <Field type="checkbox" name="rememberMe" />
                            Remember Me
                        </label>
                    </div>

                    <button type="submit">Login</button>
                </Form>
            </Formik>

            <p>
                Don't have an account? <a href="/signup">Sign up</a>
            </p>
        </div>
    );
};

export default Login;

// Add the following CSS to your stylesheet or in a <style> tag in your component
// .error-message {
//     color: red;
// }
