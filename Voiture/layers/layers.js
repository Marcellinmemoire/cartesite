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
var format_FPbr_3 = new ol.format.GeoJSON();
var features_FPbr_3 = format_FPbr_3.readFeatures(json_FPbr_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPbr_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPbr_3.addFeatures(features_FPbr_3);
var lyr_FPbr_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FPbr_3, 
                style: style_FPbr_3,
                interactive: true,
                title: '<img src="styles/legend/FPbr_3.png" /> FPbr'
            });
var format_fpalpemari_4 = new ol.format.GeoJSON();
var features_fpalpemari_4 = format_fpalpemari_4.readFeatures(json_fpalpemari_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fpalpemari_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fpalpemari_4.addFeatures(features_fpalpemari_4);
var lyr_fpalpemari_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fpalpemari_4, 
                style: style_fpalpemari_4,
                interactive: true,
                title: '<img src="styles/legend/fpalpemari_4.png" /> fpalpemari'
            });
var format_FPHAUTEPRO_5 = new ol.format.GeoJSON();
var features_FPHAUTEPRO_5 = format_FPHAUTEPRO_5.readFeatures(json_FPHAUTEPRO_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPHAUTEPRO_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPHAUTEPRO_5.addFeatures(features_FPHAUTEPRO_5);
var lyr_FPHAUTEPRO_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FPHAUTEPRO_5, 
                style: style_FPHAUTEPRO_5,
                interactive: true,
                title: '<img src="styles/legend/FPHAUTEPRO_5.png" /> FPHAUTEPRO'
            });
var format_FPVAR_6 = new ol.format.GeoJSON();
var features_FPVAR_6 = format_FPVAR_6.readFeatures(json_FPVAR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FPVAR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FPVAR_6.addFeatures(features_FPVAR_6);
var lyr_FPVAR_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FPVAR_6, 
                style: style_FPVAR_6,
                interactive: true,
                title: '<img src="styles/legend/FPVAR_6.png" /> FPVAR'
            });
var format_fpvaucluse_7 = new ol.format.GeoJSON();
var features_fpvaucluse_7 = format_fpvaucluse_7.readFeatures(json_fpvaucluse_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fpvaucluse_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fpvaucluse_7.addFeatures(features_fpvaucluse_7);
var lyr_fpvaucluse_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_fpvaucluse_7, 
                style: style_fpvaucluse_7,
                interactive: true,
                title: '<img src="styles/legend/fpvaucluse_7.png" /> fpvaucluse'
            });
var format_voitue_8 = new ol.format.GeoJSON();
var features_voitue_8 = format_voitue_8.readFeatures(json_voitue_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voitue_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_voitue_8.addFeatures(features_voitue_8);
var lyr_voitue_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_voitue_8, 
                style: style_voitue_8,
                interactive: true,
    title: 'voitue<br />\
    <img src="styles/legend/voitue_8_0.png" /> 5<br />\
    <img src="styles/legend/voitue_8_1.png" /> 10<br />\
    <img src="styles/legend/voitue_8_2.png" /> <br />'
        });
var format_siterepro_9 = new ol.format.GeoJSON();
var features_siterepro_9 = format_siterepro_9.readFeatures(json_siterepro_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_siterepro_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_siterepro_9.addFeatures(features_siterepro_9);
var lyr_siterepro_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_siterepro_9, 
                style: style_siterepro_9,
                interactive: true,
                title: '<img src="styles/legend/siterepro_9.png" /> siterepro'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_paca_1.setVisible(true);lyr_FPHAUTEALPE_2.setVisible(true);lyr_FPbr_3.setVisible(true);lyr_fpalpemari_4.setVisible(true);lyr_FPHAUTEPRO_5.setVisible(true);lyr_FPVAR_6.setVisible(true);lyr_fpvaucluse_7.setVisible(true);lyr_voitue_8.setVisible(true);lyr_siterepro_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_paca_1,lyr_FPHAUTEALPE_2,lyr_FPbr_3,lyr_fpalpemari_4,lyr_FPHAUTEPRO_5,lyr_FPVAR_6,lyr_fpvaucluse_7,lyr_voitue_8,lyr_siterepro_9];
lyr_paca_1.set('fieldAliases', {'qc_id': 'qc_id', 'code_insee': 'code_insee', 'nom': 'nom', 'nuts2': 'nuts2', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', });
lyr_FPHAUTEALPE_2.set('fieldAliases', {'Lib_Forêt': 'Lib_Forêt', });
lyr_FPbr_3.set('fieldAliases', {'Lib_Forêt': 'Lib_Forêt', });
lyr_fpalpemari_4.set('fieldAliases', {'Lib_Forêt': 'Lib_Forêt', });
lyr_FPHAUTEPRO_5.set('fieldAliases', {'Lib_Forêt': 'Lib_Forêt', });
lyr_FPVAR_6.set('fieldAliases', {'Lib_Forêt': 'Lib_Forêt', });
lyr_fpvaucluse_7.set('fieldAliases', {'Lib_Forêt': 'Lib_Forêt', });
lyr_voitue_8.set('fieldAliases', {'AA_MINS': 'AA_MINS', });
lyr_siterepro_9.set('fieldAliases', {'nom_site': 'Nom Site', 'nom_com': 'Nom Commune', 'nom_dep': 'Nom Départemernt', 'catégorie': 'Catégorie du site', 'nb_visteur': 'Nombre de visiteur à l\'année', 'ouverture ': 'Mois d\'ouverture', 'g / p': 'Gratuit/Payant', 'gestion': 'gestion', 'lieu': 'Nature du lieu', 'mention': 'Distinction', 'descript': 'Description', });
lyr_paca_1.set('fieldImages', {'qc_id': '', 'code_insee': 'TextEdit', 'nom': 'TextEdit', 'nuts2': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_km2': 'TextEdit', });
lyr_FPHAUTEALPE_2.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_FPbr_3.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_fpalpemari_4.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_FPHAUTEPRO_5.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_FPVAR_6.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_fpvaucluse_7.set('fieldImages', {'Lib_Forêt': 'TextEdit', });
lyr_voitue_8.set('fieldImages', {'AA_MINS': 'TextEdit', });
lyr_siterepro_9.set('fieldImages', {'nom_site': '', 'nom_com': '', 'nom_dep': '', 'catégorie': '', 'nb_visteur': '', 'ouverture ': '', 'g / p': '', 'gestion': '', 'lieu': '', 'mention': '', 'descript': '', });
lyr_paca_1.set('fieldLabels', {'qc_id': 'no label', 'code_insee': 'header label', 'nom': 'header label', 'nuts2': 'no label', 'wikipedia': 'inline label', 'surf_km2': 'inline label', });
lyr_FPHAUTEALPE_2.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_FPbr_3.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_fpalpemari_4.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_FPHAUTEPRO_5.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_FPVAR_6.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_fpvaucluse_7.set('fieldLabels', {'Lib_Forêt': 'inline label', });
lyr_voitue_8.set('fieldLabels', {'AA_MINS': 'inline label', });
lyr_siterepro_9.set('fieldLabels', {'nom_site': 'inline label', 'nom_com': 'inline label', 'nom_dep': 'inline label', 'catégorie': 'inline label', 'nb_visteur': 'inline label', 'ouverture ': 'inline label', 'g / p': 'inline label', 'gestion': 'inline label', 'lieu': 'inline label', 'mention': 'inline label', 'descript': 'inline label', });
lyr_siterepro_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});