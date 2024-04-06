import { ExclamationTriangleIcon } from '@radix-ui/react-icons'

interface FormErrorProps {
    message?: string
}

export const FormError = ({
    message
}: FormErrorProps) => {
    if(!message) return null
    return (
        <div className='bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 justify-center'>
            <ExclamationTriangleIcon className='h-5 w-5 text-destructive text-xs'/>
            <p className='text-destructive text-xs'>{message}</p>
        </div>
    )
}