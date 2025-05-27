import { useErrorStore } from '@store/useErrorStore'
import { ErrorModal } from '@atoms/ErrorModal'

export function Home() {

    const { error, clearError } = useErrorStore()
    return (
        <div className="page home">
            {
                error ? <ErrorModal message={error} onClose={() => clearError()} /> : <></>
            }
        </div>
    )
}