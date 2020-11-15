var campany_latitude  = 31.268788
var campany_longitude = 121.627913
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
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  getCenterLocation: function () {
    this.mapCtx.getCenterLocation({
      success: function(res){
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  },
  translateMarker: function() {
    this.mapCtx.translateMarker({
      markerId: 1,
      autoRotate: true,
      duration: 1000,
      destination: {
        latitude:campany_latitude,
        longitude:campany_longitude,
      },
      animationEnd() {
        console.log('animation end')
      }
    })
  },
  includePoints: function() {
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude:campany_latitude,
        longitude:campany_longitude,
      }, {
        latitude:campany_latitude - 0.1,// 23.00229,
        longitude:campany_longitude,
      }]
    })
  },


  toggleSatellite() {
    this.setData({
      enableSatellite: !this.data.enableSatellite
    })
  },
  toggleTraffic() {
    this.setData({
      enableTraffic: !this.data.enableTraffic
    })
  }
})
