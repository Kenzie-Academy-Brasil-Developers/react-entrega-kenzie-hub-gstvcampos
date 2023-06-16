import { forwardRef } from "react"
import { StyledFieldBox, StyledInput, StyledLabel } from "../../styles/form"

export const Input = forwardRef(({label, error, ...rest}, ref) => {
    return (
        <StyledFieldBox>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput ref={ref} {...rest} error={error ? true : false}/>
        </StyledFieldBox>
    )
})
