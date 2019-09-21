import apiHelper from './apiHelper';

export default function Initiative(apiUrl) {
  this.apiUrl = apiUrl;

  this.create = function (attributes) {
    const url = `${this.apiUrl}/initiative`;
    const body = {
      data: {
        type: "initiative",
        attributes
      }
    };
    return apiHelper.post(url, body);
  };

  this.list = function (filters, sorting, limit, skip) {
    const url = `${this.apiUrl}/initiative`;
    return apiHelper.get(url, filters, sorting, limit, skip);
  };

  this.get = function (id) {
    const url = `${this.apiUrl}/initiative/${id}`;
    return apiHelper.get(url);
  };

  this.update = function (id, attributes) {
    const url = `${this.apiUrl}/initiative/${id}`;
    const body = {
      data: {
        type: "initiative",
        attributes
      }
    };
    return apiHelper.patch(url, body);
  };

  this.delete = function (id) {
    const url = `${this.apiUrl}/initiative/${id}`;
    return apiHelper.delete(url);
  };

  // MEMBERS
  this.memberCreate = function (initiativeId, attributes) {
    const url = `${this.apiUrl}/initiative/${initiativeId}/member`;
    const body = {
      data: {
        type: "member",
        attributes
      }
    };
    return apiHelper.post(url, body);
  };

  this.memberList = function (initiativeId, filters, sorting, limit, skip) {
    const url = `${this.apiUrl}/initiative/${initiativeId}/member`;
    return apiHelper.get(url, filters, sorting, limit, skip);
  };

  this.memberGet = function (initiativeId, memberId) {
    const url = `${this.apiUrl}/initiative/${initiativeId}/member/${memberId}`;
    return apiHelper.get(url);
  };

  this.memberUpdate = function (initiativeId, memberId, attributes) {
    const url = `${this.apiUrl}/initiative/${initiativeId}/member/${memberId}`;
    const body = {
      data: {
        type: "member",
        attributes
      }
    };
    return apiHelper.patch(url, body);
  };

  this.memberDelete = function (initiativeId, memberId) {
    const url = `${this.apiUrl}/initiative/${initiativeId}/member/${memberId}`;
    return apiHelper.delete(url);
  };

  // DONATIONS
  this.donationCreate = function (initiativeId, attributes) {
    const url = `${this.apiUrl}/initiative/${initiativeId}/donation`;
    const body = {
      data: {
        type: "donation",
        attributes
      }
    };
    return apiHelper.post(url, body);
  };

  this.donationList = function (initiativeId, filters, sorting, limit, skip) {
    const url = `${this.apiUrl}/initiative/${initiativeId}/donation`;
    return apiHelper.get(url, filters, sorting, limit, skip);
  };

  this.donationGet = function (initiativeId, donationId) {
    const url = `${this.apiUrl}/initiative/${initiativeId}/donation/${donationId}`;
    return apiHelper.get(url);
  };

  this.donationUpdate = function (initiativeId, donationId, attributes) {
    const url = `${this.apiUrl}/initiative/${initiativeId}/donation/${donationId}`;
    const body = {
      data: {
        type: "donation",
        attributes
      }
    };
    return apiHelper.patch(url, body);
  };

  this.donationDelete = function (initiativeId, donationId) {
    const url = `${this.apiUrl}/initiative/${initiativeId}/member/${donationId}`;
    return apiHelper.delete(url);
  };


}
