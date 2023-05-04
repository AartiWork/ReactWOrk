import React, { useState } from 'react';
import KeyboardShortcutProvider from './KeyboardShortcutProvider';
import KeyboardShortcut from './KeyboardShortcut';
import ActiveShortcuts from './ActiveShortcuts';


const App = () => {
  let yellow = '#ffc800';
  let orange = '#A020F0';
  let purple = '#ff0000';

  const [bgColorA, setBgColorA] = useState(yellow);
  const [bgColorB, setBgColorB] = useState(orange);
  const [bgColorC, setBgColorC] = useState(purple);

   
 function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

  return (
    <>
 
    <KeyboardShortcutProvider>

<div className="container">
  <div className="row ">
    <div id="myDiv" className="col-6"  
    style={{
      height: "40vh",
        width: "40vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      backgroundColor: bgColorA,
    }}>

      Component A
    </div>
    <KeyboardShortcut combo="ctrl a" callback={() => { document.getElementById("myDiv").style.backgroundColor = getRandomColor(); }} description="Turns to some random color for Component Ar" />

    <div id="myDivB" className="col-6" style={{
      height: "40vh",
        width: "40vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      backgroundColor:  bgColorB
    }}>
      Component B
    </div>
    <KeyboardShortcut combo="ctrl b" callback={() => { document.getElementById("myDivB").style.backgroundColor = getRandomColor(); }}  description="Turns to some random color for Component B" />

    <div className="w-100 d-none d-md-block"></div>

    <div id="myDivC" className="col-6" style={{
      height: "40vh",
        width: "40vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       backgroundColor:  bgColorC
      }}>
      Component C
    </div>
    <KeyboardShortcut combo="shift a" callback={() => { document.getElementById("myDivC").style.backgroundColor = getRandomColor(); }}  description="Turns to some random color for Component C" />



    <div className="col-6">
    <h3 className="mt-2 p-1"> Keyboard Shortcut </h3>
      <ul>
      <li>  ctrl a - Turns to some random color for Component A</li>
      <li>  ctrl b - Turns to some random color for Component B</li>
      <li>  shift a - Turns to some random color for Component C  </li>
    </ul>
      {/*<ActiveShortcuts />*/}
    </div>
  </div>
</div>

     
    </KeyboardShortcutProvider>
    </>
  );
};

export default App;


