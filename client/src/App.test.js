import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider} from 'react-redux'
import store from './store'


describe('Unit Testing of App',() => {
  it('renders learn react link', () => {
    render(<Provider store={store}><App /></Provider>);
    const linkElement = screen.getByTestId("App");
    expect(linkElement).toBeInTheDocument();
  });
  
})
