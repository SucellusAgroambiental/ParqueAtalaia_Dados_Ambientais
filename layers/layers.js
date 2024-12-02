var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 0.900000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_NDVISentinel2_1 = new ol.format.GeoJSON();
var features_NDVISentinel2_1 = format_NDVISentinel2_1.readFeatures(json_NDVISentinel2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NDVISentinel2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NDVISentinel2_1.addFeatures(features_NDVISentinel2_1);
var lyr_NDVISentinel2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NDVISentinel2_1, 
                style: style_NDVISentinel2_1,
                popuplayertitle: "NDVI - Sentinel 2",
                interactive: true,
    title: 'NDVI - Sentinel 2<br />\
    <img src="styles/legend/NDVISentinel2_1_0.png" /> -0,006 - 0,089<br />\
    <img src="styles/legend/NDVISentinel2_1_1.png" /> 0,089 - 0,185<br />\
    <img src="styles/legend/NDVISentinel2_1_2.png" /> 0,185 - 0,28<br />\
    <img src="styles/legend/NDVISentinel2_1_3.png" /> 0,28 - 0,376<br />\
    <img src="styles/legend/NDVISentinel2_1_4.png" /> 0,376 - 0,471<br />'
        });
var format_UsoeOcupaodoSoloINEA_2 = new ol.format.GeoJSON();
var features_UsoeOcupaodoSoloINEA_2 = format_UsoeOcupaodoSoloINEA_2.readFeatures(json_UsoeOcupaodoSoloINEA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UsoeOcupaodoSoloINEA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UsoeOcupaodoSoloINEA_2.addFeatures(features_UsoeOcupaodoSoloINEA_2);
var lyr_UsoeOcupaodoSoloINEA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UsoeOcupaodoSoloINEA_2, 
                style: style_UsoeOcupaodoSoloINEA_2,
                popuplayertitle: "Uso e Ocupação do Solo - INEA",
                interactive: true,
    title: 'Uso e Ocupação do Solo - INEA<br />\
    <img src="styles/legend/UsoeOcupaodoSoloINEA_2_0.png" /> CAMPO / PASTAGEM<br />\
    <img src="styles/legend/UsoeOcupaodoSoloINEA_2_1.png" /> VEGETACAO SECUNDARIA EM ESTAGIO INICIAL<br />\
    <img src="styles/legend/UsoeOcupaodoSoloINEA_2_2.png" /> VEGETACAO SECUNDARIA EM ESTAGIO MEDIO / AVANCADO<br />'
        });
var format_DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3 = new ol.format.GeoJSON();
var features_DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3 = format_DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3.readFeatures(json_DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3.addFeatures(features_DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3);
var lyr_DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3, 
                style: style_DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3,
                popuplayertitle: "Declividade - Alos Palsar (Classificação segundo EMBRAPA)",
                interactive: true,
    title: 'Declividade - Alos Palsar (Classificação segundo EMBRAPA)<br />\
    <img src="styles/legend/DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3_0.png" /> Plano (0-3%)<br />\
    <img src="styles/legend/DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3_1.png" /> Suave Ondulado (3-8%)<br />\
    <img src="styles/legend/DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3_2.png" /> Ondulado (8-20%)<br />\
    <img src="styles/legend/DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3_3.png" /> Forte Ondulado (20-45%)<br />\
    <img src="styles/legend/DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3_4.png" /> Montanhoso (45-75%)<br />\
    <img src="styles/legend/DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3_5.png" /> Escarpado (>75%)<br />'
        });
var format_CurvasdeNvel20mAlosPalsar_4 = new ol.format.GeoJSON();
var features_CurvasdeNvel20mAlosPalsar_4 = format_CurvasdeNvel20mAlosPalsar_4.readFeatures(json_CurvasdeNvel20mAlosPalsar_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CurvasdeNvel20mAlosPalsar_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CurvasdeNvel20mAlosPalsar_4.addFeatures(features_CurvasdeNvel20mAlosPalsar_4);
var lyr_CurvasdeNvel20mAlosPalsar_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CurvasdeNvel20mAlosPalsar_4, 
                style: style_CurvasdeNvel20mAlosPalsar_4,
                popuplayertitle: "Curvas de Nível 20m - Alos Palsar",
                interactive: true,
                title: '<img src="styles/legend/CurvasdeNvel20mAlosPalsar_4.png" /> Curvas de Nível 20m - Alos Palsar'
            });
var format_HidrografiaINEA_5 = new ol.format.GeoJSON();
var features_HidrografiaINEA_5 = format_HidrografiaINEA_5.readFeatures(json_HidrografiaINEA_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HidrografiaINEA_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HidrografiaINEA_5.addFeatures(features_HidrografiaINEA_5);
var lyr_HidrografiaINEA_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HidrografiaINEA_5, 
                style: style_HidrografiaINEA_5,
                popuplayertitle: "Hidrografia - INEA",
                interactive: true,
                title: '<img src="styles/legend/HidrografiaINEA_5.png" /> Hidrografia - INEA'
            });
var format_PossveisCanaisIntermitentes_6 = new ol.format.GeoJSON();
var features_PossveisCanaisIntermitentes_6 = format_PossveisCanaisIntermitentes_6.readFeatures(json_PossveisCanaisIntermitentes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PossveisCanaisIntermitentes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PossveisCanaisIntermitentes_6.addFeatures(features_PossveisCanaisIntermitentes_6);
var lyr_PossveisCanaisIntermitentes_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PossveisCanaisIntermitentes_6, 
                style: style_PossveisCanaisIntermitentes_6,
                popuplayertitle: "Possíveis Canais Intermitentes",
                interactive: true,
                title: '<img src="styles/legend/PossveisCanaisIntermitentes_6.png" /> Possíveis Canais Intermitentes'
            });
var format_NascentesemTornodoParqueINEA_7 = new ol.format.GeoJSON();
var features_NascentesemTornodoParqueINEA_7 = format_NascentesemTornodoParqueINEA_7.readFeatures(json_NascentesemTornodoParqueINEA_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NascentesemTornodoParqueINEA_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NascentesemTornodoParqueINEA_7.addFeatures(features_NascentesemTornodoParqueINEA_7);
var lyr_NascentesemTornodoParqueINEA_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NascentesemTornodoParqueINEA_7, 
                style: style_NascentesemTornodoParqueINEA_7,
                popuplayertitle: "Nascentes em Torno do Parque - INEA",
                interactive: true,
                title: '<img src="styles/legend/NascentesemTornodoParqueINEA_7.png" /> Nascentes em Torno do Parque - INEA'
            });
var format_LimitesParqueAtalaia_8 = new ol.format.GeoJSON();
var features_LimitesParqueAtalaia_8 = format_LimitesParqueAtalaia_8.readFeatures(json_LimitesParqueAtalaia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitesParqueAtalaia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitesParqueAtalaia_8.addFeatures(features_LimitesParqueAtalaia_8);
var lyr_LimitesParqueAtalaia_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitesParqueAtalaia_8, 
                style: style_LimitesParqueAtalaia_8,
                popuplayertitle: "Limites Parque Atalaia",
                interactive: true,
                title: '<img src="styles/legend/LimitesParqueAtalaia_8.png" /> Limites Parque Atalaia'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_NDVISentinel2_1.setVisible(false);lyr_UsoeOcupaodoSoloINEA_2.setVisible(false);lyr_DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3.setVisible(false);lyr_CurvasdeNvel20mAlosPalsar_4.setVisible(false);lyr_HidrografiaINEA_5.setVisible(false);lyr_PossveisCanaisIntermitentes_6.setVisible(false);lyr_NascentesemTornodoParqueINEA_7.setVisible(false);lyr_LimitesParqueAtalaia_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_NDVISentinel2_1,lyr_UsoeOcupaodoSoloINEA_2,lyr_DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3,lyr_CurvasdeNvel20mAlosPalsar_4,lyr_HidrografiaINEA_5,lyr_PossveisCanaisIntermitentes_6,lyr_NascentesemTornodoParqueINEA_7,lyr_LimitesParqueAtalaia_8];
lyr_NDVISentinel2_1.set('fieldAliases', {'fid': 'fid', 'VALUE': 'VALUE', });
lyr_UsoeOcupaodoSoloINEA_2.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'class_name': 'class_name', 'perimet_km': 'perimet_km', 'area_ha': 'area_ha', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_CurvasdeNvel20mAlosPalsar_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_HidrografiaINEA_5.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'snippet': 'snippet', });
lyr_PossveisCanaisIntermitentes_6.set('fieldAliases', {'fid': 'fid', 'cat': 'cat', 'value': 'value', 'label': 'label', });
lyr_NascentesemTornodoParqueINEA_7.set('fieldAliases', {'fid': 'fid', 'ogc_fid': 'ogc_fid', 'nome': 'nome', 'perimet_km': 'perimet_km', 'area_ha': 'area_ha', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_LimitesParqueAtalaia_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'descri____o': 'descri____o', 'fid': 'fid', 'Area_ha_': 'Area_ha_', 'Area_km2_': 'Area_km2_', 'Perimetro__km_': 'Perimetro__km_', });
lyr_NDVISentinel2_1.set('fieldImages', {'fid': 'TextEdit', 'VALUE': 'TextEdit', });
lyr_UsoeOcupaodoSoloINEA_2.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'class_name': 'TextEdit', 'perimet_km': 'TextEdit', 'area_ha': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_CurvasdeNvel20mAlosPalsar_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_HidrografiaINEA_5.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'snippet': 'TextEdit', });
lyr_PossveisCanaisIntermitentes_6.set('fieldImages', {'fid': 'TextEdit', 'cat': 'Range', 'value': 'Range', 'label': 'TextEdit', });
lyr_NascentesemTornodoParqueINEA_7.set('fieldImages', {'fid': 'TextEdit', 'ogc_fid': 'Range', 'nome': 'TextEdit', 'perimet_km': 'TextEdit', 'area_ha': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_LimitesParqueAtalaia_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', 'descri____o': 'TextEdit', 'fid': 'TextEdit', 'Area_ha_': 'TextEdit', 'Area_km2_': 'TextEdit', 'Perimetro__km_': 'TextEdit', });
lyr_NDVISentinel2_1.set('fieldLabels', {'fid': 'no label', 'VALUE': 'no label', });
lyr_UsoeOcupaodoSoloINEA_2.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'class_name': 'no label', 'perimet_km': 'no label', 'area_ha': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_DeclividadeAlosPalsarClassificaosegundoEMBRAPA_3.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_CurvasdeNvel20mAlosPalsar_4.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'inline label - always visible', });
lyr_HidrografiaINEA_5.set('fieldLabels', {'fid': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'snippet': 'no label', });
lyr_PossveisCanaisIntermitentes_6.set('fieldLabels', {'fid': 'no label', 'cat': 'no label', 'value': 'no label', 'label': 'no label', });
lyr_NascentesemTornodoParqueINEA_7.set('fieldLabels', {'fid': 'no label', 'ogc_fid': 'no label', 'nome': 'no label', 'perimet_km': 'no label', 'area_ha': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_LimitesParqueAtalaia_8.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'descri____o': 'no label', 'fid': 'no label', 'Area_ha_': 'no label', 'Area_km2_': 'no label', 'Perimetro__km_': 'no label', });
lyr_LimitesParqueAtalaia_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});