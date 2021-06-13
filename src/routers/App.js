import { ChakraProvider, Spinner } from "@chakra-ui/react";
import Home from "../containers/home/Home";
import styled from "styled-components";
import AuthRouter from "./AuthRouter";
import DetailPelis from "../containers/movies/DetailPelis";
import Profile from "../containers/profile/Profile";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect
} from 'react-router-dom';
import firebase from "firebase";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import { startLoadingMovies } from "../actions/movieAction";
import { login } from "../actions/authActions";

const Carga = styled(Spinner)`
     display:block;
     margin-left:auto;
     margin-right:auto;
`

export const App = () => {

  const dispatch = useDispatch()

  const [checking, setChecking] = useState(true)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      dispatch(startLoadingMovies())
      if (user?.uid) {
        dispatch(login(user.id, user.displayName))
        setIsLoggedIn(true)
        // dispatch(startLoadingUsers(user.uid))
      } else {
        setIsLoggedIn(false)
      }
      setChecking(false);

    });

  }, [dispatch, setChecking, setIsLoggedIn])

  if (checking) {
    return (
      <div>
        <Carga animation="border" role="status">
          <span className='sr-only'>Loading...</span>
        </Carga>
      </div>
    )
  }

  return (
    <ChakraProvider>
      <Router>
        
        <Switch>
          <Route exact path='/home' component={Home} />
          <PublicRouter path='/auth' component={AuthRouter}
            isAuthenticated={isLoggedIn} />
          <PrivateRouter path='/profile' component={Profile}
            isAuthenticated={isLoggedIn} />
          <Route path='/description/:peliId' component={DetailPelis} />
          {/* <Route exact path='/home' component={Home} />
          <PublicRouter path='/auth' component={AuthRouter}
          />
          <PrivateRouter path='/profile' component={Profile}
          />
          <Route path='/description/:peliId' component={DetailPelis} /> */}
          <Redirect to="/home" />
        </Switch>
      </Router>
    </ChakraProvider>
  );
}
