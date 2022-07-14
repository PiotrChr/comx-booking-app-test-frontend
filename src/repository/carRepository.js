import { AbstractApiRepository } from './abstractApiRepository';

export default class CarRepository extends AbstractApiRepository {
  apiUrl = 'car';

  async fetchAll() {
    return await this.fetchJson(this.apiUrl);
  }
}
