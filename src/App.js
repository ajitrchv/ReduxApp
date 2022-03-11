import { Fragment } from 'react';

import Counter from './components/Counter';
import Header from './components/Header.js';
import Auth from './components/Auth.js';
//import userProfile from './components/UserProfile.js'
import {useSelector} from 'react-redux'
//import { authActions } from './store/index.js'
import UserProfile from './components/UserProfile.js';


//dev

function App() {
  //const dispatch =  useDispatch();
  const isAuth = useSelector(state => state.Auth.isAuthentiacated);

  return (
    <Fragment>
      <Header/>
     {!isAuth && <Auth/>}
     {isAuth && <UserProfile/>}
      <Counter />
    </Fragment>
    
  );
}

export default App;
