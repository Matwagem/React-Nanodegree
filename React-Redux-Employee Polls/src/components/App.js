import logo from '../layout/logo.svg';
import '../layout/App.css';
import { useEffect, Fragment } from 'react';
import { handleInitialData } from "../actions/shared";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import NewQuestion from './NewQuestion';
import QuestionPage from './QuestionPage';
import PageNotFound from './PageNotFound';
import Leaderboard from './Leaderboard';
import LoadingBar from 'react-redux-loading-bar';
import Nav from './Nav';

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar/>
      <Nav />
      <div className="container">
          {
            props.loading === true ? null : (
              <Routes>
                <Route path="/" exact element={<LoginPage/>}/>
                <Route exact path='/home' element={<Dashboard />} />
                <Route path='/questions/:id' element={<QuestionPage/>} />
                <Route exact path='/leaderboard' element={<Leaderboard />} />
                <Route exact path='/add' element={<NewQuestion />} />
                <Route element={<PageNotFound/>} />
              </Routes>
            )
          }
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
