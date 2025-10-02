import DesigStudio from './scenes/Design/DesigStudio';
import Works from './scenes/HowItworks/Works';
import Navbar from './scenes/Navbar';



const App = () => {
  return (
    <div>
      <Navbar/>
      <DesigStudio 
      title="Design "
      subt="Studio"
      description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
      />
      <Works/>
    </div>
  )
}

export default App