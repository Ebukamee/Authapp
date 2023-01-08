import Layout from './componets/Layout';
import React from 'react';
import './App.css';
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom';
import Test from './pages/Boundry';
import Error from './pages/notfound';
import Login from './pages/Login';
import { UserContext } from './componets/Context';
import Dashboard from './pages/Dashboard';
import { Helmet } from 'react-helmet';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {error: ""};
  }

  componentDidCatch(error) {
    this.setState({error: `${error.name}: ${error.message}`});
  }
  
  render() {
    const {error} = this.state;
    if (error) {
      return (

        <>
         <Helmet>
          <title>Error Page</title>
           <meta name="description" content="ErrorPage" />
          <link rel="canonical" href="/testError" />
        </Helmet>

        <div className='err'>
          <h2>Something went  Wrong !</h2>
          <button onClick={reload}>Reset Error</button>
        </div>
        </>
      );
    } else {
      return <>{this.props.children}</>;
    }
  }
}
const reload = () => {
   window.location.reload() 
   window.location.href='/'
}
function App() {
  return (
    <ErrorBoundary>
    <UserContext.Provider value="null">
    <Routes>
      <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='/testError' element={<Test />} />
      <Route path='/login' element={<Login />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Route>
    <Route path='*' element={<Error />} />
   </Routes>
    </UserContext.Provider>
   
    </ErrorBoundary>
  )
  }

export default App;
