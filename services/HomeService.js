import HTTPHelper from '../helpers/HTTPHelpers';

const HomeService = {
  async initApplication(baseUrl) {
    return await HTTPHelper.get(baseUrl + '/RestApi/Home/InitApplication');
  },
};
export default HomeService;
