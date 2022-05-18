import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Providers from 'components/foundation/Providers';
import '@testing-library/jest-dom';
import ArrowIcon from '../Arrow';
import FunctionalIcon from './FunctionalIcon';

describe('FunctionalIcon', () => {
  it('passes its icon name as a title with the first letter capitalized', () => {
    render(
      <Providers>
        <FunctionalIcon iconName="iconNameTest">
          <ArrowIcon />
        </FunctionalIcon>
      </Providers>
    );

    const title = screen.getByTitle('IconNameTest');
    expect(title).toBeInTheDocument();
  });

  it('overrides the icon name when given a titleTextReplacement prop', () => {
    render(
      <Providers>
        <FunctionalIcon
          iconName="iconNameTest"
          titleTextReplacement="Something Else"
        >
          <ArrowIcon />
        </FunctionalIcon>
      </Providers>
    );

    const failedTitle = screen.queryByTitle('IconNameTest');
    expect(failedTitle).not.toBeInTheDocument();

    const title = screen.getByTitle('Something Else');
    expect(title).toBeInTheDocument();
  });

  it('calls its onClick function', async () => {
    const onClick = jest.fn(() => {});
    const user = userEvent.setup();

    render(
      <Providers>
        <FunctionalIcon
          iconName="iconNameTest"
          onClick={onClick}
        >
          <ArrowIcon />
        </FunctionalIcon>
      </Providers>
    );

    const title = screen.getByTitle('IconNameTest');
    expect(title).toBeInTheDocument();

    await user.click(title);
    expect(onClick).toBeCalledTimes(1);

    // await user.keyboard('{Enter}');
    // expect(onClick).toBeCalledTimes(2);
  });

  it('adds its extraClass prop as a class', () => {
    const extraClass = 'extraClassTest';
    render(
      <Providers>
        <FunctionalIcon
          iconName="iconNameTest"
          extraClass={extraClass}
        >
          <ArrowIcon />
        </FunctionalIcon>
      </Providers>
    );

    const title = screen.getByTitle('IconNameTest');
    expect(title).toBeInTheDocument();

    const icon = title.closest('svg');
    expect(icon).toHaveClass(extraClass);
  });
});
