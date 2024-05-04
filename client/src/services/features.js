import Api from '@/services/api'

export default {

  async heartbeat () {
    try {
      await Api().get(`heartbeat`);
      return true;
    } catch (error) {
      return false;
    }
  },

  async stats () {
    return Api().get(`stats`)
    .then(response => response.data)
  },

}
