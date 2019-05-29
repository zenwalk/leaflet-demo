import "./styles.css";
import "leaflet/dist/leaflet.css";

import * as L from "leaflet";

let map = L.map("app", {
  zoom: 8,
  center: [33, 119]
});

L.tileLayer(
  "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetGray/MapServer/tile/{z}/{y}/{x}"
).addTo(map);

L.tileLayer(
  "http://map.geoq.cn/arcgis/rest/services/ChinaOnlineStreetPurplishBlue/MapServer/tile/{z}/{y}/{x}"
).addTo(map);

// map.addLayer(lyr);
