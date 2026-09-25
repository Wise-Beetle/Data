var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Observations_1 = new ol.format.GeoJSON();
var features_Observations_1 = format_Observations_1.readFeatures(json_Observations_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Observations_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Observations_1.addFeatures(features_Observations_1);
var lyr_Observations_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Observations_1, 
                style: style_Observations_1,
                popuplayertitle: 'Observations',
                interactive: true,
                title: '<img src="styles/legend/Observations_1.png" /> Observations'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Observations_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Observations_1];
lyr_Observations_1.set('fieldAliases', {'Species': 'Species', 'Alive': 'Alive', 'obsvID': 'obsvID', 'stnID': 'stnID', 'Date': 'Date', });
lyr_Observations_1.set('fieldImages', {'Species': '', 'Alive': '', 'obsvID': '', 'stnID': '', 'Date': '', });
lyr_Observations_1.set('fieldLabels', {'Species': 'inline label - always visible', 'Alive': 'no label', 'obsvID': 'no label', 'stnID': 'no label', 'Date': 'inline label - always visible', });
lyr_Observations_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});