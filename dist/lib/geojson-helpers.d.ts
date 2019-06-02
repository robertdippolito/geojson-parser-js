import { FeatureCollection } from "./models/feature";
export declare abstract class GeojsonHelpers {
    private static isValid;
    protected static parse(geoJson: any): FeatureCollection;
    private static parseFeature;
    private static getProperties;
    private static getPoint;
    private static getMultiPoint;
    private static getLineString;
    private static getMultiLineString;
    private static getPolygon;
    private static getMultiPolygon;
    private static getCoordinates;
    private static getCoordinate;
}