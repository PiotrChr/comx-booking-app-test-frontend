import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { withRouter } from '../utils'
import OfficeRepository from '../repository/officeRepository'
import { CCard, CCardBody, CTable, CTableRow, CTableHead, CTableBody, CTableHeaderCell, CButton } from '@coreui/react'
import BookingOverlay from '../components/bookingOverlay'

const officeRepository = new OfficeRepository()

export default withRouter(() => {
    const [offices, setOffices] = useState([])
    const [overlayOpened, setOverlayOpened] = useState(false)
    const [currentEntityId, setEntityId] = useState('')
    const [currentEntityName, setEntityName] = useState('')
    const entityType = 'office'

    const fetchOffices = () => {
        officeRepository.fetchAll()
        .then((data) => {
            setOffices(data)
        })
        .catch(error => console.error(error))
    }

    const handleBookButtonClick = (entityId, entityName) => {
        setEntityId(entityId)
        setEntityName(entityName)
        setOverlayOpened(true)
    }

    useEffect(() => {
        fetchOffices();
    }, [])

    return (
        <div>
            <CCard>
                <CCardBody>
                    <CTable>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell>Office id</CTableHeaderCell>
                                <CTableHeaderCell>Office name</CTableHeaderCell>
                                <CTableHeaderCell></CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {
                                offices.map((office, index) => (
                                    <CTableRow key={index}>
                                        <CTableHeaderCell>{ office.id }</CTableHeaderCell>
                                        <CTableHeaderCell>{ office.name }</CTableHeaderCell>
                                        <CTableHeaderCell>
                                            <CButton
                                                type="button"
                                                color="primary"
                                                onClick={() => handleBookButtonClick(office.id, office.name)}>
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
