import axios from 'axios'
import React, { useEffect, useState, useCallback } from 'react'
import { withRouter } from '../utils'
import BookingRepository from '../repository/bookingRepository'
import { CCard, CCardBody, CTable, CTableRow, CTableHead, CTableBody, CTableHeaderCell, CButton } from '@coreui/react'
import BookingOverlay from '../components/bookingOverlay'
import config from '../config'

const bookingsRepository = new BookingRepository()

export default withRouter(() => {
    const [bookings, setBookings] = useState([]);
    
    const fetchBookings = () => {
        bookingsRepository.fetchAllByUser({user_id: config.user_id})
        .then((data) => {
            setBookings(data)
        })
        .catch(error => console.error(error))
    }

    useEffect(() => {
        fetchBookings();
    }, [])

    return (
        <div>
            <CCard>
                <CCardBody>
                    <CTable>
                        <CTableHead>
                            <CTableRow>
                                <CTableHeaderCell>Booking id</CTableHeaderCell>
                                <CTableHeaderCell>Entity name</CTableHeaderCell>
                                <CTableHeaderCell>Entity id</CTableHeaderCell>
                                <CTableHeaderCell>From</CTableHeaderCell>
                                <CTableHeaderCell>To</CTableHeaderCell>
                                <CTableHeaderCell>Created at</CTableHeaderCell>
                            </CTableRow>
                        </CTableHead>
                        <CTableBody>
                            {
                                bookings.map((booking, index) => (
                                    <CTableRow key={index}>
                                        <CTableHeaderCell>{ booking.id }</CTableHeaderCell>
                                        <CTableHeaderCell>{ booking.entity_type }</CTableHeaderCell>
                                        <CTableHeaderCell>{ booking.entity_id }</CTableHeaderCell>
                                        <CTableHeaderCell>{ booking.booked_from }</CTableHeaderCell>
                                        <CTableHeaderCell>{ booking.booked_until }</CTableHeaderCell>
                                        <CTableHeaderCell>{ booking.date_created }</CTableHeaderCell>
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
