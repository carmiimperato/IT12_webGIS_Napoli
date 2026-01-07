var wms_layers = [];


        var lyr_CartoLight_0 = new ol.layer.Tile({
            'title': 'Carto Light',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_DistribuzionedelparametroIT12_1 = new ol.format.GeoJSON();
var features_DistribuzionedelparametroIT12_1 = format_DistribuzionedelparametroIT12_1.readFeatures(json_DistribuzionedelparametroIT12_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistribuzionedelparametroIT12_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistribuzionedelparametroIT12_1.addFeatures(features_DistribuzionedelparametroIT12_1);
var lyr_DistribuzionedelparametroIT12_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistribuzionedelparametroIT12_1, 
                style: style_DistribuzionedelparametroIT12_1,
                popuplayertitle: 'Distribuzione del parametro IT12',
                interactive: true,
    title: 'Distribuzione del parametro IT12<br />\
    <img src="styles/legend/DistribuzionedelparametroIT12_1_0.png" /> Popolazione nulla<br />\
    <img src="styles/legend/DistribuzionedelparametroIT12_1_1.png" /> 1 ≤ IT12 < 15<br />\
    <img src="styles/legend/DistribuzionedelparametroIT12_1_2.png" /> 15 ≤ IT12 < 30<br />\
    <img src="styles/legend/DistribuzionedelparametroIT12_1_3.png" /> 30 ≤ IT12 < 100<br />\
    <img src="styles/legend/DistribuzionedelparametroIT12_1_4.png" /> 100 ≤ IT12 < 200<br />\
    <img src="styles/legend/DistribuzionedelparametroIT12_1_5.png" /> 200 ≤ IT12 < 300<br />\
    <img src="styles/legend/DistribuzionedelparametroIT12_1_6.png" /> 300 ≤ IT12 < 450<br />\
    <img src="styles/legend/DistribuzionedelparametroIT12_1_7.png" /> 450 ≤ IT12 < 650<br />\
    <img src="styles/legend/DistribuzionedelparametroIT12_1_8.png" /> 650 ≤ IT12 ≤ 983<br />' });
var format_MunicipalitdiNapoli_2 = new ol.format.GeoJSON();
var features_MunicipalitdiNapoli_2 = format_MunicipalitdiNapoli_2.readFeatures(json_MunicipalitdiNapoli_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MunicipalitdiNapoli_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalitdiNapoli_2.addFeatures(features_MunicipalitdiNapoli_2);
var lyr_MunicipalitdiNapoli_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalitdiNapoli_2, 
                style: style_MunicipalitdiNapoli_2,
                popuplayertitle: 'Municipalità di Napoli',
                interactive: true,
                title: '<img src="styles/legend/MunicipalitdiNapoli_2.png" /> Municipalità di Napoli'
            });

lyr_CartoLight_0.setVisible(true);lyr_DistribuzionedelparametroIT12_1.setVisible(true);lyr_MunicipalitdiNapoli_2.setVisible(true);
var layersList = [lyr_CartoLight_0,lyr_DistribuzionedelparametroIT12_1,lyr_MunicipalitdiNapoli_2];
lyr_DistribuzionedelparametroIT12_1.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'IT12_RET_F': 'IT12_RET_F', });
lyr_MunicipalitdiNapoli_2.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'row_index': 'row_index', 'col_index': 'col_index', 'IT12_RET_F': 'IT12_RET_F', 'MUNICIPALI': 'MUNICIPALI', 'QUARTIERI': 'QUARTIERI', });
lyr_DistribuzionedelparametroIT12_1.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'IT12_RET_F': 'TextEdit', });
lyr_MunicipalitdiNapoli_2.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', 'row_index': 'TextEdit', 'col_index': 'TextEdit', 'IT12_RET_F': 'TextEdit', 'MUNICIPALI': 'TextEdit', 'QUARTIERI': 'TextEdit', });
lyr_DistribuzionedelparametroIT12_1.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'IT12_RET_F': 'no label', });
lyr_MunicipalitdiNapoli_2.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'row_index': 'no label', 'col_index': 'no label', 'IT12_RET_F': 'no label', 'MUNICIPALI': 'no label', 'QUARTIERI': 'no label', });
lyr_MunicipalitdiNapoli_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});