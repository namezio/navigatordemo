import HTTPHelper from '../helpers/HTTPHelpers';

const ContactService = {
  async GetContact() {
    return await HTTPHelper.get('/Contact/Find');
  },
};
export default ContactService;
