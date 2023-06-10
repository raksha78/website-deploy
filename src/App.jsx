import './App.css';
import SkipToMain from './SkipToMain';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState('Home');

  return (
    <div className="app">
      <SkipToMain setPage={setPage} />
      <Header setPage={setPage} />
      <Main page={page} setPage={setPage} />
      <Footer setPage={setPage} />
    </div>
  );
}

export default App;
