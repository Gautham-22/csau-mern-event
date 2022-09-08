import './App.css';
import Navbar from './Navbar';
import Card from './Card';
import Textcard from './Textcard';
import Postform from './Postform';
import { useState } from "react";

function App(props) {

  let dis;
  const [showImg, setShowImg] = useState(true);

  if(showImg) {
    dis = <Postform />;
  }
  else {
    dis = <div></div>
  }
  return (
    <div className="App">
      <div class="bclass">
      <Navbar status={setShowImg} cur={showImg} />
      <div class="cards">
        <Card imglink="https://upload.wikimedia.org/wikipedia/commons/5/57/Shri_Virat_Kohli_for_Cricket%2C_in_a_glittering_ceremony%2C_at_Rashtrapati_Bhavan%2C_in_New_Delhi_on_September_25%2C_2018_%28cropped%29.JPG"/>
        <Textcard title="Hello world" caption="#welcome"/>
        <Card />
        <Textcard />
        <Card />
        <Card />
        <Card />
        <Textcard />
      </div>
      </div>
      <div>{dis}</div>
    </div>
  );
}

export default App;
