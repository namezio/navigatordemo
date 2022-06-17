import HTTPHelper from '../helpers/HTTPHelpers';

const ContactService = {
  async GetContact() {
    return await HTTPHelper.get('/Contact/Find');
  },
  async SearchforContact(key, per) {
    const params = {
      keyword: key,
      take: 20,
      skip: 0,
      IsPersonal: per,
    };
    let query = Object.keys(params)
      .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
      .join('&');
    return await HTTPHelper.get('/Contact/SearchForContact?' + query);
  },
  async AddContact(data) {
    return await HTTPHelper.post('/Contact/Add', data);
  },
  async InfoContact(id) {
    return await HTTPHelper.get('/Contact/Get?' + id);
  },
};
export default ContactService;
