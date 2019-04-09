<template>
  <div class="map">
    <div id="baidu-map"></div> 
  </div>
</template>

<script>
export default {
  mounted() {
    this.init2()
  },
  methods: {
    init() {
      // 百度地图API功能
      var map = new BMap.Map("baidu-map");
      var point = new BMap.Point(116.331398,39.897445);
      map.centerAndZoom(point,12);

      var geolocation = new BMap.Geolocation();
      console.log(geolocation.getCurrentPosition);
      geolocation.getCurrentPosition(function(r){
        if(this.getStatus() == BMAP_STATUS_SUCCESS){
          var mk = new BMap.Marker(r.point);
          map.addOverlay(mk);
          map.panTo(r.point);
          console.log(r.point);
          alert('您的位置：'+r.point.lng+','+r.point.lat);
        }
        else {
          alert('failed'+this.getStatus());
        }        
      },{enableHighAccuracy: true})
    },
    init2() {
      // // 百度地图API功能
      // var map = new BMap.Map("baidu-map");
      // var point = new BMap.Point(116.331398,39.897445);
      // map.centerAndZoom(point,12);
      if ('geolocation' in navigator) {
        /* 地理位置服务可用 */
        navigator.geolocation.getCurrentPosition((pos) => {
          // this.point.lng = pos.coords.longitude;
          // this.point.lat = pos.coords.latitude;
          console.log('-', pos.coords.longitude, pos.coords.latitude);
          // let point = {lng: pos.coords.longitude, lat: pos.coords.latitude}
          // var mk = new BMap.Marker(point);
          // map.addOverlay(mk);
          // map.panTo(point);
          // alert('您的位置：'+point.lng+','+point.lat);
          this.translatePoint(pos.coords.longitude, pos.coords.latitude)
        },(err) => {
          alert('地理位置服务不可用');
          console.log('错误码:'+err.code);
          console.log('错误信息:'+err.message);
        });
      } else {
        alert('地理位置服务不可用');
      }
    },
    translatePoint(lng, lat) {
      // 百度地图API功能
      var map = new BMap.Map("baidu-map");
      var point = new BMap.Point(116.331398,39.897445);
      map.centerAndZoom(point,12);
      let convertor = new BMap.Convertor();
        let ggPoint = new BMap.Point(lng, lat);
        let translateCallback = (data) => {
          if (data.status === 0) {
            // this.point.lng = data.points[0].lng;
            // this.point.lat = data.points[0].lat;
            console.log('--', data.points[0].lng, data.points[0].lat);
            let points = new BMap.Point(data.points[0].lng, data.points[0].lat);
            var mk = new BMap.Marker(points);
            map.addOverlay(mk);
            console.log(points);
            map.panTo(points);
            // alert('您的位置：'+point.lng+','+point.lat);
          } else {
            Toast('地址解析出错');
          }
        }
        let pointArr = [];
        pointArr.push(ggPoint);
        convertor.translate(pointArr, 1, 5, translateCallback);
    }
  }
}
</script>

<style lang="scss">
  .map{
    #baidu-map{
      width: 100%;
      height: 800px;
    }
  }
</style>
