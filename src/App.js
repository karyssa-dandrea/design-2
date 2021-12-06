import './App.css';
import Main from '../src/components/main/Main';
import Editor from '../src/components/editor/Editor';
import Preview from '../src/components/preview/Preview';

function App() {
  return (
    <div className="App">
      <Main />
      <Editor />
      <Preview />
    </div>
  );
}

export default App;
