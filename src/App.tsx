import './App.css'
import Footer from './components/Footer'
import Headre from './components/Headre'
import ProductList from './components/ProductList'

function App() {

  return (
    <div className="flex mx-auto bg-gray-300">
      <div className='w-full'>
        <Headre/>
      </div>

<ProductList/>

      <Footer/>
    </div>
  )
}

export default App
