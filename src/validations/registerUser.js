import * as yup from 'yup';

export const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
        .string()
        .matches(/[A-Z]/, 'Deve conter ao menos 1 letra maiúscula')
        .matches(/[a-z]/, 'Deve conter ao menos 1 letra minuscula')
        .matches(/(\d)/, 'Deve conter ao menos um número')
        .matches(/(\W)|_/, 'Deve conter um caracter especial')
        .matches(/.{8,}/, 'Deve ter no minimo 8 digitos')
        .required('Senha é obrigatória'),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Confirmação deve ser igual a senha"),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup.string().required("Escolha um módulo."),
});

export const loginSchema = yup.object().shape({
    email: yup.string().required("Email obrigatório").email("Email inválido"),
    password: yup
        .string()
        .required('Senha é obrigatória'),
})

export const modalSchema = yup.object().shape({
    title: yup.string().required("Campo obrigatório"),
    status: yup.string().required("Campo obrigatório")
})