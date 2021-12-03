import './App.css';

import Accaunt from './component/cards/account/Accaunt';
import Call from './component/cards/call/Call';
import Contact from './component/cards/contact/Contact';
import Review from './component/cards/review/Review';
import Videos from './component/cards/video/Videos';
import AdminCharts from './component/charts/AdminCharts';

function App() {
  return (
    <div className="App">
      <AdminCharts />
      <div className='row'>
        <div className='col'>
          <Review />
          <div className='row_2'>
            <div className='col'><Call /></div>
            <div className='col'><Accaunt /></div>
          </div>
        </div>
        <div className='col'>
          <Contact />
        </div>
        <div className='col'>
          <Videos />
        </div>
      </div>
    </div>
  );
}

export default App;
