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
  }, [props]);

  return (
    <Fragment>
      <LoadingBar/>
      <Nav />
      <div className="container">
          {
            props.loading === true 
              ? null
              : (
              <Routes>
                <Route exact path='/' element={<Dashboard/>} />
                <Route path='/questions/:id' element={<QuestionPage/>} />
                <Route exact path='/leaderboard' element={<Leaderboard />} />
                <Route exact path='/add' element={<NewQuestion />} />
                <Route path="*" element={<PageNotFound/>} />
                <Route exact path="/login" element={<LoginPage/>}/>
              </Routes>
            )
          }
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ questions }) => ({
  loading: questions === null,
});

export default connect(mapStateToProps)(App);
