import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { withRouter } from '../utils'
import CarRepository from '../repository/carRepository'
import { CCard, CCardBody, CTable, CTableRow, CTableHead, CTableBody, CTableHeaderCell, CButton } from '@coreui/react'
import BookingOverlay from '../components/bookingOverlay'

const carRepository = new CarRepository()

export default withRouter(() => {
    const [cars, setCars] = useState([])
    const [overlayOpened, setOverlayOpened] = useState(false)
    const [currentEntityId, setEntityId] = useState('')
    const [currentEntityName, setEntityName] = useState('')
    const entityType = 'car'

    const fetchCars = () => {
        carRepository.fetchAll()
        .then((data) => {
            setCars(data)
        })
        .catch(error => console.error(error))
    }

    const handleBookButtonClick = (entityId, entityName) => {
        setEntityId(entityId)
        setEntityName(entityName)
        setOverlayOpened(true)
    }

    useEffect(() => {
        fetchCars();
    }, [])

    return (
        <div>
            <CCard>
                <CCardBody>
                    <CTable>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell>Car id</CTableHeaderCell>
                                <CTableHeaderCell>Car name</CTableHeaderCell>
                                <CTableHeaderCell></CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {
                                cars.map((car, index) => (
                                    <CTableRow key={index}>
                                        <CTableHeaderCell>{ car.id }</CTableHeaderCell>
                                        <CTableHeaderCell>{ car.name }</CTableHeaderCell>
                                        <CTableHeaderCell>
                                            <CButton
                                                type="button"
                                                color="primary"
                                                onClick={() => handleBookButtonClick(car.id, car.name)}>
                                                    Check and book
                                            </CButton>
                                            </CTableHeaderCell>
                                    </CTableRow>
                                ))
                            }
                        </CTableBody>
                    </CTable>
                </CCardBody>
            </CCard>
            { overlayOpened && <BookingOverlay entityType={entityType} entityId={currentEntityId} entityName={currentEntityName} clickHandler={ () => { setOverlayOpened(false) }}/> }
        </div>
    )
})
