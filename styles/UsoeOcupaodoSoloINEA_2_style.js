var size = 0;
var placement = 'point';
function categories_UsoeOcupaodoSoloINEA_2(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'CAMPO / PASTAGEM':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,127,0,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VEGETACAO SECUNDARIA EM ESTAGIO INICIAL':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(178,223,138,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'VEGETACAO SECUNDARIA EM ESTAGIO MEDIO / AVANCADO':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(51,160,44,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_UsoeOcupaodoSoloINEA_2 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("class_name");
    var labelText = "";
    size = 0;
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
var style = categories_UsoeOcupaodoSoloINEA_2(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
