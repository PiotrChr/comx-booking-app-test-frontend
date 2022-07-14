import React, { useCallback, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from '../utils'
import BookingRepository from '../repository/bookingRepository'
import {
    CCard, CCardBody, CCardHeader, CForm, CFormGroup, CInputGroup, CCol, CLabel, CFormLabel, CFormInput, CCardFooter, CButton
} from '@coreui/react'
import config from '../config'

const bookingRepository = new BookingRepository()

const BookingOverlay = (props) => {
    const [bookedSlots, setBookedSlots] = useState([])
    const [from, setFrom] = useState('')
    const [until, setUntil] = useState('')
    
    const fetchBookedSlots = () => {
        bookingRepository.fetchBookingForId(props.entityType, props.entityId)
        .then((data) => {
            setBookedSlots(data)
        })
        .catch(error => console.error(error))
    }

    const onSubmit = useCallback(() => {
        bookingRepository.addBooking({
            entity_type: props.entityType,
            entity_id: props.entityId,
            booked_from: from,
            booked_until: until,
            user_id: config.user_id
        })
        .then(() => {
            window.alert('Booked') // Replace with neater message box
            props.clickHandler()
        })
        .catch(() => {
            // Display some error
        })
    }, [from, until])

    const onClose = () => {
        props.clickHandler()
    }

    useEffect(() => {
        fetchBookedSlots()
    }, [])

    return (
        <div className='screenOverlay'>
            <CCard className="bookingOverlay">
                <CCardHeader>Booking Overlay</CCardHeader>
                <CCardBody>
                    <h3>Booking: { props.entityName }</h3>
                    <div className='mb-2'>
                        <p>Currently booked for:</p>
                        { 
                            bookedSlots.map((bookedSlot, index) => (
                                <p key={index}>
                                    <strong>from:</strong> {bookedSlot.booked_from}
                                    <strong>until:</strong> {bookedSlot.booked_until}
                                </p>
                            )) 
                        }
                    </div>
                    <div>
                        <CForm className="form-horizontal">
                            <CInputGroup>
                                <CCol md="3">
                                    <CFormLabel htmlFor="hf-from">Start date:</CFormLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CFormInput
                                        type="datetime-local"
                                        id="hf-from"
                                        name="hf-from"
                                        onChange={e => setFrom(e.target.value)}
                                        value={from}
                                    />
                                </CCol>
                            </CInputGroup>
                            <CInputGroup>
                                <CCol md="3">
                                    <CFormLabel htmlFor="hf-until">End date:</CFormLabel>
                                </CCol>
                                <CCol xs="12" md="9">
                                    <CFormInput
                                        type="datetime-local"
                                        id="hf-until"
                                        name="hf-until"
                                        onChange={e => setUntil(e.target.value)}
                                        value={until}
                                    />
                                </CCol>
                            </CInputGroup>
                        </CForm>
                    </div>
                </CCardBody>
                <CCardFooter>
                    <CButton type="submit" className="mr-3" onClick={onSubmit} size="sm" color="primary">Submit</CButton> <CButton type="button" onClick={onClose} size="sm" color="primary">Close</CButton>
                </CCardFooter>
            </CCard>
        </div>
    )
}

BookingOverlay.propTypes = {
    entityType: PropTypes.string,
    entityId: PropTypes.number,
    entityName: PropTypes.string,
    clickHandler: PropTypes.func
}

export default BookingOverlay