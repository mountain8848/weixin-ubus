var campany_latitude  = 31.268788
var campany_longitude = 121.627913
const chooseLocation = requirePlugin('chooseLocation');

Page({
  data: {
    latitude: campany_latitude,
    longitude: campany_longitude,
    markers: [{
      id: 1,
      latitude: campany_latitude,
      longitude: campany_longitude,
      name: '联合汽车电子4号门'
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
    enableTraffic: false
  },

    // 从地图选点插件返回后，在页面的onShow生命周期函数中能够调用插件接口，取得选点结果对象
    onShow () {
      const location = chooseLocation.getLocation(); // 如果点击确认选点按钮，则返回选点结果对象，否则返回null
  },
  onUnload () {
      // 页面卸载时设置插件选点数据为null，防止再次进入页面，geLocation返回的是上次选点结果
      chooseLocation.setLocation(null);
  },

  // onReady: function (e) {
  //   this.mapCtx = wx.createMapContext('myMap')
  // },
})