import { createStore }  from 'redux';
import reducer from './reducers';
import { Provider } from 'react-redux';

export default createStore(reducer);
