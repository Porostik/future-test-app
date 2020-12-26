import {
  getDisplayedObj,
  changeSortValueObj,
  isObjValid,
  createDetailsObj,
  getPaginationValues,
} from './index';
import { sortTypes, displayedProps, detailsDefaultProps } from 'constants.js';

describe('utils', () => {
  describe('`getDisplayedObj` function', () => {
    test('should return empty obj', () => {
      const startObj = {
        firstName: 'Name',
        lastName: 'LastName',
        email: 'test@ya.ru',
      };
      const displayedProps = [];

      expect(getDisplayedObj(startObj, displayedProps)).toEqual({});
    });

    test('should return obj whith props from displayed array', () => {
      const startObj = {
        firstName: 'Name',
        lastName: 'LastName',
        email: 'test@ya.ru',
      };
      const displayedProps = ['firstName', 'email'];

      expect(getDisplayedObj(startObj, displayedProps)).toEqual({
        firstName: 'Name',
        email: 'test@ya.ru',
      });
    });
  });

  describe('`changeSortValueObj` function', () => {
    test('should return sort obj with new name and type', () => {
      const sortValue = {};
      const newSortValue = 'id';
      const expectedSortObj = { name: 'id', type: sortTypes.decreace };
      expect(changeSortValueObj(sortValue, newSortValue)).toEqual(expectedSortObj);
    });

    test('should return sort obj whith new type', () => {
      const sortValue = { name: 'id', type: sortTypes.decreace };
      const newValue = 'id';
      const expectedSortObj = { name: 'id', type: sortTypes.increace };
      expect(changeSortValueObj(sortValue, newValue)).toEqual(expectedSortObj);
    });
  });

  describe('`isObjValid` function', () => {
    test('should return false when object dont have valid props', () => {
      const obj = {
        id: 10,
        firstName: 'Name',
      };

      expect(isObjValid(obj, displayedProps, 'Test')).toBeFalsy();
    });

    test('should return true when object is have one or more valid props', () => {
      const obj = {
        id: 10,
        firstName: 'firstName',
        secondName: 'secondName',
      };

      expect(isObjValid(obj, displayedProps, 'Name')).toBeTruthy();
    });
  });

  describe('`createDetailsObj` function', () => {
    test('should return obj whith new props', () => {
      const testObject = {
        id: 101,
        firstName: 'Sue',
        lastName: 'Corson',
        email: 'DWhalley@in.gov',
        phone: '(612)211-6296',
        address: {
          streetAddress: '9792 Mattis Ct',
          city: 'Waukesha',
          state: 'WI',
          zip: '22178',
        },
        description: 'et lacus magna dolor...',
      };

      const expectedObj = {
        firstName: 'Sue',
        lastName: 'Corson',
        description: 'et lacus magna dolor...',
        address: {
          streetAddress: '9792 Mattis Ct',
          city: 'Waukesha',
          state: 'WI',
          zip: '22178',
        },
      };

      expect(createDetailsObj(testObject, detailsDefaultProps)).toEqual(expectedObj);
    });

    test('should return object with default props', () => {
      const testObject = {
        id: 101,
        firstName: 'Sue',
        lastName: 'Corson',
        email: 'DWhalley@in.gov',
        phone: '(612)211-6296',
        address: undefined,
        description: undefined,
      };

      const expectedObj = {
        ...detailsDefaultProps,
        firstName: 'Sue',
        lastName: 'Corson',
      };

      expect(createDetailsObj(testObject, detailsDefaultProps)).toEqual(expectedObj);
    });

    test('should return falsy', () => {
      const testObj = undefined;

      expect(createDetailsObj(testObj, detailsDefaultProps)).toBeFalsy();
    });
  });

  describe('`getPaginationValues` function', () => {
    test('should return pages numbers from 1 to 10', () => {
      const currentPage = 1;
      const valuesCount = 10;
      const pageStep = 4;
      const maxValue = 20;

      const expectedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

      expect(getPaginationValues(currentPage, valuesCount, pageStep, maxValue)).toEqual(
        expectedArray,
      );
    });

    test('should return pages from 1 to 5', () => {
      const currentPage = 1;
      const valuesCount = 10;
      const pageStep = 4;
      const maxValue = 5;

      const expectedArray = [1, 2, 3, 4, 5];

      expect(getPaginationValues(currentPage, valuesCount, pageStep, maxValue)).toEqual(
        expectedArray,
      );
    });

    test('should return pages from 11 to 20', () => {
      const currentPage = 15;
      const valuesCount = 10;
      const pageStep = 4;
      const maxValue = 20;

      const expectedArray = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

      expect(getPaginationValues(currentPage, valuesCount, pageStep, maxValue)).toEqual(
        expectedArray,
      );
    });
  });
});
