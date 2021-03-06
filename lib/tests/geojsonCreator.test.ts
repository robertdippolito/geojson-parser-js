import { expect, should } from 'chai';
import {Geojson} from '../lib/geojson-parser';
import { FeatureCollection} from '../lib/models/geojson';
import * as geojsonSample1 from './sample-geojson/sample1.json.js.js';
import * as geojsonSample2 from '/sample-geojson/sample2.json.js';
import * as geojsonSample3 from './sample-geojson/sample3.json.js.js';
import * as geojsonSample4 from './sample-geojson/sample4.json.js.js';

describe('Geojson Creator', function() {

  it('createGeojsonWithNoFeature', function() {
    let validGeojson:string='{ "type": "FeatureCollection",  "features": [] }';
    let result = Geojson.parse(validGeojson);
    let geojsonStr = Geojson.create(result);
    should().exist(geojsonStr);
  });
  it('createGeojsonWithEmptyFeatureCollection', function() {
    let validGeojson:string= JSON.stringify(geojsonSample1);
    let result = Geojson.parse(validGeojson);
    let geojsonStr = Geojson.create(result);
    should().exist(geojsonStr);
  });
  it('createGeojsonWithSimpleFeature', function() {
    let geojsonStr:string= JSON.stringify(geojsonSample3);    
    let result:FeatureCollection = Geojson.parse(geojsonStr);
    let geojson = Geojson.create(result);
    should().exist(geojson);
  });
  it('createGeojsonWithSimpleFeatureCollection', function() {
    let geojsonStr:string= JSON.stringify(geojsonSample4);
    let result = Geojson.parse(geojsonStr);
    let geojson = Geojson.create(result);
    should().exist(geojson);
  });
  it('createGeojsonWithComplexFeatureCollection', function() {
    let geojsonStr:string= JSON.stringify(geojsonSample2);
    let result = Geojson.parse(geojsonStr);
    let geojson = Geojson.create(result);
    should().exist(geojson);
  });
 
});