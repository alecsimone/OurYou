/* eslint-disable react/jsx-props-no-spreading */
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from './PrivacyDropdown.stories';

const { Basic } = composeStories(stories);

describe('PrivacyDropdown', () => {
  it('Renders the initial privacy value', async () => {
    render(<Basic {...Basic.args} />);

    const select = screen.getByDisplayValue('Private');
    expect(select).toBeInTheDocument();
  });

  it('Allows the user to select a different value', async () => {
    const user = userEvent.setup();
    const selectPrivacy = jest.fn(() => {});
    render(
      <Basic
        {...Basic.args}
        selectPrivacy={selectPrivacy}
      />
    );

    const option = screen.getByText('Public');
    expect(option).toBeInTheDocument();

    const select = option.closest('select');
    expect(select).toBeInTheDocument();

    if (select == null) return;

    await user.selectOptions(select, 'Private');

    expect(select).toHaveValue('Private');
  });
});
