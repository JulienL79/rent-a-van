import { useErrorStore } from '@store/useErrorStore'
import { ErrorModal } from '@atoms/ErrorModal'
import { loginFormData } from './LoginFormData'
import { Form } from '@organisms/Form'

export function Login() {

    const { error, clearError } = useErrorStore()
    return (
        <div className="page">
            {
                error ? <ErrorModal message={error} onClose={() => clearError()} /> : <></>
            }
            <section className="intro">
                <Form fields={loginFormData.fields} buttonContent={loginFormData.buttonContent} onSubmit={loginFormData.onSubmit} title={loginFormData.title} type={"login"}/>
            </section>
        </div>
    )
}