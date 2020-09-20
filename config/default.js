/*
 For the test task all services looks to the same mock server. Do not pay attention on that.
*/
const MOCK_SERVER = 'b24b202e-cc1f-4520-acdf-9af7d1f7196f.mock.pstmn.io';

module.exports = {
  port: 3003,
  host: 'localhost',
  crm: {
    host: MOCK_SERVER,
    fetchConcurrency: 3,
    waitForRetry: 3000,
  },
  oms: {
    host: MOCK_SERVER,
  },
  inventory: {
    host: MOCK_SERVER,
  }
};
