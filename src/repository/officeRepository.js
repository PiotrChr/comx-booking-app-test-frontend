import { AbstractApiRepository } from './abstractApiRepository';

export default class OfficeRepository extends AbstractApiRepository {
  apiUrl = 'office';

  async fetchAll() {
    return this.fetchJson(this.apiUrl);
  }
}
