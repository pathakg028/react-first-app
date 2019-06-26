import React from 'react';
import logo from './logo.svg';
import './App.css';
//import SocialLinks from './components/SocialLinks';
//import Greetings from './components/Greetings';
import Notifications  from './components/Notifications';

// function App() {
//   const people = [
//     {
//       firstName: 'Sara',
//       lastName: 'Hegdal',
//       city: 'Hawaii',
//     },
//     {
//       firstName: 'Cahal',
//       lastName: 'Louis',
//       city: 'Jakarta',
//     },  
//     {
//       firstName: 'Edite',
//       lastName: 'Williams',
//       city: 'Perth',
//     }
//   ]
//   const name = 'Universe'
//   const selection = Math.random();
//   const check = selection > 0.5
//   const imageClass = check ? "App-logo  App-logo-small " : "App-logo "
//   const hours = new Date().getHours()



//     const day = hours < 10 ? "morning" : ((hours > 10) && (hours < 16) ? "afternoon" : "evening")
//   return (
//     <div className="App">
//       <header className = {"App-header " + day}>
//       <SocialLinks />
//       <Notifications />
//         <img src={logo} alt="logo" className = {imageClass} />
//         <p>
//           Greetings, {check ? name : 'World'}!
//         </p>
//         {check && <p>You are lucky!</p>}
//         {people.map((item, index) => (
//            <Greetings key={index} name={item.firstName} city={item.city} />
//          ))}
//       </header>

//     </div>
//   );
// }
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function getStatus()
{
  return getRandomInt(4);
}
function App() {
  const status = getStatus();
  const text = 'This is a status message'; 

  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <Notifications message={text} status={status}/>

    </div>
  );
}

export default App;
