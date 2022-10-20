import './App.css'
import Counter from './components/counter'
import Bombilla from './components/Bombilla'
import PasswordVisible from './components/PasswordVisible'


function App() {
 

  return (
    <>
      <div className="App">
        <Counter/>
        <Bombilla/>
       
      </div>

      <PasswordVisible/>
    </>
    
    
  )
}

export default App
