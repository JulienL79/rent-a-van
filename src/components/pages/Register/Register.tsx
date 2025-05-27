import { useErrorStore } from '@store/useErrorStore'
import { ErrorModal } from '@atoms/ErrorModal'
import { registerFormData } from './RegisterFormData'
import { Form } from '@organisms/Form'

export function Register() {

    const { error, clearError } = useErrorStore()
    return (
        <div className="page">
            {
                error ? <ErrorModal message={error} onClose={() => clearError()} /> : <></>
            }
            <section className="intro">
                <Form fields={registerFormData.fields} buttonContent={registerFormData.buttonContent} onSubmit={registerFormData.onSubmit} title={registerFormData.title} type={"register"}/>
            </section>
        </div>
    )
}