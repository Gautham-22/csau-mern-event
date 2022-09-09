import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Textcard from './components/Textcard';
import Postform from './components/Postform';
import { useState } from 'react';

function App() {
   const [showModal, setShowModal] = useState(true);

   return (
      <>
         <div className="App">
            <div>
               <Navbar status={setShowModal} cur={showModal} />
               <div className="cards">
                  <Card imglink="https://picsum.photos/seed/picsum/200/300" />
                  <Card imglink="https://picsum.photos/seed/picsum/200/300" />
                  <Card imglink="https://picsum.photos/seed/picsum/200/300" />
                  <Card imglink="https://picsum.photos/seed/picsum/200/300" />
                  <Card imglink="https://picsum.photos/seed/picsum/200/300" />
                  <Textcard title="Hello world" caption="#welcome" />
                  <Textcard title="Hello world" caption="#welcome" />
                  <Textcard title="Hello world" caption="#welcome" />
                  <Textcard title="Hello world" caption="#welcome" />
               </div>
            </div>
         </div>
         <>{showModal && <Postform status={setShowModal} cur={showModal} />}</>
      </>
   );
}

export default App;
