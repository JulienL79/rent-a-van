import { loginFormData } from './LoginFormData'
import { Form } from '@organisms/Form'

export function Login() {

    return (
        <div className="page">
            <Form fields={loginFormData.fields} buttonContent={loginFormData.buttonContent} onSubmit={loginFormData.onSubmit} title={loginFormData.title} type={"login"}/>
        </div>
    )
}