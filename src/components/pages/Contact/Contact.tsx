import { contactFormData } from './ContactFormData'
import { Form } from '@organisms/Form'

export function Contact() {
    return (
        <div className="page">
            <Form fields={contactFormData.fields} buttonContent={contactFormData.buttonContent} onSubmit={contactFormData.onSubmit} title={contactFormData.title} type={"contact"}/>
        </div>
    )
}