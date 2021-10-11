import './App.css';
import { Provider } from 'react-redux';
import MainComponent from './components/MainComponent';
import myStore from './redux/store';

function App() {
  return (
    <div>
      <Provider store={myStore}>
        <MainComponent></MainComponent>
      </Provider>
      
    </div>
  );
}

export default App;
