var wms_layers = [];

var lyr_SWISSIMAGEHintergrund_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.images-swissimage",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'SWISSIMAGE Hintergrund',
                            popuplayertitle: 'SWISSIMAGE Hintergrund',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_SWISSIMAGEHintergrund_0, 0]);
var lyr_Landeskarte125000LK25_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.admin.ch/",
                              attributions: ' ',
                              params: {
                                "LAYERS": "ch.swisstopo.pixelkarte-farbe-pk25.noscale",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Landeskarte 1:25`000 | LK25',
                            popuplayertitle: 'Landeskarte 1:25`000 | LK25',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_Landeskarte125000LK25_1, 0]);
var format_campo_esplo_bosco_2_2 = new ol.format.GeoJSON();
var features_campo_esplo_bosco_2_2 = format_campo_esplo_bosco_2_2.readFeatures(json_campo_esplo_bosco_2_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_campo_esplo_bosco_2_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_campo_esplo_bosco_2_2.addFeatures(features_campo_esplo_bosco_2_2);
var lyr_campo_esplo_bosco_2_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_campo_esplo_bosco_2_2, 
                style: style_campo_esplo_bosco_2_2,
                popuplayertitle: 'campo_esplo_bosco_2',
                interactive: true,
                title: '<img src="styles/legend/campo_esplo_bosco_2_2.png" /> campo_esplo_bosco_2'
            });
var format_campo_esplo_bosco_1_3 = new ol.format.GeoJSON();
var features_campo_esplo_bosco_1_3 = format_campo_esplo_bosco_1_3.readFeatures(json_campo_esplo_bosco_1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_campo_esplo_bosco_1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_campo_esplo_bosco_1_3.addFeatures(features_campo_esplo_bosco_1_3);
var lyr_campo_esplo_bosco_1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_campo_esplo_bosco_1_3, 
                style: style_campo_esplo_bosco_1_3,
                popuplayertitle: 'campo_esplo_bosco_1',
                interactive: true,
                title: '<img src="styles/legend/campo_esplo_bosco_1_3.png" /> campo_esplo_bosco_1'
            });
var format_campo_esplo_prato_4 = new ol.format.GeoJSON();
var features_campo_esplo_prato_4 = format_campo_esplo_prato_4.readFeatures(json_campo_esplo_prato_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_campo_esplo_prato_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_campo_esplo_prato_4.addFeatures(features_campo_esplo_prato_4);
var lyr_campo_esplo_prato_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_campo_esplo_prato_4, 
                style: style_campo_esplo_prato_4,
                popuplayertitle: 'campo_esplo_prato',
                interactive: true,
                title: '<img src="styles/legend/campo_esplo_prato_4.png" /> campo_esplo_prato'
            });
var format_campo_pio_5 = new ol.format.GeoJSON();
var features_campo_pio_5 = format_campo_pio_5.readFeatures(json_campo_pio_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_campo_pio_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_campo_pio_5.addFeatures(features_campo_pio_5);
var lyr_campo_pio_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_campo_pio_5, 
                style: style_campo_pio_5,
                popuplayertitle: 'campo_pio',
                interactive: true,
                title: '<img src="styles/legend/campo_pio_5.png" /> campo_pio'
            });
var format_Piazza_centrale_esplo_6 = new ol.format.GeoJSON();
var features_Piazza_centrale_esplo_6 = format_Piazza_centrale_esplo_6.readFeatures(json_Piazza_centrale_esplo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Piazza_centrale_esplo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Piazza_centrale_esplo_6.addFeatures(features_Piazza_centrale_esplo_6);
var lyr_Piazza_centrale_esplo_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Piazza_centrale_esplo_6, 
                style: style_Piazza_centrale_esplo_6,
                popuplayertitle: 'Piazza_centrale_esplo',
                interactive: true,
                title: '<img src="styles/legend/Piazza_centrale_esplo_6.png" /> Piazza_centrale_esplo'
            });
var format_Divisioni_sottocampi_esplo_7 = new ol.format.GeoJSON();
var features_Divisioni_sottocampi_esplo_7 = format_Divisioni_sottocampi_esplo_7.readFeatures(json_Divisioni_sottocampi_esplo_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Divisioni_sottocampi_esplo_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Divisioni_sottocampi_esplo_7.addFeatures(features_Divisioni_sottocampi_esplo_7);
var lyr_Divisioni_sottocampi_esplo_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Divisioni_sottocampi_esplo_7, 
                style: style_Divisioni_sottocampi_esplo_7,
                popuplayertitle: 'Divisioni_sottocampi_esplo',
                interactive: true,
                title: '<img src="styles/legend/Divisioni_sottocampi_esplo_7.png" /> Divisioni_sottocampi_esplo'
            });
var format_campo_rover_8 = new ol.format.GeoJSON();
var features_campo_rover_8 = format_campo_rover_8.readFeatures(json_campo_rover_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_campo_rover_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_campo_rover_8.addFeatures(features_campo_rover_8);
var lyr_campo_rover_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_campo_rover_8, 
                style: style_campo_rover_8,
                popuplayertitle: 'campo_rover',
                interactive: true,
                title: '<img src="styles/legend/campo_rover_8.png" /> campo_rover'
            });
var format_t_12_9 = new ol.format.GeoJSON();
var features_t_12_9 = format_t_12_9.readFeatures(json_t_12_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_t_12_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_t_12_9.addFeatures(features_t_12_9);
var lyr_t_12_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_t_12_9, 
                style: style_t_12_9,
                popuplayertitle: 't_12',
                interactive: true,
                title: '<img src="styles/legend/t_12_9.png" /> t_12'
            });
var format_Radura_10 = new ol.format.GeoJSON();
var features_Radura_10 = format_Radura_10.readFeatures(json_Radura_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Radura_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Radura_10.addFeatures(features_Radura_10);
var lyr_Radura_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Radura_10, 
                style: style_Radura_10,
                popuplayertitle: 'Radura',
                interactive: true,
                title: '<img src="styles/legend/Radura_10.png" /> Radura'
            });
var format_Zonalogistica1_11 = new ol.format.GeoJSON();
var features_Zonalogistica1_11 = format_Zonalogistica1_11.readFeatures(json_Zonalogistica1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonalogistica1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonalogistica1_11.addFeatures(features_Zonalogistica1_11);
var lyr_Zonalogistica1_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonalogistica1_11, 
                style: style_Zonalogistica1_11,
                popuplayertitle: 'Zona logistica 1',
                interactive: true,
                title: '<img src="styles/legend/Zonalogistica1_11.png" /> Zona logistica 1'
            });
var format_t_10_12 = new ol.format.GeoJSON();
var features_t_10_12 = format_t_10_12.readFeatures(json_t_10_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_t_10_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_t_10_12.addFeatures(features_t_10_12);
var lyr_t_10_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_t_10_12, 
                style: style_t_10_12,
                popuplayertitle: 't_10',
                interactive: true,
                title: '<img src="styles/legend/t_10_12.png" /> t_10'
            });
var format_PalcoZonaeventiSponsor_13 = new ol.format.GeoJSON();
var features_PalcoZonaeventiSponsor_13 = format_PalcoZonaeventiSponsor_13.readFeatures(json_PalcoZonaeventiSponsor_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PalcoZonaeventiSponsor_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PalcoZonaeventiSponsor_13.addFeatures(features_PalcoZonaeventiSponsor_13);
var lyr_PalcoZonaeventiSponsor_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PalcoZonaeventiSponsor_13, 
                style: style_PalcoZonaeventiSponsor_13,
                popuplayertitle: 'Palco+Zona eventi+Sponsor',
                interactive: true,
                title: '<img src="styles/legend/PalcoZonaeventiSponsor_13.png" /> Palco+Zona eventi+Sponsor'
            });
var format_Centrologistico_14 = new ol.format.GeoJSON();
var features_Centrologistico_14 = format_Centrologistico_14.readFeatures(json_Centrologistico_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centrologistico_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centrologistico_14.addFeatures(features_Centrologistico_14);
var lyr_Centrologistico_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Centrologistico_14, 
                style: style_Centrologistico_14,
                popuplayertitle: 'Centro logistico',
                interactive: true,
                title: '<img src="styles/legend/Centrologistico_14.png" /> Centro logistico'
            });
var format_t_2_15 = new ol.format.GeoJSON();
var features_t_2_15 = format_t_2_15.readFeatures(json_t_2_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_t_2_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_t_2_15.addFeatures(features_t_2_15);
var lyr_t_2_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_t_2_15, 
                style: style_t_2_15,
                popuplayertitle: 't_2',
                interactive: true,
                title: '<img src="styles/legend/t_2_15.png" /> t_2'
            });
var format_piazze_sottocampo_esplo_16 = new ol.format.GeoJSON();
var features_piazze_sottocampo_esplo_16 = format_piazze_sottocampo_esplo_16.readFeatures(json_piazze_sottocampo_esplo_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_piazze_sottocampo_esplo_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_piazze_sottocampo_esplo_16.addFeatures(features_piazze_sottocampo_esplo_16);
var lyr_piazze_sottocampo_esplo_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_piazze_sottocampo_esplo_16, 
                style: style_piazze_sottocampo_esplo_16,
                popuplayertitle: 'piazze_sottocampo_esplo',
                interactive: true,
                title: '<img src="styles/legend/piazze_sottocampo_esplo_16.png" /> piazze_sottocampo_esplo'
            });
var format_Docce_17 = new ol.format.GeoJSON();
var features_Docce_17 = format_Docce_17.readFeatures(json_Docce_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Docce_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Docce_17.addFeatures(features_Docce_17);
var lyr_Docce_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Docce_17, 
                style: style_Docce_17,
                popuplayertitle: 'Docce',
                interactive: true,
                title: '<img src="styles/legend/Docce_17.png" /> Docce'
            });
var format_WC_18 = new ol.format.GeoJSON();
var features_WC_18 = format_WC_18.readFeatures(json_WC_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WC_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WC_18.addFeatures(features_WC_18);
var lyr_WC_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WC_18, 
                style: style_WC_18,
                popuplayertitle: 'WC',
                interactive: true,
                title: '<img src="styles/legend/WC_18.png" /> WC'
            });
var format_Containerdepurazione_19 = new ol.format.GeoJSON();
var features_Containerdepurazione_19 = format_Containerdepurazione_19.readFeatures(json_Containerdepurazione_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Containerdepurazione_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Containerdepurazione_19.addFeatures(features_Containerdepurazione_19);
var lyr_Containerdepurazione_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Containerdepurazione_19, 
                style: style_Containerdepurazione_19,
                popuplayertitle: 'Container depurazione',
                interactive: true,
                title: '<img src="styles/legend/Containerdepurazione_19.png" /> Container depurazione'
            });
var format_Acquapotabilebestiale_20 = new ol.format.GeoJSON();
var features_Acquapotabilebestiale_20 = format_Acquapotabilebestiale_20.readFeatures(json_Acquapotabilebestiale_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acquapotabilebestiale_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acquapotabilebestiale_20.addFeatures(features_Acquapotabilebestiale_20);
var lyr_Acquapotabilebestiale_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Acquapotabilebestiale_20, 
                style: style_Acquapotabilebestiale_20,
                popuplayertitle: 'Acqua potabile bestiale',
                interactive: true,
                title: '<img src="styles/legend/Acquapotabilebestiale_20.png" /> Acqua potabile bestiale'
            });

lyr_SWISSIMAGEHintergrund_0.setVisible(false);lyr_Landeskarte125000LK25_1.setVisible(true);lyr_campo_esplo_bosco_2_2.setVisible(true);lyr_campo_esplo_bosco_1_3.setVisible(true);lyr_campo_esplo_prato_4.setVisible(true);lyr_campo_pio_5.setVisible(true);lyr_Piazza_centrale_esplo_6.setVisible(true);lyr_Divisioni_sottocampi_esplo_7.setVisible(true);lyr_campo_rover_8.setVisible(true);lyr_t_12_9.setVisible(true);lyr_Radura_10.setVisible(true);lyr_Zonalogistica1_11.setVisible(true);lyr_t_10_12.setVisible(true);lyr_PalcoZonaeventiSponsor_13.setVisible(true);lyr_Centrologistico_14.setVisible(true);lyr_t_2_15.setVisible(true);lyr_piazze_sottocampo_esplo_16.setVisible(true);lyr_Docce_17.setVisible(true);lyr_WC_18.setVisible(true);lyr_Containerdepurazione_19.setVisible(true);lyr_Acquapotabilebestiale_20.setVisible(true);
var layersList = [lyr_SWISSIMAGEHintergrund_0,lyr_Landeskarte125000LK25_1,lyr_campo_esplo_bosco_2_2,lyr_campo_esplo_bosco_1_3,lyr_campo_esplo_prato_4,lyr_campo_pio_5,lyr_Piazza_centrale_esplo_6,lyr_Divisioni_sottocampi_esplo_7,lyr_campo_rover_8,lyr_t_12_9,lyr_Radura_10,lyr_Zonalogistica1_11,lyr_t_10_12,lyr_PalcoZonaeventiSponsor_13,lyr_Centrologistico_14,lyr_t_2_15,lyr_piazze_sottocampo_esplo_16,lyr_Docce_17,lyr_WC_18,lyr_Containerdepurazione_19,lyr_Acquapotabilebestiale_20];
lyr_campo_esplo_bosco_2_2.set('fieldAliases', {'id': 'id', });
lyr_campo_esplo_bosco_1_3.set('fieldAliases', {'id': 'id', });
lyr_campo_esplo_prato_4.set('fieldAliases', {'id': 'id', 'campo_espl': 'campo_espl', });
lyr_campo_pio_5.set('fieldAliases', {'id': 'id', });
lyr_Piazza_centrale_esplo_6.set('fieldAliases', {'id': 'id', });
lyr_Divisioni_sottocampi_esplo_7.set('fieldAliases', {'id': 'id', });
lyr_campo_rover_8.set('fieldAliases', {'id': 'id', 'id_2': 'id_2', 'id_3': 'id_3', 'id_4': 'id_4', 'id_5': 'id_5', 'id_6': 'id_6', });
lyr_t_12_9.set('fieldAliases', {'id': 'id', });
lyr_Radura_10.set('fieldAliases', {'id': 'id', });
lyr_Zonalogistica1_11.set('fieldAliases', {'id': 'id', });
lyr_t_10_12.set('fieldAliases', {'id': 'id', });
lyr_PalcoZonaeventiSponsor_13.set('fieldAliases', {'id': 'id', });
lyr_Centrologistico_14.set('fieldAliases', {'id': 'id', });
lyr_t_2_15.set('fieldAliases', {'id': 'id', });
lyr_piazze_sottocampo_esplo_16.set('fieldAliases', {'id': 'id', });
lyr_Docce_17.set('fieldAliases', {'FID': 'FID', });
lyr_WC_18.set('fieldAliases', {'FID': 'FID', });
lyr_Containerdepurazione_19.set('fieldAliases', {'FID': 'FID', });
lyr_Acquapotabilebestiale_20.set('fieldAliases', {'FID': 'FID', });
lyr_campo_esplo_bosco_2_2.set('fieldImages', {'id': 'TextEdit', });
lyr_campo_esplo_bosco_1_3.set('fieldImages', {'id': 'TextEdit', });
lyr_campo_esplo_prato_4.set('fieldImages', {'id': 'TextEdit', 'campo_espl': 'TextEdit', });
lyr_campo_pio_5.set('fieldImages', {'id': 'TextEdit', });
lyr_Piazza_centrale_esplo_6.set('fieldImages', {'id': 'TextEdit', });
lyr_Divisioni_sottocampi_esplo_7.set('fieldImages', {'id': 'TextEdit', });
lyr_campo_rover_8.set('fieldImages', {'id': 'TextEdit', 'id_2': 'TextEdit', 'id_3': 'TextEdit', 'id_4': 'TextEdit', 'id_5': 'TextEdit', 'id_6': 'TextEdit', });
lyr_t_12_9.set('fieldImages', {'id': '', });
lyr_Radura_10.set('fieldImages', {'id': 'TextEdit', });
lyr_Zonalogistica1_11.set('fieldImages', {'id': '', });
lyr_t_10_12.set('fieldImages', {'id': 'TextEdit', });
lyr_PalcoZonaeventiSponsor_13.set('fieldImages', {'id': '', });
lyr_Centrologistico_14.set('fieldImages', {'id': '', });
lyr_t_2_15.set('fieldImages', {'id': 'TextEdit', });
lyr_piazze_sottocampo_esplo_16.set('fieldImages', {'id': '', });
lyr_Docce_17.set('fieldImages', {'FID': 'Range', });
lyr_WC_18.set('fieldImages', {'FID': 'Range', });
lyr_Containerdepurazione_19.set('fieldImages', {'FID': 'TextEdit', });
lyr_Acquapotabilebestiale_20.set('fieldImages', {'FID': 'Range', });
lyr_campo_esplo_bosco_2_2.set('fieldLabels', {'id': 'no label', });
lyr_campo_esplo_bosco_1_3.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_campo_esplo_prato_4.set('fieldLabels', {'id': 'no label', 'campo_espl': 'no label', });
lyr_campo_pio_5.set('fieldLabels', {'id': 'no label', });
lyr_Piazza_centrale_esplo_6.set('fieldLabels', {'id': 'no label', });
lyr_Divisioni_sottocampi_esplo_7.set('fieldLabels', {'id': 'no label', });
lyr_campo_rover_8.set('fieldLabels', {'id': 'no label', 'id_2': 'no label', 'id_3': 'no label', 'id_4': 'no label', 'id_5': 'no label', 'id_6': 'no label', });
lyr_t_12_9.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_Radura_10.set('fieldLabels', {'id': 'no label', });
lyr_Zonalogistica1_11.set('fieldLabels', {'id': 'no label', });
lyr_t_10_12.set('fieldLabels', {'id': 'no label', });
lyr_PalcoZonaeventiSponsor_13.set('fieldLabels', {'id': 'no label', });
lyr_Centrologistico_14.set('fieldLabels', {'id': 'no label', });
lyr_t_2_15.set('fieldLabels', {'id': 'hidden field', });
lyr_piazze_sottocampo_esplo_16.set('fieldLabels', {'id': 'no label', });
lyr_Docce_17.set('fieldLabels', {'FID': 'no label', });
lyr_WC_18.set('fieldLabels', {'FID': 'no label', });
lyr_Containerdepurazione_19.set('fieldLabels', {'FID': 'no label', });
lyr_Acquapotabilebestiale_20.set('fieldLabels', {'FID': 'no label', });
lyr_Acquapotabilebestiale_20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});