import HTTPHelper from '../helpers/HTTPHelpers';

const ContactService = {
  async GetContact() {
    return await HTTPHelper.get('/Contact/Find');
  },
  async SearchforContact(key) {
    return await HTTPHelper.get('/Contact/SearchForContact?Keyword=' + key);
  },
};
export default ContactService;
