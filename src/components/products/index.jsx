import ProductItem from "./components/product-item"
import "./style.css"



const ProductList = ({name, job, dummyProductData}) => {

    const flag = true;

    return ( <div>
        <h2 className="title">E-Commerce Project</h2>
        {/* <ProductItem /> */}
        {flag ? (   
            <><h3>Name : {name}</h3>
            <h3>Job : {job}</h3></>
        ) : (
            <h3>Hello World</h3>
        )}
        
        <ul>
            {dummyProductData.map((item, index)=>(
                <ProductItem singleProductItem = {item} key={index} />
            ))}
        </ul>
    </div>)
}
export default ProductList