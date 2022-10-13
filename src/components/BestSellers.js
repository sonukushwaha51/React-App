import axios from "axios";
import React, { useEffect,  useState } from "react";

function BestSellers(props) {
    const [product, setProduct] = useState([
        // {
        //     id : 1234,
        //     name: "Harry"
        // }
    ])
    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then(pr => {
        //     setProduct(pr)
        // }).catch((res) => {console.log(res.message)}); 

        //axios
        axios.get('https://jsonplaceholder.typicode.com/users').then(pr => {
            setProduct(pr.data)
        }).catch((res) => {console.log(res.message)});  
    },[])
    return(
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="bestsellers-main-block">
                        <div className="bestsellers-main-heading mt-4">
                            <h1 className="bestsellers-heading">BEST SELLERS</h1>
                        </div>
                        <div className="bestsellers-main-content-block mt-3">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 col-sm-9 col-md-12">
                                        <div className="product-lists">
                                            <div className="product">
                                                <p>{props.names.name}</p>
                                                <p>{props.timer.value}</p>
                                                <button onClick={props.handleclick}>Click here to remove props</button>
                                                {product.map((pr) => {
                                                    return(
                                                        <div key={pr.id} className="col-md-4 col-lg-4">
                                                            <div className="product-name">{pr.name}</div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default BestSellers;