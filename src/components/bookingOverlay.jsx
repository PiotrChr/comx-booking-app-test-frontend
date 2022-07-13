import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from '../utils'
import BookingRepository from '../repository/bookingRepository'
import { CCard, CCardBody, CCardHeader, CForm, CFormGroup} from '@coreui/react'

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
            booked_until: until
        })
        .then(() => {
            // Close
        })
        .catch(() => {
            // Display some error
        })
    }, [from, until])

    useEffect(() => {
        fetchBookedSlots()
    }, [])


    return (
        <CCard>
            <CCardHeader>Booking Overlay</CCardHeader>
            <CCardBody>
                <h3>Booking: { props.entityName }</h3>
                <div className='mb-2'>
                    <p>Currently booked for:</p>
                    { 
                        bookedSlots.map(bookedSlot, index) => (
                            <p>
                                <strong>from:</strong> {bookedSlot.booked_from}
                                <strong>until:</strong> {bookedSlot.booked_until}
                            </p>
                        ) 
                    }
                </div>
                <div>
                    <CForm className="form-horizontal">
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="hf-name">Start date:</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput
                                    type="date"
                                    id="hf-from"
                                    name="hf-from"
                                    onChange={e => setFrom(e.target.value)}
                                    value={from}
                                />
                            </CCol>
                        </CFormGroup>
                        <CFormGroup row>
                            <CCol md="3">
                                <CLabel htmlFor="hf-name">Start date:</CLabel>
                            </CCol>
                            <CCol xs="12" md="9">
                                <CInput
                                    type="date"
                                    id="hf-until"
                                    name="hf-until"
                                    onChange={e => setUntil(e.target.value)}
                                    value={until}
                                />
                            </CCol>
                        </CFormGroup>
                    </CForm>
                </div>
            </CCardBody>
            <CCardFooter>
                <CButton type="submit" onClick={onSubmit} size="sm" color="primary"><CIcon name="cil-scrubber" /> Submit</CButton>
            </CCardFooter>
        </CCard>
    )
}

BookingOverlay.propTypes = {
    entityType: PropTypes.string,
    entityId: PropTypes.number,
    entityName: PropTypes.string
}