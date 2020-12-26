import { sortTypes } from 'constants.js';

// Получение объекта со свойствами для отображения
// obj - изначальный объект
// displayedProps - список свойств для отображения
export const getDisplayedObj = (obj, displayedProps) => {
  const displayedObj = {};
  displayedProps.forEach((item) => {
    displayedObj[item] = obj[item];
  });

  return displayedObj;
};

// Изменение компонента сортировки
// sortValue - текущий объект сортивки
// newSortValue - новый объект сортировки
export const changeSortValueObj = (sortValue, newSortValue) => {
  // Если устанавливается новое значение сортивки, возвращается объект
  //с новым "именем" сортировки и типо на сортироку по убыванию
  if (sortValue.name !== newSortValue) return { name: newSortValue, type: sortTypes.decreace };
  // Если "имя" прежнее, возвращается объект с тем же "именем",
  //но изменённым типо сортивки
  if (sortValue.type === sortTypes.decreace) return { ...sortValue, type: sortTypes.increace };
  if (sortValue.type === sortTypes.increace) return { ...sortValue, type: sortTypes.decreace };
};

// Является ли объект валидным для фильтрации
// (если в объекте есть хоть одно свойство с подстрокой фильтра
// возвращается true)
// obj - исходный объект
// propsToValid - свойства в которых будет осуществляться проверка
// filterValue - значение фильтра
export const isObjValid = (obj, propsToValid, filterValue) => {
  let isValid = false;

  for (let i = 0; i < propsToValid.length; i++) {
    const value = obj[propsToValid[i]];
    if (value && value.toString().includes(filterValue)) return true;
  }

  return isValid;
};

// Создание объекта для начального состояния строк формы добавления человека
export const createInitObjForm = (arrayOfProps) => {
  const initObj = {};

  arrayOfProps.forEach((item) => {
    initObj[item] = '';
  });

  return initObj;
};

// Создание объекта для отображеня описания человека.
// Если в объекте отсутсвует требуемое значение, замение его
// значением по умолчанию
// obj - исходный объект
// defaultProps - значения по умолчанию для отсутсвующих значений
export const createDetailsObj = (obj, defaultProps) => {
  if (!obj) return obj;
  let detailObj = { ...defaultProps };

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      detailObj = { ...detailObj, [key]: createDetailsObj(obj[key], defaultProps[key]) };
      continue;
    }
    if (defaultProps[key]) {
      detailObj[key] = obj[key] || defaultProps[key];
    }
  }
  return detailObj;
};

// Получение списка отображаемых номеров страниц для пагинации
// currentPage - номер текущий страницы
// valuesCount - максимальное колличество страниц отображаемых за раз
// pageStep - "шаг" смены страницы
// maxValue - максимальная страница
export const getPaginationValues = (currentPage, valuesCount, pageStep, maxValue) => {
  // Определение первой отображаемой страницы
  let startedValue = currentPage - pageStep;

  // Если текущаяя страница меньше "шага" смены страниц
  // список начинается с первого элемента
  if (currentPage <= pageStep) {
    startedValue = 1;
  } else if (currentPage + pageStep >= maxValue) {
    startedValue = maxValue - valuesCount + 1;
  }

  // Колличество отображаемых элементов меняется,
  // если число страниц меньше, чем максимальное колличество
  // страниц отображаемое за раз
  valuesCount = maxValue < valuesCount ? maxValue : valuesCount;

  return Array(valuesCount)
    .fill(0)
    .map((_, index) => startedValue + index);
};
