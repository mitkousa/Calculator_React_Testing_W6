import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it(`calculator adds two numbers`, () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const buttonAdd = container.find('#operator_add');
    const buttonEqual = container.find('#operator-equals')
    button1.simulate('click');
    buttonAdd.simulate('click');
    button4.simulate('click');
    buttonEqual.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('5');
  })

  it('calculator can subtract two numbers', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const buttonSubtract = container.find('#operator-subtract');
    const buttonEqual = container.find('#operator-equals');
    button7.simulate('click');
    buttonSubtract.simulate('click');
    button4.simulate('click');
    buttonEqual.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('calculator can multiply two numbers', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const buttonMultiply = container.find('#operator-multiply');
    const buttonEqual = container.find('#operator-equals');
    button3.simulate('click');
    buttonMultiply.simulate('click');
    button5.simulate('click');
    buttonEqual.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('15');
  })

  it('calculator can divide two numbers', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const buttonDivide = container.find('#operator-divide');
    const buttonEqual = container.find('#operator-equals');
    button2.simulate('click');
    button1.simulate('click');
    buttonDivide.simulate('click');
    button7.simulate('click');
    buttonEqual.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('3');
  })

  it('calculator can concatenate multiple number button clicks', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    button2.simulate('click');
    button1.simulate('click');
    button7.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('217');
  })

  it('calculator can chain multiple operations together', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const button7 = container.find('#number7');
    const buttonAdd = container.find('#operator_add');
    const buttonEqual = container.find('#operator-equals');
    const buttonSubtract = container.find('#operator-subtract');
    button2.simulate('click');
    buttonAdd.simulate('click');
    button1.simulate('click');
    buttonEqual.simulate('click');
    buttonSubtract.simulate('click');
    button7.simulate('click');
    buttonEqual.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('-4');
  })

  it(`calculator can clear the running total without affecting the calculation`, () => {
    const button2 = container.find('#number2');
    const button4 = container.find('#number4');
    const buttonAdd = container.find('#operator_add');
    const buttonEqual = container.find('#operator-equals')
    const buttonClear = container.find('#clear')
    button2.simulate('click');
    buttonAdd.simulate('click');
    button4.simulate('click');
    buttonEqual.simulate('click');
    const runningTotal = container.find('#running-total');
    expect(runningTotal.text()).toEqual('6');
    buttonClear.simulate('click');
    expect(runningTotal.text()).toEqual('0');
  })

})

