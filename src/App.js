import './App.css';
import ListItem from './ListItem';
import Header from './Header'

function App() {

  const importantInfo = 'this is a string of important data'
  return (
    <div className="App">
      <p>This is the App.js Component</p>
      <ListItem name='First Item' importantInfo = {importantInfo}/>
      <Header importantInfo={importantInfo}/>
    </div>
  );
}

export default App;
