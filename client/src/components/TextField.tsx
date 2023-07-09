import { FormControl, FormLabel, Input, FormErrorMessage, FormErrorIcon, Tooltip } from "@chakra-ui/react"
import { Field, FieldHookConfig, useField } from "formik"

interface OtherProps {
    label: string;
}

export const TextField = (props: OtherProps & FieldHookConfig<string>) => {
    const [field, meta] = useField(props)
    return (
        <FormControl
        position="relative"
        isInvalid={meta.error !== undefined && meta.touched}>
            <FormLabel display="none">{props.label}</FormLabel>
            <Field
            as={Input}
            {...field}
            placeholder={props.placeholder}
            type={props.type}
            name={props.name}
            />
            <FormErrorMessage
            position="absolute"
            right="0"
            bottom="50%"
            transform="auto"
            translateY="50%">
                <Tooltip label={meta.error}>
                    <FormErrorIcon />
                </Tooltip>
            </FormErrorMessage>
        </FormControl>
    )
}
