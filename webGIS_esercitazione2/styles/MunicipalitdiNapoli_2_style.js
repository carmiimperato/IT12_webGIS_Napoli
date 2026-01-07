var size = 0;
var placement = 'point';

var style_MunicipalitdiNapoli_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "28.6px \'Bodoni MT\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#ffb300";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("MUNICIPALI") !== null) {
        labelText = String(feature.get("MUNICIPALI"));
    }
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,179,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.09}),fill: new ol.style.Fill({color: 'rgba(255,179,0,0.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
