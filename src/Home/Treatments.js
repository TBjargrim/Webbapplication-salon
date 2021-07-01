import React from 'react'
import { DataTreatments } from '../Data/DataTreat'
import { ContainerDiv, DescritionDiv, AllTreatmentsUL, BookButton, InfoButton } from './Styling/StylingTreatments'
const Treatments = () => {


    return (
        <ContainerDiv>
            <DescritionDiv>
                <h2>Behandlingar</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse arcu mi venenatis, convallis vitae fames tempus.</p>
            </DescritionDiv>
            <AllTreatmentsUL>
                {DataTreatments.map((i) => (
                    <li key={i.id}>

                        <img src={i.image} alt='Treatments' />
                        <div>
                            <h5>{i.name}</h5>
                            <p>{i.desciption}</p>
                        </div>
                        <InfoButton>Mer info</InfoButton>
                        <BookButton>Boka</BookButton>
                    </li>
                ))}
            </AllTreatmentsUL>
        </ContainerDiv>
    )
}

export default Treatments