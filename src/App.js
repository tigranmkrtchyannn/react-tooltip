import './App.css';
import MyTooltipe from "./Component/MyTooltipe"

function App() {
  return (
    <div className="App">
      <div className='components'>
          <MyTooltipe
          color="white"
          backgroundColor="purple"
          text="This is a button"
          position="top"
        >
          <button>Send</button>
        </MyTooltipe>
     </div>
     <div className='components'>
        <MyTooltipe text="this  is a paragraph" position="bottom" color="blue" backgroundColor="yellow">
         <p>The tooltip, also known as infotip or hint, is a common graphical user interface element in which, when hovering over a screen element or component, a text box displays information about that element,
         </p>
        </MyTooltipe>
      </div>
      <div className='components'>
        <MyTooltipe
          color="white"
          backgroundColor="orange"
          text="This is a heading"
          position="left"
        >
          <h2>What is Lorem Ipsum?</h2>
        </MyTooltipe>
        <div className='components'>
        <MyTooltipe
          text="This is a input"
          position="right"
        >
         <input/>
        </MyTooltipe>
        </div>
      </div>
    </div>
  );
}

export default App;
