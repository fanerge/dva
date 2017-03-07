import React from 'react';

const MapShow = React.Component({
  getInitialState(){
    return {
      mapCenter :  {x:120.6338621760413,y:27.93035406610706},
      defaultLevel : 6,
      testPoint :  {x:104.067993,y:30.661541},
      testLine : "106.9255,30.3164 106.7589,30.4072 106.6762,30.4091 106.6622,30.4189",
      testPolygon : [{x: 104.09163, y: 30.15834}, {x: 104.19163, y: 30.35834}, {x: 104.29163, y: 30.35834}],
      defaultImgSrc : "http://beyondmap.cn:83/gisapi/resources/images/gis/icon/marker_large.png",
      cmap : '',
    };
  },

  initMap(containerId, callback) {
    var options = {
      center: new beyond.geometry.MapPoint(mapCenter.x, mapCenter.y),
      zoom: defaultLevel,
      minZoom: 0,
      maxZoom: 17
    }
    var map = new beyond.maps.Map(containerId, options, callback);
    return map;
  },

  mapLoaded(){
    $("#showMap").click(function(){
        cmap.centerAndZoom(new beyond.geometry.MapPoint($("#xTxt").val(),$("#yTxt").val()),$("#zoomTxt").val())
    });
  },

  componentDidMount(){
    this.initMap("mapContainer",this.mapLoaded);
  },

  render(){
    return (
      <div>
        {/*<div id="mapContainer" style={{ width: 100%, height: 100%, position: 'relative',}}></div>
        <div className="control">
            <div className="controlTitle">显示地图</div>
            <div style="padding:10px;">
              <div>缩放级别：<input id="zoomTxt" class="textinput" type="text" value="3"/></div>
              <div>中心经度：<input id="xTxt" class="textinput" type="text" value="104.07229126"/></div>
              <div>中心纬度：<input id="yTxt" class="textinput" type="text" value="30.66206115"/></div>
              <div style="text-align:right"><input id="showMap" class="btn" type="button" value="显示地图"/></div>
            </div>
        </div>*/}
      </div>
    );
  },
});


export default MapShow;










