import { AbstractApiRepository } from './abstractApiRepository';

export default class BookingRepository extends AbstractApiRepository {
    apiUrl = `bookings`

    async fetchAll() {
        return await this.fetchJson(this.apiUrl)
    }

    async addBooking(bookingData) {
        return await this.putJson(this.apiUrl, bookingData)
    }
}
