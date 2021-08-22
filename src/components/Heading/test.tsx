import Heading from '.';
import { CustomRender } from '../../utils/custom-render';
import { screen } from '@testing-library/react';

describe('<Heading />', () => {
  it('', () => {
    CustomRender(<Heading>Oi</Heading>);

    const element = screen.getByRole('heading', { name: /Oi/i });

    expect(element).toBeInTheDocument();
    expect(element).toHaveStyleRule('font-size', '5rem');
  });
});
