import { AbstractApiRepository } from './abstractApiRepository';

export default class CarRepository extends AbstractApiRepository {
  apiUrl = 'car';

  async fetchAll() {
    return this.fetchJson(this.apiUrl);
  }
}
