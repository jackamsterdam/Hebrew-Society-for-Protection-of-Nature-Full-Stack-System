import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../../HomeArea/Home/Home';
import AddTrek from '../../TrekArea/AddTrek/AddTrek';
import TrekList from '../../TrekArea/TrekList/TrekList';
import PageNotFound from '../PageNotFound/PageNotFound';

function Routing(): JSX.Element {
    return (
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/" element={<Navigate to='/home'/>}/>

          <Route path="/trek-list" element={<TrekList/>}/>
          <Route path="/add-trek" element={<AddTrek/>}/>


          <Route path="*" element={<PageNotFound/>} />
        </Routes>
    );
}

export default Routing;
