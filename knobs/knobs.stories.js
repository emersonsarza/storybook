import React from "react";
import { 
  withKnobs, 
  text, 
  boolean, 
  number,
  color,
  object,
  array,
  select,
  radios,
  optionsKnob as options,
  files,
  date,
  button
} from "@storybook/addon-knobs";

import './knobs.style.css';

export default {
  title: "Knobs",
  decorators: [withKnobs]
};

const Card = ({value}) => <div className="card">{value}</div>
export const KnobsDetails = () => (<div></div>)

const GROUP_ONE = 'GROUP-ID1';
const GROUP_TWO = 'GROUP-ID2';

export const Text = () => {
  const label = 'Message';
  const value = text(label, 'No Group - Added to Other tab');
  const value1 = text(label, `Sample text in  ${GROUP_ONE}`, GROUP_ONE);
  const value2 = text(label, `Sample text in  ${GROUP_TWO}`, GROUP_TWO);
  return (
    <div className='container'>
      <Card value={value1} />
      <Card value={value2} />
      <Card value={value} />
    </div>
  )
}

export const Boolean = () => {

  const label = 'Show Even Numbers';
  const defaultValue = false;
  const even = boolean(label, defaultValue);
  const numbers = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className='container'> 
      {
        numbers.filter(number => number % 2 === (even ? 0 : 1)).map(number => (
          <Card value={number} />
        ))
      }
    </div>
  )
}

export const Number = () => {
  const label = 'Temperature';
  const options = {
    range: false,
    min: 0,
    max: false,
    step: 1,
  };

  const options_range = {
    range: true,
    min: 0,
    max: 10,
    step: 2
  }

  const no_option = number(label, 0, {}, "No Options");
  const with_option_range_false = number(label, 5, options, "With Option Range False");
  const with_option_range_true = number(label, 2, options_range, "With Option Range True");
  return (
    <div className='container'>
      <Card value={no_option} />
      <Card value={with_option_range_false} />
      <Card value={with_option_range_true} />
    </div>
  )
}

export const Color = () => {

  const label = 'Color';
  const defaultValue = '#ff00ff';
  
  const value = color(label, defaultValue);
  return (
    <div className='container'>
      <Card value={value} />
      <div className="card" style={{backgroundColor: value}}></div>
    </div>
  )
}

export const KnobsObject = () => {
  // Make sure to enter valid JSON syntax while editing values inside the knob.
  const label = 'Styles';
  const defaultValue = {
    color: 'red',
    fontSize: "12px",
  };
  const value = object(label, defaultValue);
  return (
    <div className='container'> 
      <div className="card" style={value}>
        Make sure to enter valid JSON syntax while editing values inside the knob.
      </div>
      <Card value={JSON.stringify(value)} />
    </div>
  )
}

export const Array = () => {
  
  const values = array("Array", [1,2,3]);
  return (
    <div>
      <div className='container'> 
        {values.map(val => (
          <Card value={val} />
        ))}
      </div>
    </div>
  )
}

export const Select = () => {
  const label = 'Colors';
  const options = {
    Red: 'red',
    Blue: 'blue',
    Object: {
      R: '255',
      G: '255',
      B: 255,
    },
    Array: ['red', 'orange', 'etc'],
    None: null,
  };
  const defaultValue = 'red';

  const value = select(label, options, defaultValue);
  return (
    <div className='container'> 
      <Card value={JSON.stringify(value)} />
    </div>
  )
}

export const Options = () => {
  const label = 'Fruits';
  const display = {
    radio: "radio",
    inlineRadio: "inline-radio",
    check: "check",
    inlineCheck: "inline-check",
    select: "select",
    multiSelect: "multi-select",
  }
  const valuesObj = {
    A: 'A',
    B: 'B',
    C: 'C',
  };
  const optionsObj = {
    display: select("Display", display, "radio"),
  };

  const value = options(label, valuesObj, [], optionsObj);
  return (
    <div className='container'>
      <Card value={value} />
    </div>
  )
}

export const RadioButtons = () => {
  
const label = 'Fruits';
const option =  {
  A: 'A',
  B: 'B',
  C: 'C',
};
const defaultValue = 'kiwi';

const value = radios(label, option, defaultValue);
  return (
    <div className='container'> 
      <Card value={value} />
    </div>
  )
}

export const Files = () => {
  const label = 'Images';
  const accept = options(
    "File Extentions",
    {
      JPEG: ".jpeg",
      PDF: ".pdf",
      PNG: ".png",
    },
    ".jpeg",
    {display: "multi-select"}
  );
  const defaultValue = [];

  files(label, accept, defaultValue);
  return (
    <div className='container'> 
        <div className='card'>
          
        </div>
    </div>
  )
}

export const Dates = () => {

  const label = 'Event Date';
  const defaultValue = new Date();
  const value = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(date(label, defaultValue))
  return (
    <div className='container'> 
      <Card value={value} />
    </div>
  )
}

let ctr = 0;
export const Button = () => {
  button("Increment", () => ctr++);
  button("Reset", () => ctr = 0);
  return (
    <div className='container'> 
      <Card value={ctr} />
    </div>
  )
}