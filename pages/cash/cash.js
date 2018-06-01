function initSubMenuDisplay() {
  return ['hidden', 'hidden'];
}
Page({
  data: {
    subMenuDispaly: initSubMenuDisplay(),
    currentTab: -1,
    isSelectA: [true, false, false, false, false, false, false, false, false, false],
    isSelectB: [true, false, false],
    array:[],
    allResult: [
      {
        image: '../../images/cash/shl.jpg',
        title: '施华洛婚纱摄影',
        applyPerson: "已有4人申请",
        price: "￥200-300"
      }, {
        image: '../../images/cash/fsl.jpg',
        title: '枫树林高端婚礼',
        applyPerson: "已有14人申请",
        price: "￥100"
      }, {
        image: '../../images/cash/hjls.jpg',
        title: '花嫁丽舍一站式',
        applyPerson: "已有129人申请",
        price: "￥1000"
      }, {
        image: '../../images/cash/sese.jpg',
        title: 'SeSe婚礼国王',
        applyPerson: "已有117人申请",
        price: "￥100"
      }, {
        image: '../../images/cash/wly.jpg',
        title: '婚宴定制酒',
        applyPerson: "已有4人申请",
        price: "￥100"
      }, {
        image: '../../images/cash/spl.jpg',
        title: '诗普琳珠宝',
        applyPerson: "已有45人申请",
        price: "￥100"
      }, {
        image: '../../images/cash/cym.jpg',
        title: '朝阳门私属婚礼空间',
        applyPerson: "已有3人申请",
        price: "￥800"
      }
    ],
    sortResult:[[],[]],
    testResult: [[
      {
        image: '../../images/cash/wly.jpg',
        title: '婚宴定制酒',
        applyPerson: "已有4人申请",
        price: "￥100"
      }, {
        image: '../../images/cash/wly.jpg',
        title: '婚宴定制酒',
        applyPerson: "已有4人申请",
        price: "￥100"
      }, {
        image: '../../images/cash/wly.jpg',
        title: '婚宴定制酒',
        applyPerson: "已有4人申请",
        price: "￥100"
      }, {
        image: '../../images/cash/wly.jpg',
        title: '婚宴定制酒',
        applyPerson: "已有4人申请",
        price: "￥100"
      },
    ],
    [{
      image: '../../images/cash/shl.jpg',
      title: '施华洛婚纱摄影',
      applyPerson: "已有4人申请",
      price: "￥200-300"
    }, {
      image: '../../images/cash/shl.jpg',
      title: '施华洛婚纱摄影',
      applyPerson: "已有4人申请",
      price: "￥200-300"
    }, {
      image: '../../images/cash/shl.jpg',
      title: '施华洛婚纱摄影',
      applyPerson: "已有4人申请",
      price: "￥200-300"
    }, {
      image: '../../images/cash/shl.jpg',
      title: '施华洛婚纱摄影',
      applyPerson: "已有4人申请",
      price: "￥200-300"
    }, {
      image: '../../images/cash/shl.jpg',
      title: '施华洛婚纱摄影',
      applyPerson: "已有4人申请",
      price: "￥200-300"
    }], [{
      image: '../../images/cash/fsl.jpg',
      title: '枫树林高端婚礼',
      applyPerson: "已有14人申请",
      price: "￥100"
    }, {
      image: '../../images/cash/fsl.jpg',
      title: '枫树林高端婚礼',
      applyPerson: "已有14人申请",
      price: "￥100"
    }, {
      image: '../../images/cash/fsl.jpg',
      title: '枫树林高端婚礼',
      applyPerson: "已有14人申请",
      price: "￥100"
    }, {
      image: '../../images/cash/fsl.jpg',
      title: '枫树林高端婚礼',
      applyPerson: "已有14人申请",
      price: "￥100"
    }], [], [],[],[],[],[]
    ]
  },
  onLoad:function(e){
    var a=this.data.allResult;
    this.setData({array:a});
  },
  tapMainMenu: function (e) {
    console.log(e);
    var index = parseInt(e.currentTarget.dataset.index);
    console.log(index);
    var newSubMenuDisplay = initSubMenuDisplay();
    if (this.data.subMenuDispaly[index] == 'hidden') {
      newSubMenuDisplay[index] = 'show';
      this.setData({ currentTab: index });
    } else {
      newSubMenuDisplay[index] = 'hidden';
      this.setData({ currentTab: -1 });
    }
    this.setData({ subMenuDispaly: newSubMenuDisplay });
  },
  selectAItem: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var array = this.data.isSelectA;
    for (var i = 0; i < 10; i++) {
      if (i == index) {
        array[i] = true;
      } else {
        array[i] = false;
      }
    }
    var i = parseInt(e.currentTarget.dataset.index);
    var newSubMenuDisplay = initSubMenuDisplay();
    newSubMenuDisplay[i] = 'hidden'
    this.setData({
      isSelectA: array,
      currentTab: -1,
      subMenuDispaly: newSubMenuDisplay
    });
    //代替网络请求数据
    var a;
    if (index>0) {
      a = this.data.testResult[index-1];
    }else if(index==0){
       a = this.data.allResult;
    }
    this.setData({ array: a });
    
  },
  selectBItem: function (e) {
    var index = e.currentTarget.dataset.index;
    var array = this.data.isSelectB;
    for (var i = 0; i < 3; i++) {
      if (i == index) {
        array[i] = true;
      } else {
        array[i] = false;
      }
    }
    var i = parseInt(e.currentTarget.dataset.index);
    var newSubMenuDisplay = initSubMenuDisplay();
    newSubMenuDisplay[i] = 'hidden'
    this.setData({
      isSelectB: array,
      currentTab: -1,
      subMenuDispaly: newSubMenuDisplay
    });
    //代替网络请求数据
    var a
    if(index>0){
     a =this.data.sortResult[index-1];
    }else{
      a=this.data.allResutl;
    }
    this.setData({array:a});
  }
})