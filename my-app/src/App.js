import css from './App.module.css';
import NavBarForm from './components/NavBarForm';
// import NavBarSimple from './components/NavBarSimple';

function App() {
  return (
    <div className={css.App}>
      <NavBarForm/>
      {/* Add you components here */}
      {/* <Sidebar/> */}
      {/* <NavBarSimple/> */}
    </div>
  );
}

export default App;