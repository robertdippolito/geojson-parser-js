# geojson-parser-js
A Node.js module that validate geojson string and let easily parse geometries from it
## Installation 
```sh
npm install geojson-parser-js --save
yarn add geojson-parser-js
bower install geojson-parser-js --save
```
## Usage
### Javascript
```javascript
var geojson = require('geojson-parser-js');
var isValid = geojson.isValid('{ "type": "FeatureCollection",  "features": [] }');
```
```sh
Output should be 'true'
```
```javascript
var geojson = require('geojson-parser-js');
var features = geojson.parse('{ "type": "FeatureCollection",  "features": [] }');
```
```sh
Output should be an instance of FeatureCollection class
```
### TypeScript
```typescript
import {Geojson} from 'geojson-parser-js';
var isValid = Geojson.isValid({ "type": "FeatureCollection",  "features": [] });
```
```sh
Output should be 'true'
```
```typescript
import {Geojson} from 'geojson-parser-js';
import { FeatureCollection } from 'geojson-parser-js';
let features:FeatureCollection = Geojson.parse('{ "type": "FeatureCollection",  "features": [] }');
```
```sh
Output should be an instance of FeatureCollection class
```
### AMD
```javascript
define(function(require,exports,module){
  var parser = require('geojson-parser-js');
});
```
## Test 
```sh
npm run test
```