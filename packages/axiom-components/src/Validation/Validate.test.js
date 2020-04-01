import React from 'react';
import { mount } from 'enzyme';
import Validate from './Validate';
import Validation from './Validation';
import TextInput from '../Form/TextInput';

const patterns = [/[A-Z]/, /[0-9]/];
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
    <Validation requiredError={errorValidation}>
      {getUpdatedValidation => (
        <form
          onSubmit={e => handleSubmit(e, getUpdatedValidation, cbValidation)}
        >
          <Validate
            error={() => errorValidate1}
            patterns={patterns}
            required
            value={value1}
          >
            {cbValidate1}
          </Validate>
          <Validate
            error={() => errorValidate2}
            patterns={patterns}
            required
            value={value2}
          >
            {cbValidate2}
          </Validate>
        </form>
      )}
    </Validation>
  );

describe('Validation', () => {
  describe('Validation', () => {
    describe('getUpdatedValidation', () => {
      test('unmet validations', () => {
        render({
          cbValidation: error => expect(error).toBe(errorValidation),
        })
          .find('form')
          .simulate('submit');
      });

      test('met validations', () => {
        render({
          value1: validValue,
          value2: validValue,
          cbValidation: error => expect(error).toBe(null),
        })
          .find('form')
          .simulate('submit');
      });
    });

    describe('validationError', () => {
      test('unmet required validation', () => {
        render({
          cbValidation: error => expect(error).toBe(errorValidation),
        })
          .find('form')
          .simulate('submit');
      });

      test('unmet first pattern validation', () => {
        render({
          value1: invalidValue,
          value2: invalidValue,
          cbValidation: error => expect(error).toBe(errorValidation),
        });
      });

      test('unmet second pattern validation', () => {
        render({
          value1: validValue,
          value2: invalidValue,
          cbValidation: error => expect(error).toBe(errorValidate2),
        });
      });

      test('met validations', () => {
        render({
          value1: validValue,
          value2: validValue,
          cbValidation: error => expect(error).toBe(null),
        })
          .find('form')
          .simulate('submit');
      });
    });
  });

  describe('Validate', () => {
    describe('on first render with required set to false', () => {
      let wrapper;
      let registerMock;
      let unregisterMock;
      const uniqueId = '123-456';

      jest.mock('uuid', () => {
        return jest.fn().mockImplementation(uniqueId => {
          return { uniqueId };
        });
      });

      beforeEach(() => {
        registerMock = jest.fn();
        unregisterMock = jest.fn();
        const context = {
          registerValidate: registerMock,
          unregisterValidate: unregisterMock,
          getValidity: () => true,
          checkRequiredMet: () => true,
        };
        wrapper = wrapper = mount(
          <Validate required={false}>{() => <TextInput />}</Validate>,
          { context }
        );
      });

      test('does not call register validator', () => {
        expect(registerMock).toHaveBeenCalledTimes(0);
      });

      describe('when the required prop is changed to true', () => {
        beforeEach(() => {
          wrapper.setProps({ required: true });
          wrapper.update();
        });

        test('calls registerValidator with 2 args', () => {
          expect(registerMock).toHaveBeenCalledTimes(1);
          expect(registerMock.mock.calls[0].length === 2);
        });

        test('Validate id is the 2nd argument', () => {
          expect(registerMock.mock.calls[0][1] === uniqueId);
        });

        describe('when the required prop is changed back to false', () => {
          beforeEach(() => {
            wrapper.setProps({ required: false });
            wrapper.update();
          });

          test('calls unregisterValidate with 2 args', () => {
            expect(unregisterMock).toHaveBeenCalledTimes(1);
            expect(unregisterMock.mock.calls[0].length === 2);
          });

          test('Validate id is the 2nd argument', () => {
            expect(unregisterMock.mock.calls[0][1] === uniqueId);
          });
        });
      });
    });

    describe('getValidity', () => {
      test('unmet required validation', () => {
        let isValid1;
        let isValid2;
        const component = render({
          cbValidate1: isValid => (isValid1 = isValid),
          cbValidate2: isValid => (isValid2 = isValid),
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
          cbValidate1: isValid => (isValid1 = isValid),
          cbValidate2: isValid => (isValid2 = isValid),
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
          cbValidate1: isValid => (isValid1 = isValid),
          cbValidate2: isValid => (isValid2 = isValid),
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
          cbValidate1: isValid => (isValid1 = isValid),
          cbValidate2: isValid => (isValid2 = isValid),
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
        cbValidate1: (_, hasMetRequired) => (hasMetRequired1 = hasMetRequired),
        cbValidate2: (_, hasMetRequired) => (hasMetRequired2 = hasMetRequired),
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
        cbValidate1: (_1, _2, checkPatternMet) =>
          (hasMetPattern1 = checkPatternMet(patterns[0])),
        cbValidate2: (_1, _2, checkPatternMet) =>
          (hasMetPattern2 = checkPatternMet(patterns[0])),
      });

      component.update();

      expect(hasMetPattern1).toBe(true);
      expect(hasMetPattern2).toBe(false);
    });
  });
});
