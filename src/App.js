import logo from './logo.svg';
import Layout from './layout';
import i18n from 'i18next';
import { useMoralis } from 'react-moralis';
import { useTranslation } from 'react-i18next';


function App() {

  const handelClick = (lang) => {
    i18n.changeLanguage(lang);
    console.log(handelClick, "sdj")
}
  return (
    <div className="">
    <Layout handelClick={handelClick} />
    </div>
  );
}

export default App;
