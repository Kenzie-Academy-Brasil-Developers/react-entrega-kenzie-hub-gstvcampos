import { forwardRef } from "react"
import { StyledLabel } from "../../styles/form"
import { StyledSelectBox } from "./style"

export const Select = forwardRef(({children, label,...rest}, ref) => {
    return (
        <StyledSelectBox>
            {label ? <StyledLabel>{label}</StyledLabel> : null}
            <select ref={ref} {...rest}>
                {children}
            </select>
        </StyledSelectBox>
    )

})