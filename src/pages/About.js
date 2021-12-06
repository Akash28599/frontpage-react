import React from 'react';

import { Layout } from '../layout';

const lorem =
  'You can get everything in life you want if you will just help enough other people get what they want.';
const elements = [
  'one',
  'two',
  'three',
  'four',
  'five',
  'six',
  'seven',
  'eight',
  'nine',
  'ten',
];

const About = () => (
  <Layout>
    <h1 className='text-2xl'>About Page</h1>
    <ul>
      {elements.map((value, index) => {
        return (
          <li key={index} className='p-5'>
            {value}: {lorem}
          </li>
        );
      })}
    </ul>
  </Layout>
);

export default About;