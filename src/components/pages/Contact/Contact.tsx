import { contactFormData } from './ContactFormData'
import { Form } from '@organisms/Form'
import { PageMeta } from '@atoms/PageMeta'

export function Contact() {
    return (
        <div className="page">
            <PageMeta
                title="RentAVan - Contact"
                description="Contactez notre équipe RentAVan pour toute question ou demande."
            />

            <Form {...contactFormData} />
        </div>
    )
}