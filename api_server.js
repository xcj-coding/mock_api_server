var api_server = require('./index')

api_server.run();

api_server.ajax({
  url:'/test',
  type: 'get',
  res: {
    ok: 'yes',
    err: 'no'
  }
});

api_server.ajax({
  url:'/test1',
  type: 'get',
  res: {
    ok: 'yes',
    err: 'no'
  }
});

api_server.ajax({
  url:'/test2',
  type: 'get',
  res: {
    ok: 'yes',
    err: 'no'
  }
});
api_server.ajax({
  url:'/test3',
  type: 'get',
  res: {
    ok: 'yes',
    err: 'no'
  }
});

