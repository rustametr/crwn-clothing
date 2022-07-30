import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home'
import Navigation from './routes/navigation/navigation'
import SignIn from './routes/sign_in/sign_in'

const Shop = () => {
  return <h1>Some</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Home/>} />
        <Route path='shop' element={<Shop/>} />
        <Route path='signIn' element={<SignIn/>} />
      </Route>
    </Routes>
  );
}

export default App;


