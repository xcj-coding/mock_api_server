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

api_server.ajax({
  url:'/h5nc/anchorTask/getRoomTaskList',
  title: '获取任务列表',
  request: {
  },
  type: 'get',
  res: {
    ok: {
      error: 0,
      data: [
        {
          audit_remark:"",
          gift_icon:"https://hmr.dz11.com/upload/dygift/5cd4c6f741b80b6f628c1420b0e5579b.png",
          gift_id:"99",
          gift_num:"10",
          inst_id:"115",
          task_name:"你必得",
          task_status:"2",
        },
        {
          audit_remark:"",
          gift_icon:"https://hmr.dz11.com/upload/dygift/5cd4c6f741b80b6f628c1420b0e5579b.png",
          gift_id:"100",
          gift_num:"10",
          inst_id:"116",
          task_name:"你必得",
          task_status:"3",
        },
        {
          audit_remark:"",
          gift_icon:"https://hmr.dz11.com/upload/dygift/5cd4c6f741b80b6f628c1420b0e5579b.png",
          gift_id:"101",
          gift_num:"10",
          inst_id:"117",
          task_name:"你必得",
          task_status:"2",
        },
      ]
    },
    err: {
      error: 100,
      data: 'get ajax错误'
    }
  }
});
api_server.ajax({
  url:'/h5nc/anchorTask/addTaskInst',
  title: '添加任务',
  request: {
    _task_name: '任务名字',
    _gift_num: 12,
    _gift_id: 12
  },
  type: 'post',
  res: {
    ok: {
      error: 0,
      data: '添加成功'
    },
    err: {
      error: 100,
      data: '添加失败'
    },
  }
});
api_server.ajax({
  url:'/h5nc/anchorTask/delTaskInst',
  title: '删除任务',
  request: {
    _inst_id: 2
  },
  type: 'post',
  res: {
    ok: {
      error: 0,
      data: '删除成功'
    },
    err: {
      error: 100,
      data: '删除失败'
    },
  }
});
api_server.ajax({
  url:'/h5nc/anchorTask/editTaskInst',
  title: '编辑任务',
  request: {
    _inst_id:115,
    _gift_id:65,
    _gift_num:10
  },
  type: 'post',
  res: {
    ok: {
      error: 0,
      data: 'edit成功'
    },
    err: {
      error: 100,
      data: 'edit失败'
    },
  }
});
api_server.ajax({
  url:'/h5nc/anchorTask/checkTaskName',
  title: '检测文本合法性',
  request: {
    _words: '111'
  },
  type: 'get',
  res: {
    ok: {
      error: 0,
      data: []
    },
    err: {
      error: 100,
      data: '不符合斗鱼规范'
    },
  }
});
api_server.ajax({
  url:'/h5nc/anchorTask/getRoomGiftList',
  title: '获取礼物类型',
  request: {},
  type: 'post',
  res: {
    ok: {
      error: 0,
      data: [
        {"id":98,"name":"1111","price":"0.1yuchi"},
        {"id":99,"name":"2222","price":"0.2yuchi"},
        {"id":100,"name":"3333","price":"0.3yuchi"},
        {"id":101,"name":"4444","price":"0.4yuchi"},
        {"id":102,"name":"5555","price":"0.5yuchi"}
      ]
    },
    err: {
      error: 100,
      data: '获取房间礼物失败'
    },
  }
});
