import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './components/class-components'
import FunctionComponent from './components/function-components'
import ProductList from './components/products'

const dummyProductData = ['Product 1', 'Product 2', 'Product 3']

function App() {
  const [count, setCount] = useState(0)
  console.clear()
  return (
    <div>
      <h1>
        Duelurker
      </h1>
      {/* <button onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </button> */}
      <ClassComponent />
      <FunctionComponent />
      {/* <ProductList dummyProductData={dummyProductData} name="Duelurker" job="Student"/> */}
    </div>
  );
}

export default App;
