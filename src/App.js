import './App.css';
import NekoFetch from './module/fetch';
import StickyHeadTable from './module/fetch/data-items';

function App() {
  return (
    <div className="App">
      <NekoFetch />
      <StickyHeadTable />
    </div>
  );
}

export default App;
