import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { withRouter } from '../utils'
import OfficeRepository from '../repository/officeRepository'
import { CCard, CCardBody, CTable, CTableRow, CTableHead, CTableBody, CTableHeaderCell, CButton } from '@coreui/react'

const officeRepository = new OfficeRepository()

export default withRouter(() => {
    const [offices, setOffices] = useState([])

    const fetchOffices = () => {
        officeRepository.fetchAll()
        .then((data) => {
            setOffices(data)
        })
        .catch(error => console.error(error))
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
                                <CTableRow>
                                    <CTableHeaderCell>{ office.id }</CTableHeaderCell>
                                    <CTableHeaderCell>{ office.name }</CTableHeaderCell>
                                    <CTableHeaderCell><CButton type="button" color="primary">Check and book</CButton></CTableHeaderCell>
                                </CTableRow>
                            ))
                        }
                    </CTableBody>
                </CTable>
            </CCardBody>
        </CCard>
        </div>
    )
})
