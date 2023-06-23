import { forwardRef } from "react"

export const Select = forwardRef(({children, error, label,...rest}, ref) => {
    return (
        <div>
            {label ? <StyledLabel>{label}</StyledLabel> : null}
            <select ref={ref} {...rest}>
                {children}
            </select>
            { error ? <p>{error.message}</p> : <p></p> }
        </div>
    )

})