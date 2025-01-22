import React from 'react';
import Card from './components/Card';
import TraininProgramme from "./components/TrainingProgramme";
import DashBoard from "./components/DashBoard";
import Text from "./components/Text";
import "../styles/style.css";
import Ongoing from './components/Ongoing';
const App = () => {
  return (
    <div>
      {/* <Card />
      <Text /> */}
      {/* <TraininProgramme /> */}
      {/* <DashBoard /> */}
      <Ongoing />
    </div>
  );
}

export default App;
