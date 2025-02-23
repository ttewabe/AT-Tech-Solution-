import React from 'react';
import { FloatLabel } from 'primereact/floatlabel';
import { InputText } from 'primereact/inputtext';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
    ContactWrapper,
    ContactTitle,
    ContactForm,
    TextArea,
    SubmitButton,
    ErrorMessage,
} from './Contact.style';

const validationSchema: Yup.ObjectSchema<{
    name: string;
    email: string;
    subject: string;
}> = Yup.object().shape({
    name: Yup.string()
        .matches(/^[A-Za-z\s]+$/, 'Name must only contain letters')
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    subject: Yup.string()
        .max(70, 'Subject must be 100 characters or less')
        .required('Subject is required'),
    message: Yup.string(),
});

const Contact: React.FC = () => {
    const {
        values: { name, email, subject, message },
        touched,
        setFieldValue,
        errors,
        handleBlur,
        handleSubmit,
    } = useFormik({
        initialValues: { name: '', email: '', subject: '', message: '' },
        validationSchema,
        onSubmit: (values, { resetForm }) => {
            alert(JSON.stringify(values, null, 2));
            resetForm();
        },
    });

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const formattedValue = value.replace(/[^A-Za-z\s]/g, '');
        setFieldValue('name', formattedValue);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const formattedValue = value.replace(/[^A-Za-z0-9@.]/g, '');
        setFieldValue('email', formattedValue);
    };

    const handleSubjectChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFieldValue('subject', event.target.value);
    };

    const handleMessageChange = (
        event:
            | React.ChangeEvent<HTMLTextAreaElement>
            | React.ChangeEvent<HTMLInputElement>
    ) => {
        setFieldValue('message', event.target.value);
    };

    return (
        <ContactWrapper>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactForm onSubmit={handleSubmit}>
                <div>
                    <FloatLabel>
                        <InputText
                            id="yourName"
                            name="yourName"
                            value={name}
                            onChange={handleNameChange}
                            onBlur={handleBlur}
                        />
                        <label htmlFor="name">Your Name</label>
                    </FloatLabel>
                    {touched.name && errors.name && (
                        <ErrorMessage>{errors.name}</ErrorMessage>
                    )}
                </div>

                <div>
                    <FloatLabel>
                        <InputText
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleEmailChange}
                            onBlur={handleBlur}
                        />
                        <label htmlFor="email">Your Email</label>
                    </FloatLabel>
                    {touched.email && errors.email && (
                        <ErrorMessage>{errors.email}</ErrorMessage>
                    )}
                </div>

                <div>
                    <FloatLabel>
                        <InputText
                            id="subject"
                            name="subject"
                            value={subject}
                            onChange={handleSubjectChange}
                            onBlur={handleBlur}
                        />
                        <label htmlFor="subject">Subject</label>
                    </FloatLabel>
                    {touched.subject && errors.subject && (
                        <ErrorMessage>{errors.subject}</ErrorMessage>
                    )}
                </div>

                <div>
                    <FloatLabel>
                        <TextArea
                            rows={6}
                            id="message"
                            name="message"
                            value={message}
                            onChange={handleMessageChange}
                            onBlur={handleBlur}
                            className={message ? 'p-filled' : ''} // Ensures label moves up when filled
                        />
                        <label htmlFor="message">Your Message</label>
                    </FloatLabel>
                    {touched.message && errors.message && (
                        <ErrorMessage>{errors.message}</ErrorMessage>
                    )}
                </div>

                <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
        </ContactWrapper>
    );
};

export default Contact;
