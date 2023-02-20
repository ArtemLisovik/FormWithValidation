import * as yup from 'yup'

export interface IUser {
    firstName: string
    lastName: string
    age: Number
    email: string
}

export const schema = yup.object().shape({
    firstName: yup
        .string()
        .required('You should enter your first name')
        .min(4, 'At least 4 letters'),
    lastName: yup
        .string()
        .required('You should enter your first name'),
    age: yup
        .number()
        .required('Enter your age!')
        .positive()
        .integer(),
    email: yup
        .string()
        .required('Enter your email')
        .email('Enter correct email')
})