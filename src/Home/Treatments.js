import React, { useState, children } from 'react'
import Modal from '../Modal';
// import Treatment from './Treatment';
import { DataTreatments } from '../Data/DataTreat'
import { Buttons, ContainerDiv, DescritionDiv, AllTreatmentsUL, BookButton, InfoButton } from './Styling/StylingTreatments'
const Treatments = ({ modalOpen, setModalOpen }) => {

    const [selected, setSelected] = useState([])

    const handleClick = (i) => {
        setSelected(i)
    }

    return (
        <ContainerDiv id="behandlingar">
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
                        <Buttons>
                            <InfoButton
                                onClick={() => {
                                    setModalOpen(true)
                                    handleClick(i)
                                }
                                }
                            >Mer info</InfoButton>
                            <BookButton
                                onClick={() => window.open("https://www.bokadirekt.se/places/feel-great-25951", "_blank")}
                            >Boka</BookButton>
                        </Buttons>
                    </li>

                ))}
                <Modal modalOpen={modalOpen} onClose={() => setModalOpen(false)} selected={selected}>
                    <h2>{selected.name}</h2>
                    <p>{selected.detailedDescription}</p>
                    <ul>
                        <li>

                        </li>
                    </ul>
                </Modal>
            </AllTreatmentsUL>

        </ContainerDiv >
    )
}

export default Treatments