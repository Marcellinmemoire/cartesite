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
var format_site_externe_L93copier_2 = new ol.format.GeoJSON();
var features_site_externe_L93copier_2 = format_site_externe_L93copier_2.readFeatures(json_site_externe_L93copier_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_site_externe_L93copier_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_site_externe_L93copier_2.addFeatures(features_site_externe_L93copier_2);
var lyr_site_externe_L93copier_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_site_externe_L93copier_2, 
                style: style_site_externe_L93copier_2,
                interactive: true,
                title: '<img src="styles/legend/site_externe_L93copier_2.png" /> site_externe_L93 copier'
            });
var format_site_internecopier_3 = new ol.format.GeoJSON();
var features_site_internecopier_3 = format_site_internecopier_3.readFeatures(json_site_internecopier_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_site_internecopier_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_site_internecopier_3.addFeatures(features_site_internecopier_3);
var lyr_site_internecopier_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_site_internecopier_3, 
                style: style_site_internecopier_3,
                interactive: true,
                title: '<img src="styles/legend/site_internecopier_3.png" /> site_interne copier'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_paca_1.setVisible(true);lyr_site_externe_L93copier_2.setVisible(true);lyr_site_internecopier_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_paca_1,lyr_site_externe_L93copier_2,lyr_site_internecopier_3];
lyr_paca_1.set('fieldAliases', {'code_insee': 'code_insee', 'nom': 'nom', 'nuts2': 'nuts2', 'wikipedia': 'wikipedia', 'surf_km2': 'surf_km2', });
lyr_site_externe_L93copier_2.set('fieldAliases', {'nom_site': 'Nom site', 'nom_com': 'Commune', 'nom_dep': 'Département', 'catégorie': 'Catégorie', 'nb_visteur': 'Nombre de visiteur à l\'année', 'ouverture': 'Ouverture', 'g / p': 'Gratuit / Payant', 'gestion': 'Gestion', 'lieu': 'Nature du Lieu', 'mention': 'Distinction', 'descript': 'Description', });
lyr_site_internecopier_3.set('fieldAliases', {'Nom_site': 'Nom site', 'Nom_COM': 'Commune', 'NOM_DEP': 'Département', 'Type_site': 'Catégorie', 'NB_Visteur': 'Nombre de visiteur à l\'année', 'Saisonnali': 'Ouverture', 'Gratuit/pa': 'Gratuit / Payant', 'gestion pr': 'Gestion', 'lieu ouver': 'Nature du lieu', 'Distinctio': 'Distinction', 'descriptio': 'Description', });
lyr_paca_1.set('fieldImages', {'code_insee': 'TextEdit', 'nom': 'TextEdit', 'nuts2': 'TextEdit', 'wikipedia': 'TextEdit', 'surf_km2': 'TextEdit', });
lyr_site_externe_L93copier_2.set('fieldImages', {'nom_site': 'TextEdit', 'nom_com': 'TextEdit', 'nom_dep': 'TextEdit', 'catégorie': 'TextEdit', 'nb_visteur': 'TextEdit', 'ouverture': 'TextEdit', 'g / p': 'TextEdit', 'gestion': 'TextEdit', 'lieu': 'TextEdit', 'mention': 'TextEdit', 'descript': 'TextEdit', });
lyr_site_internecopier_3.set('fieldImages', {'Nom_site': 'TextEdit', 'Nom_COM': 'TextEdit', 'NOM_DEP': 'TextEdit', 'Type_site': 'TextEdit', 'NB_Visteur': 'TextEdit', 'Saisonnali': 'TextEdit', 'Gratuit/pa': 'TextEdit', 'gestion pr': 'TextEdit', 'lieu ouver': 'TextEdit', 'Distinctio': 'TextEdit', 'descriptio': 'TextEdit', });
lyr_paca_1.set('fieldLabels', {'code_insee': 'no label', 'nom': 'no label', 'nuts2': 'no label', 'wikipedia': 'no label', 'surf_km2': 'no label', });
lyr_site_externe_L93copier_2.set('fieldLabels', {'nom_site': 'inline label', 'nom_com': 'inline label', 'nom_dep': 'inline label', 'catégorie': 'inline label', 'nb_visteur': 'inline label', 'ouverture': 'inline label', 'g / p': 'inline label', 'gestion': 'inline label', 'lieu': 'inline label', 'mention': 'inline label', 'descript': 'inline label', });
lyr_site_internecopier_3.set('fieldLabels', {'Nom_site': 'inline label', 'Nom_COM': 'inline label', 'NOM_DEP': 'inline label', 'Type_site': 'inline label', 'NB_Visteur': 'inline label', 'Saisonnali': 'inline label', 'Gratuit/pa': 'inline label', 'gestion pr': 'inline label', 'lieu ouver': 'inline label', 'Distinctio': 'inline label', 'descriptio': 'inline label', });
lyr_site_internecopier_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});