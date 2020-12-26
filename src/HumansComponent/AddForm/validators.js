import * as Yup from 'yup';

export const validation = Yup.object().shape({
  id: Yup.string()
    .matches(/^[0-9]+$/, 'Id может содержать только цифры')
    .required('Введите id'),
  firstName: Yup.string()
    .matches(/^[aA-Zz]+$/i, 'Имя может содержать только буквы')
    .required('Введите имя'),
  lastName: Yup.string()
    .matches(/^[aA-Zz]+$/i, 'Фамилия может содержать только буквы')
    .required('Введите фамилию'),
  email: Yup.string().email('Введите правильный email').required('Введите email'),
  phone: Yup.string()
    .matches(/^\([0-9]{3}\)+[0-9]{3}-[0-9]{4}$/, 'Неверный формат номера')
    .required('Введите номер телефона'),
});
