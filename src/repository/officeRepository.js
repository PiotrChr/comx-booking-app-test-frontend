import { AbstractApiRepository } from './abstractApiRepository';

export default class OfficeRepository extends AbstractApiRepository {
  apiUrl = 'office';

  async fetchAll() {
    return await this.fetchJson(this.apiUrl);
  }
}
