/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Heading from './index';

describe('Heading', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });

  afterEach(() => {
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('render', () => {
    act(() => {
      render(<Heading type="h1" />, container);
    });

    expect(container?.innerHTML).toBeDefined();
  });

  it('render with children', () => {
    act(() => {
      render(<Heading type="h1">test jest</Heading>, container);
    });

    expect(container?.textContent).toBe('test jest');
  });

  it('render with props size="h3"', () => {
    act(() => {
      render(<Heading type="h3" />, container);
    });

    expect(container?.querySelector('h3')).not.toBeNull();
  });
});
