var campany_latitude  = 31.268788
var campany_longitude = 121.627913
var campany_name = '联合汽车电子有限公司'
const chooseLocation = requirePlugin('chooseLocation')
var homeLocation 
Page({
  data: {
    latitude: campany_latitude,
    longitude: campany_longitude,
    markers: [{
      id: 1,
      latitude: campany_latitude,
      longitude: campany_longitude,
      name: campany_name,
      callout:{content: campany_name, display: 'ALWAYS'}
    }],
    covers: [{
      latitude: campany_latitude,
      longitude: campany_longitude + 0.02,
      iconPath: '/image/location.png'
    }, {
      latitude: campany_latitude,
      longitude: campany_longitude - 0.02,
      iconPath: '/image/location.png'
    }],

    subKey: 'B5QBZ-7JTLU-DSSVA-2BRJ3-TNXLF-2TBR7',
    enable3d: false,
    showCompass: false,
    enableOverlooking: false,
    enableZoom: true,
    enableScroll: true,
    enableRotate: false,
    drawPolygon: false,
    enableSatellite: false,
    enableTraffic: false,

    home_text: ''
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  // 从地图选点插件返回后，在页面的onShow生命周期函数中能够调用插件接口，取得选点结果对象
  onShow () {
      homeLocation = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
      this.setData({
        home_text: homeLocation.address
      })
  },
  onUnload () {
      // 页面卸载时设置插件选点数据为null，防止再次进入页面，geLocation返回的是上次选点结果
      chooseLocation.setLocation(null);
  },

  inputHomeAddr: function(){
    const key = 'LSNBZ-42XKU-UV3VF-2FQB3-SEPZ6-YDBOV'; //使用在腾讯位置服务申请的key
    const referer = 'U班车'; //调用插件的app的名称
    // const location = JSON.stringify({
    //   latitude: 39.89631551,
    //   longitude: 116.323459711
    // });
    const category = '小区,生活服务';
    
    wx.navigateTo({
      url: 'plugin://chooseLocation/index?key=' + key + '&referer=' + referer + '&category=' + category
    }); 
  },

  gotoCompany: function(){
    let plugin = requirePlugin('routePlan');
    const key = 'LSNBZ-42XKU-UV3VF-2FQB3-SEPZ6-YDBOV'; //使用在腾讯位置服务申请的key
    const referer = 'U班车'; //调用插件的app的名称
    const navigation = 1;

    let startPoint = JSON.stringify({  //起点
      'name': '家',   
      'latitude': homeLocation.latitude,
      'longitude': homeLocation.longitude             
  });
    let endPoint = JSON.stringify({  //终点
        'name': campany_name,   
        'latitude': campany_latitude,
        'longitude': campany_longitude             
    });
    wx.navigateTo({
        url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + 
             '&startPoint=' + startPoint + '&endPoint=' + endPoint +
             '&navigation' + navigation
    });
  },

  goHome: function(){
    let plugin = requirePlugin('routePlan');
    const key = 'LSNBZ-42XKU-UV3VF-2FQB3-SEPZ6-YDBOV'; //使用在腾讯位置服务申请的key
    const referer = 'U班车'; //调用插件的app的名称
    const navigation = 1;

    let endPoint = JSON.stringify({  //起点
      'name': '家',   
      'latitude': homeLocation.latitude,
      'longitude': homeLocation.longitude             
  });
    let startPoint = JSON.stringify({  //终点
        'name': campany_name,   
        'latitude': campany_latitude,
        'longitude': campany_longitude             
    });
    wx.navigateTo({
        url: 'plugin://routePlan/index?key=' + key + '&referer=' + referer + 
             '&startPoint=' + startPoint + '&endPoint=' + endPoint +
             '&navigation' + navigation
    });
  },
  checkWeather: function(){
    wx.navigateTo({
      url: '../weather/weather'
    })    
  }
  // getCenterLocation: function () {
  //   this.mapCtx.getCenterLocation({
  //     success: function(res){
  //       console.log(res.longitude)
  //       console.log(res.latitude)
  //     }
  //   })
  // },
  // moveToLocation: function () {
  //   this.mapCtx.moveToLocation()
  // },
  // translateMarker: function() {
  //   this.mapCtx.translateMarker({
  //     markerId: 1,
  //     autoRotate: true,
  //     duration: 1000,
  //     destination: {
  //       latitude:campany_latitude,
  //       longitude:campany_longitude,
  //     },
  //     animationEnd() {
  //       console.log('animation end')
  //     }
  //   })
  // },
  // includePoints: function() {
  //   this.mapCtx.includePoints({
  //     padding: [10],
  //     points: [{
  //       latitude:campany_latitude,
  //       longitude:campany_longitude,
  //     }, {
  //       latitude:campany_latitude - 0.1,// 23.00229,
  //       longitude:campany_longitude,
  //     }]
  //   })
  // },


  // toggleSatellite() {
  //   this.setData({
  //     enableSatellite: !this.data.enableSatellite
  //   })
  // },
  // toggleTraffic() {
  //   this.setData({
  //     enableTraffic: !this.data.enableTraffic
  //   })
  // }
})
