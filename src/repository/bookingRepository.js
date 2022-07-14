import { AbstractApiRepository } from './abstractApiRepository';
import config from '../config';

export default class BookingRepository extends AbstractApiRepository {
  apiUrl = 'bookings';

  async fetchAll() {
    return this.fetchJson(this.apiUrl);
  }

  async fetchAllByUser() {
    return this.fetchJson(this.apiUrl, { user_id: config.user_id }); // Temporarily hardcoded user_id
  }

  async fetchBookingForId(entityType, entityId) {
    return this.fetchJson(`${this.apiUrl}/${entityType}/${entityId}`);
  }

  async addBooking(bookingData) {
    return this.postJson(this.apiUrl, bookingData);
  }
}
