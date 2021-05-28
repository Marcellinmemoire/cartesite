var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_paca_1 = new ol.format.GeoJSON();
var features_paca_1 = format_paca_1.readFeatures(json_paca_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paca_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_paca_1.addFeatures(features_paca_1);
var lyr_paca_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_paca_1, 
                style: style_paca_1,
                interactive: false,
                title: '<img src="styles/legend/paca_1.png" /> paca'
            });
var format_FPHAUTEALPE_2 = new ol.format.GeoJSON();
var features_FPHAUTEALPE_2 = format_FPHAUTEALPE_2.readFeatures(json_FPHAUTEALPE_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPHAUTEALPE_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPHAUTEALPE_2.addFeatures(features_FPHAUTEALPE_2);
var lyr_FPHAUTEALPE_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FPHAUTEALPE_2, 
                style: style_FPHAUTEALPE_2,
                interactive: true,
                title: '<img src="styles/legend/FPHAUTEALPE_2.png" /> FPHAUTEALPE'
            });
var format_fpalpemari_3 = new ol.format.GeoJSON();
var features_fpalpemari_3 = format_fpalpemari_3.readFeatures(json_fpalpemari_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fpalpemari_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fpalpemari_3.addFeatures(features_fpalpemari_3);
var lyr_fpalpemari_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fpalpemari_3, 
                style: style_fpalpemari_3,
                interactive: true,
                title: '<img src="styles/legend/fpalpemari_3.png" /> fpalpemari'
            });
var format_FPHAUTEPRO_4 = new ol.format.GeoJSON();
var features_FPHAUTEPRO_4 = format_FPHAUTEPRO_4.readFeatures(json_FPHAUTEPRO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPHAUTEPRO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPHAUTEPRO_4.addFeatures(features_FPHAUTEPRO_4);
var lyr_FPHAUTEPRO_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FPHAUTEPRO_4, 
                style: style_FPHAUTEPRO_4,
                interactive: true,
                title: '<img src="styles/legend/FPHAUTEPRO_4.png" /> FPHAUTEPRO'
            });
var format_FPVAR_5 = new ol.format.GeoJSON();
var features_FPVAR_5 = format_FPVAR_5.readFeatures(json_FPVAR_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPVAR_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPVAR_5.addFeatures(features_FPVAR_5);
var lyr_FPVAR_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FPVAR_5, 
                style: style_FPVAR_5,
                interactive: true,
                title: '<img src="styles/legend/FPVAR_5.png" /> FPVAR'
            });
var format_fpvaucluse_6 = new ol.format.GeoJSON();
var features_fpvaucluse_6 = format_fpvaucluse_6.readFeatures(json_fpvaucluse_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fpvaucluse_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fpvaucluse_6.addFeatures(features_fpvaucluse_6);
var lyr_fpvaucluse_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fpvaucluse_6, 
                style: style_fpvaucluse_6,
                interactive: true,
                title: '<img src="styles/legend/fpvaucluse_6.png" /> fpvaucluse'
            });
var format_FPbr_7 = new ol.format.GeoJSON();
var features_FPbr_7 = format_FPbr_7.readFeatures(json_FPbr_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPbr_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPbr_7.addFeatures(features_FPbr_7);
var lyr_FPbr_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FPbr_7, 
                style: style_FPbr_7,
                interactive: true,
                title: '<img src="styles/legend/FPbr_7.png" /> FPbr'
            });
var format_SITE10P_8 = new ol.format.GeoJSON();
var features_SITE10P_8 = format_SITE10P_8.readFeatures(json_SITE10P_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SITE10P_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SITE10P_8.addFeatures(features_SITE10P_8);
var lyr_SITE10P_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SITE10P_8, 
                style: style_SITE10P_8,
                interactive: true,
                title: '<img src="styles/legend/SITE10P_8.png" /> SITE10P'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_paca_1.setVisible(true);lyr_FPHAUTEALPE_2.setVisible(true);lyr_fpalpemari_3.setVisible(true);lyr_FPHAUTEPRO_4.setVisible(true);lyr_FPVAR_5.setVisible(true);lyr_fpvaucluse_6.setVisible(true);lyr_FPbr_7.setVisible(true);lyr_SITE10P_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_paca_1,lyr_FPHAUTEALPE_2,lyr_fpalpemari_3,lyr_FPHAUTEPRO_4,lyr_FPVAR_5,lyr_fpvaucluse_6,lyr_FPbr_7,lyr_SITE10P_8];
lyr_paca_1.set('fieldAliases', {'qc_id': 'qc_id', 'code_insee': 'code_insee', 'nom': 'nom', 'nuts2': 'nuts2', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', });
lyr_FPHAUTEALPE_2.set('fieldAliases', {'Lib_Forêt': 'Nom forêt', });
lyr_fpalpemari_3.set('fieldAliases', {'Lib_Forêt': 'Nom forêt', 'Surface': 'Surface', 'Ha': 'Ha', });
lyr_FPHAUTEPRO_4.set('fieldAliases', {'Lib_Forêt': 'Nom forêt', });
lyr_FPVAR_5.set('fieldAliases', {'Lib_Forêt': 'Nom forêt', });
lyr_fpvaucluse_6.set('fieldAliases', {'Lib_Forêt': 'Nom forêt', });
lyr_FPbr_7.set('fieldAliases', {'Lib_Forêt': 'Nom forêt', });
lyr_SITE10P_8.set('fieldAliases', {'nom_site': 'Nom site', 'nom_com': 'Commune', 'nom_dep': 'Département', 'catégorie': 'Catégorie', 'nb_visteur': 'Nombre de visiteur à l\'année', 'ouverture': 'Ouverture', 'g / p': 'Gratuit / Payant', 'gestion': 'Gestion', 'lieu': 'Nature du lieu', 'mention': 'Distinction', 'descript': 'Description', });
lyr_paca_1.set('fieldImages', {'qc_id': '', 'code_insee': 'TextEdit', 'nom': 'TextEdit', 'nuts2': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_km2': 'TextEdit', });
lyr_FPHAUTEALPE_2.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_fpalpemari_3.set('fieldImages', {'Lib_Forêt': 'TextEdit', 'Surface': 'TextEdit', 'Ha': 'TextEdit', });
lyr_FPHAUTEPRO_4.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_FPVAR_5.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_fpvaucluse_6.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_FPbr_7.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_SITE10P_8.set('fieldImages', {'nom_site': 'TextEdit', 'nom_com': 'TextEdit', 'nom_dep': 'TextEdit', 'catégorie': 'TextEdit', 'nb_visteur': 'TextEdit', 'ouverture': 'TextEdit', 'g / p': 'TextEdit', 'gestion': 'TextEdit', 'lieu': 'TextEdit', 'mention': 'TextEdit', 'descript': 'TextEdit', });
lyr_paca_1.set('fieldLabels', {'qc_id': 'no label', 'code_insee': 'header label', 'nom': 'inline label', 'nuts2': 'no label', 'wikipedia': 'inline label', 'surf_km2': 'inline label', });
lyr_FPHAUTEALPE_2.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_fpalpemari_3.set('fieldLabels', {'Lib_Forêt': 'inline label', 'Surface': 'no label', 'Ha': 'no label', });
lyr_FPHAUTEPRO_4.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_FPVAR_5.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_fpvaucluse_6.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_FPbr_7.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_SITE10P_8.set('fieldLabels', {'nom_site': 'inline label', 'nom_com': 'inline label', 'nom_dep': 'inline label', 'catégorie': 'inline label', 'nb_visteur': 'inline label', 'ouverture': 'inline label', 'g / p': 'inline label', 'gestion': 'inline label', 'lieu': 'inline label', 'mention': 'inline label', 'descript': 'inline label', });
lyr_SITE10P_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});