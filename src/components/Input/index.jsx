import { forwardRef } from "react"

export const Input = forwardRef(({label, error, ...rest}, ref) => {
    return (
        <div>
            <label htmlFor="">{label}</label>
            <input type="text" />
        </div>

    )
})
