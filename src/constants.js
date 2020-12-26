// Ссылки на малький/большой объём данных
export const urls = {
  smallCount:
    'https://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
  largeCount:
    'https://www.filltext.com/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}',
};

// Отображаемые свойства человека
export const displayedProps = ['id', 'firstName', 'lastName', 'email', 'phone'];

// Тект ошибки загрузки данных
export const errorMessage = 'Извените, при загрузке данных произошла ошибка';

export const actions = {
  loading: 'GET_USERS_LOADING', // Начало загрузки
  success: 'GET_USERS_SECCESS', // Удачное завершение загрузки
  error: 'GET_USERS_ERROR', // Завершение загрузки с ошибкой
  setSorting: 'SET_SORTING', // Установка значения сортивки
  setFilter: 'SET_FILTER', // Установка значения фильтра
  setDetailsItem: 'SET_DETAILS_ITEM', // Установка объекта для отображения детальных данных человека
  addHuman: 'ADD_HUMAN', // Добавление человека в список
  setFormOpen: 'SET_FORM_OPEN', // Состояние отображения формы добавления человека
};

export const sortTypes = {
  decreace: 'decreace',
  increace: 'increace',
};

export const inputPlaceholders = {
  filter: 'Фильтр',
  id: 'Id',
  firstName: 'Имя',
  lastName: 'Фамилия',
  email: 'Email',
  phone: '(945)439-3361',
};

export const buttonsText = {
  filter: 'Поиск',
  error: 'Повторить запрос',
  addForm: 'Добавить',
  openForm: 'Показать форму',
  closeForm: 'Скрыть форму',
  smallCountQuery: 'Маленький объём',
  largeCountQuery: 'Большой объём',
};

export const detailsTitles = {
  fullName: 'Выбран пользователь',
  description: 'Описание:',
  streetAddress: 'Адрес проживания:',
  city: 'Город:',
  state: 'Провинция/штат:',
  zip: 'Индекс:',
};

// Значения по умолчания для отображения детальных данных о человеке
export const detailsDefaultProps = {
  firstName: 'Имя не указанно',
  lastName: 'Фамилия не указанна',
  description: 'Описание не указанно',
  address: {
    streetAddress: 'Адрес проживания не указан',
    city: 'Город не указан',
    state: 'Штат не указан',
    zip: 'Индекс не указан',
  },
};

export const paginationObj = {
  itemsCountOnPage: 50,
  maxPageOnList: 10,
  pageStep: 4,
};

// Колличество отображаемых загрузочных элементов
export const loadingItemsCount = 15;

export const dataVolumeText = 'Выберите объём данных';
