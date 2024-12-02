import * as yup from 'yup';

export const passwordYup = yup.string()
  .min(8, "A senha deve ter pelo menos 8 caracteres.")
  .matches(/[A-Z]/, "A senha deve conter pelo menos 1 letra maiúscula.")
  .matches(/[a-z]/, "A senha deve conter pelo menos 1 letra minúscula.")
  .matches(/[0-9]/, "A senha deve conter pelo menos 1 número.")
  .matches(/[!@#$%^&*]/, "A senha deve conter pelo menos 1 caractere especial (ex.: @, #, $, etc.).")
  .required("A senha é obrigatória.");
