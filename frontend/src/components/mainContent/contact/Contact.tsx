import React from 'react';
import {
    ContactWrapper,
    ContactTitle,
    ContactForm,
    InputField,
    TextArea,
    SubmitButton,
} from './Contact.style';

const Contact: React.FC = () => {
    return (
        <ContactWrapper>
            <ContactTitle>Contact Us</ContactTitle>
            <ContactForm>
                <InputField type="text" placeholder="Your Name" required />
                <InputField type="email" placeholder="Your Email" required />
                <InputField type="text" placeholder="Subject" required />
                <TextArea rows={6} placeholder="Your Message" required />
                <SubmitButton type="submit">Send Message</SubmitButton>
            </ContactForm>
        </ContactWrapper>
    );
};

export default Contact;
