import { AbstractApiRepository } from './abstractApiRepository';
import config from '../config'

export default class BookingRepository extends AbstractApiRepository {
    apiUrl = `bookings`

    async fetchAll() {
        return await this.fetchJson(this.apiUrl)
    }

    async fetchAllByUser() {
        return await this.fetchJson(this.apiUrl, {user_id: config.user_id}) // Temporarily hardcoded user_id
    }

    async fetchBookingForId(entityType, entityId) {
        return await this.fetchJson(this.apiUrl + '/' + entityType + '/' + entityId)
    }

    async addBooking(bookingData) {
        return await this.postJson(this.apiUrl, bookingData)
    }
}
