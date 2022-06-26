/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './FunctionalIcon.stories';

const { Basic, TitleTextReplacement, ExtraClass } = composeStories(stories);

describe('FunctionalIcon', () => {
  it('passes its icon name as a title with the first letter capitalized', () => {
    render(<Basic {...Basic.args} />);

    const title = screen.getByTitle('IconNameTest');
    expect(title).toBeInTheDocument();
  });

  it('overrides the icon name when given a titleTextReplacement prop', () => {
    render(<TitleTextReplacement {...TitleTextReplacement.args} />);

    const failedTitle = screen.queryByTitle('IconNameTest');
    expect(failedTitle).not.toBeInTheDocument();

    const title = screen.getByTitle('Something Else');
    expect(title).toBeInTheDocument();
  });

  it('calls its onTrigger function', async () => {
    const onTrigger = jest.fn(() => {});
    const user = userEvent.setup();

    render(
      <Basic
        {...Basic.args}
        onTrigger={onTrigger}
      />
    );

    const title = screen.getByTitle('IconNameTest');
    expect(title).toBeInTheDocument();

    await user.click(title);
    expect(onTrigger).toBeCalledTimes(1);

    const icon = title.closest('svg');
    if (icon != null) {
      icon.focus();
      await user.keyboard('{Enter}');
      expect(onTrigger).toBeCalledTimes(2);
      await user.keyboard(' ');
      expect(onTrigger).toBeCalledTimes(3);
    } else {
      expect(icon).toBeInTheDocument();
    }
  });

  it('adds its extraClass prop as a class', () => {
    const extraClass = 'extraClassTest';
    render(<ExtraClass {...ExtraClass.args} />);

    const title = screen.getByTitle('IconNameTest');
    expect(title).toBeInTheDocument();

    const icon = title.closest('svg');
    expect(icon).toHaveClass(extraClass);
  });
});
