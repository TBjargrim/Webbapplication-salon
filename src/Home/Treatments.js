import React from 'react'
import { DataTreatments } from '../Data/DataTreat'
import { ContainerDiv, DescritionDiv } from './Styling/StylingTreatments'
const Treatments = () => {


    return (
        <ContainerDiv>
            <DescritionDiv>
                <h2>Behandlingar</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse arcu mi venenatis, convallis vitae fames tempus.</p>
            </DescritionDiv>
            <ul>
                {DataTreatments.map((i) => (
                    <li key={i.id}>
                        <img src={i.image} />
                        <h5>{i.name}</h5>
                        <p>{i.desciption}</p>
                        <button>Mer info</button>
                    </li>
                ))}
            </ul>
        </ContainerDiv>
    )
}

export default Treatments