import { registerFormData } from './RegisterFormData'
import { Form } from '@organisms/Form'

export function Register() {

    return (
        <div className="page">
            <Form fields={registerFormData.fields} buttonContent={registerFormData.buttonContent} onSubmit={registerFormData.onSubmit} title={registerFormData.title} type={"register"}/>
        </div>
    )
}