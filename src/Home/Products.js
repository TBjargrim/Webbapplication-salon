import React from 'react'
import { ContainerDiv, ProductUL, TopDiv } from './Styling/StylingProducts'
import { DataProducts } from '../Data/DataProducts'
const Products = () => {


    return (
        <ContainerDiv id="produkter">
            <TopDiv>
                <h2>Produkter</h2>
                <p>Vi använder oss av produkter som vi vet är de bästa på marknaden. </p>
            </TopDiv>
            <ProductUL>
                {DataProducts.map((i) => (
                    <li key={i.id}>
                        <img src={i.image} alt='Treatments' />
                        <div>
                            <h5>{i.name}</h5>
                            {/* <p>{i.desciption}</p> */}
                        </div>
                    </li>
                ))}
            </ProductUL>

        </ContainerDiv>
    )
}

export default Products