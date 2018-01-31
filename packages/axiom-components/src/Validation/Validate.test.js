import React from 'react';
import { mount } from 'enzyme';
import Validate from './Validate';
import Validation from './Validation';

const patterns = [ /[A-Z]/, /[0-9]/ ];
const validValue = 'Valid1';
const invalidValue = 'invalid';
const errorValidation = 'Error Validation';
const errorValidate1 = 'Error Validate 1';
const errorValidate2 = 'Error Validate 2';

const handleSubmit = (e, getUpdatedValidation, cbValidation) => {
  cbValidation(getUpdatedValidation());
};

const render = ({
  value1,
  value2,
  cbValidation = () => {},
  cbValidate1 = () => null,
  cbValidate2 = () => null,
} = {}) =>
  mount(
    <Validation requiredError={ errorValidation }>
      { (getUpdatedValidation) => (
        <form onSubmit={ (e) => handleSubmit(e, getUpdatedValidation, cbValidation) }>
          <Validate
              error={ () => errorValidate1 }
              patterns={ patterns }
              required
              value={ value1 }>{ cbValidate1 }</Validate>
          <Validate
              error={ () => errorValidate2 }
              patterns={ patterns }
              required
              value={ value2 }>{ cbValidate2 }</Validate>
        </form>
      ) }
    </Validation>
  );

describe('Validation', () => {
  describe('Validation', () => {
    describe('getUpdatedValidation', () => {
      test('unmet validations', () => {
        render({
          cbValidation: (error) => expect(error).toBe(errorValidation),
        }).find('form').simulate('submit');
      });

      test('met validations', () => {
        render({
          value1: validValue,
          value2: validValue,
          cbValidation: (error) => expect(error).toBe(null),
        }).find('form').simulate('submit');
      });
    });

    describe('validationError', () => {
      test('unmet required validation', () => {
        render({
          cbValidation: (error) => expect(error).toBe(errorValidation),
        }).find('form').simulate('submit');
      });

      test('unmet first pattern validation', () => {
        render({
          value1: invalidValue,
          value2: invalidValue,
          cbValidation: (error) => expect(error).toBe(errorValidation),
        });
      });

      test('unmet second pattern validation', () => {
        render({
          value1: validValue,
          value2: invalidValue,
          cbValidation: (error) => expect(error).toBe(errorValidate2),
        });
      });

      test('met validations', () => {
        render({
          value1: validValue,
          value2: validValue,
          cbValidation: (error) => expect(error).toBe(null),
        }).find('form').simulate('submit');
      });
    });
  });

  describe('Validate', () => {
    describe('getValidity', () => {
      test('unmet required validation', () => {
        let isValid1;
        let isValid2;
        const component = render({
          cbValidate1: (isValid) => isValid1 = isValid,
          cbValidate2: (isValid) => isValid2 = isValid,
        });
        component.find('form').simulate('submit');
        component.update();

        expect(isValid1).toBe(false);
        expect(isValid2).toBe(false);
      });

      test('unmet previous pattern validation', () => {
        let isValid1;
        let isValid2;
        const component = render({
          value1: invalidValue,
          value2: invalidValue,
          cbValidate1: (isValid) => isValid1 = isValid,
          cbValidate2: (isValid) => isValid2 = isValid,
        });
        component.find('form').simulate('submit');
        component.update();

        expect(isValid1).toBe(false);
        expect(isValid2).toBe(true);
      });

      test('met previous pattern validation', () => {
        let isValid1;
        let isValid2;
        const component = render({
          value1: validValue,
          value2: invalidValue,
          cbValidate1: (isValid) => isValid1 = isValid,
          cbValidate2: (isValid) => isValid2 = isValid,
        });
        component.find('form').simulate('submit');
        component.update();

        expect(isValid1).toBe(true);
        expect(isValid2).toBe(false);
      });

      test('met validation', () => {
        let isValid1;
        let isValid2;
        const component = render({
          value1: validValue,
          value2: validValue,
          cbValidate1: (isValid) => isValid1 = isValid,
          cbValidate2: (isValid) => isValid2 = isValid,
        });
        component.find('form').simulate('submit');
        component.update();

        expect(isValid1).toBe(true);
        expect(isValid2).toBe(true);
      });
    });

    test('hasMetRequired', () => {
      let hasMetRequired1;
      let hasMetRequired2;
      const component = render({
        value1: validValue,
        cbValidate1: (_, hasMetRequired) => hasMetRequired1 = hasMetRequired,
        cbValidate2: (_, hasMetRequired) => hasMetRequired2 = hasMetRequired,
      });
      component.find('form').simulate('submit');
      component.update();

      expect(hasMetRequired1).toBe(true);
      expect(hasMetRequired2).toBe(false);
    });

    test('checkPatternMet', () => {
      let hasMetPattern1;
      let hasMetPattern2;
      const component = render({
        value1: validValue,
        value2: invalidValue,
        cbValidate1: (_1, _2, checkPatternMet) => hasMetPattern1 = checkPatternMet(patterns[0]),
        cbValidate2: (_1, _2, checkPatternMet) => hasMetPattern2 = checkPatternMet(patterns[0]),
      });
      component.find('form').simulate('submit');
      component.update();

      expect(hasMetPattern1).toBe(true);
      expect(hasMetPattern2).toBe(false);
    });
  });
});
