import { forwardRef } from "react"
import { StyledFieldBox, StyledInput, StyledLabel } from "../../styles/form"

export const Input = forwardRef(({label, error, ...rest}, ref) => {
    return (
        <StyledFieldBox>
            {label ? <StyledLabel>{label}</StyledLabel> : null}
            <StyledInput ref={ref} {...rest} error={error ? true : false}/>
            {error ? <p>{error.massage}</p> : <p></p>}
        </StyledFieldBox>
    )
})
