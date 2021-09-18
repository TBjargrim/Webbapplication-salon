import React, { useState, children, useEffect } from 'react'
import Modal from '../Modal';
// import Treatment from './Treatment';
import { DataTreatments } from '../Data/DataTreat'
import { Buttons, ContainerDiv, DescritionDiv, AllTreatmentsUL, BookButton, InfoButton } from './Styling/StylingTreatments'
import { ModalH2, ModalDiv,ModalButton } from '../Modal'
const Treatments = ({ modalOpen, setModalOpen }) => {

    const [selected, setSelected] = useState([])
    const markedTreatments = selected.detailedDescription;

    const handleClick = (i) => {
        setSelected(i)
    }

    // console.log(selected)


    useEffect(() => {

        // console.log(markedTreatments)
    }, [selected]);
    return (
        <ContainerDiv id="behandlingar">
            <DescritionDiv>
                <h2>Behandlingar</h2>
                <p>Erbjuder ett stort utbud av professionella behandlingar. Från de mest klassiska till mer avancerade behandlingar.</p>
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
                <Modal  modalOpen={modalOpen} onClose={() => setModalOpen(false)} children={children}>
                    <ModalDiv key={selected.id}>
                    <ModalH2>{selected.name}</ModalH2>
                        {markedTreatments &&
                            <div key={markedTreatments.id} >
                                {markedTreatments.map(i => (
                                <div key={markedTreatments.id}>
                                    <h5> {i.name} </h5>
                                    <p> {i.describe}</p>
                                    <h6> {i.list}</h6>
                                    <p> <span>{i.extra}</span></p>
                                </div>
                            ))}</div>
                        }
                    </ModalDiv>
                    <ModalButton
                        onClick={() => window.open("https://www.bokadirekt.se/places/feel-great-25951", "_blank")}
                    >Boka</ModalButton>

                </Modal>
            </AllTreatmentsUL>

        </ContainerDiv >
    )
}

export default Treatments