import { TextareaHTMLAttributes, ReactNode, useState } from "react"

interface InputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    icon?: ReactNode;
    variant?: string;
    error?: boolean;
}
export default ({ icon, variant, ...rest }: InputProps) => {
    return <section className="textarea_section" >
        <textarea  {...rest} rows={5}></textarea>
    </section>
}