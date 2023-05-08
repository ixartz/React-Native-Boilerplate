import { render, screen } from '@testing-library/react-native';

import { Welcome } from './Welcome';

describe('App component', () => {
  describe('Render method', () => {
    it('should render the default text', () => {
      render(<Welcome />);

      const text = screen.queryByText(/Open up App\//);
      expect(text).toBeVisible();
    });
  });
});
