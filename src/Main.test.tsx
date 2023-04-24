import { render, screen } from '@testing-library/react-native';

import { Main } from './Main';

describe('App component', () => {
  describe('Render method', () => {
    it('should render the default text', () => {
      render(<Main />);

      const text = screen.queryByText(/Open up App.js/);
      expect(text).toBeVisible();
    });
  });
});
