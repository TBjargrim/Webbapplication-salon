import React from 'react'

import { ContainerDiv, WrapperDiv, ArrowDown } from './Styling/StylingStart'
const Start = () => {


    return (
        <ContainerDiv id="hem">
            <WrapperDiv>
                <h1>FEEL GREAT BEAUTY</h1>
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse arcu mi venenatis, convallis vitae fames tempus. Pretium enim ut velit arcu feugiat id. Nec ut et urna, eget posuere aliquet nibh ut vulputate. Eu aliquam, laoreet lacus, aliquam.</h5>
                <button
                    onClick={() => window.open("https://www.bokadirekt.se/places/feel-great-25951", "_blank")}
                >Boka nu </button>
            </WrapperDiv>
            <ArrowDown />
        </ContainerDiv>
    )
}

export default Start









