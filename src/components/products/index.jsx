import { useEffect, useState } from "react";
import ProductItem from "./components/product-item"
import "./style.css"

const initialState = true

const ProductList = ({ name, job, dummyProductData }) => {


    const [flag, setFlag] = useState(initialState)
    const [count, setCount] = useState(0)
    const [changeStyle, setChangeStyle] = useState(false)
    const handleToggleText = () => {
        setFlag(!flag)
    }

    useEffect(() => {
        setFlag(!flag)
        console.log('run only once');
        return (() => {
            console.log(`component is unmounted -> some side effects here also`);
        })
    }, []) //will only run on page load once
    const handleCount = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        if (count === 10) {
            setChangeStyle(true)
        }
    }, [count])
    return (
        <div>
            <h2 className="title">E-Commerce Project</h2>
            <button onClick={handleToggleText}>Toggle Text</button>
            {/* <ProductItem /> */}
            {flag ? (
                <><h3>Name : {name}</h3>
                    <h3>Job : {job}</h3></>
            ) : (
                <h3>Hello World</h3>
            )}
            <div>
                <button style={{ backgroundColor: changeStyle ? 'black' : 'whitesmoke', color: changeStyle ? 'whitesmoke' : 'black' }} onClick={handleCount}>Increase Count</button>
                <p>Count is {count}</p>
            </div>
            <ul>
                {dummyProductData.map((item, index) => (
                    <ProductItem singleProductItem={item} key={index} />
                ))}
            </ul>
        </div >)
}
export default ProductList