import React from 'react';
import { render } from '@testing-library/react';
import SkillCard from './SkillCard';

describe('SkillCard', () => {
  test('render SkillCard component with title', () => {
    const title = 'Test text';
    const content = 'Test content';
    const { getByText } = render(<SkillCard title={title} content={content} />);
    expect(getByText(title)).toBeInTheDocument();
  });
});
