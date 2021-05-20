import React, { createElement } from 'react';

interface Props {
  type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
}

const Heading: React.FC<Props> = ({ type, className, children }) => createElement(type, { className }, children);

export default Heading;
