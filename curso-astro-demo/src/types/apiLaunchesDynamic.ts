// To parse this data:
//
//   import { Convert } from "./file";
//
//   const aPISpaceXResponse = Convert.toAPISpaceXResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface APISpaceXResponse {
    flight_number:           number;
    mission_name:            string;
    mission_id:              string[];
    upcoming:                boolean;
    launch_year:             string;
    launch_date_unix:        number;
    launch_date_utc:         Date;
    launch_date_local:       Date;
    is_tentative:            boolean;
    tentative_max_precision: TentativeMaxPrecision;
    tbd:                     boolean;
    launch_window:           number;
    rocket:                  Rocket;
    ships:                   string[];
    telemetry:               Telemetry;
    launch_site:             LaunchSite;
    launch_success:          boolean;
    launch_failure_details?: LaunchFailureDetails;
    links:                   Links;
    details:                 null | string;
    static_fire_date_utc:    Date | null;
    static_fire_date_unix:   number | null;
    timeline:                { [key: string]: number };
    crew:                    null;
}

export interface LaunchFailureDetails {
    time:     number;
    altitude: number | null;
    reason:   string;
}

export interface LaunchSite {
    site_id:        SiteID;
    site_name:      SiteName;
    site_name_long: SiteNameLong;
}

export enum SiteID {
    CcafsSlc40 = "ccafs_slc_40",
    KwajaleinAtoll = "kwajalein_atoll",
}

export enum SiteName {
    CcafsSlc40 = "CCAFS SLC 40",
    KwajaleinAtoll = "Kwajalein Atoll",
}

export enum SiteNameLong {
    CapeCanaveralAirForceStationSpaceLaunchComplex40 = "Cape Canaveral Air Force Station Space Launch Complex 40",
    KwajaleinAtollOmelekIsland = "Kwajalein Atoll Omelek Island",
}

export interface Links {
    mission_patch:       string;
    mission_patch_small: string;
    reddit_campaign:     null;
    reddit_launch:       null | string;
    reddit_recovery:     null;
    reddit_media:        null;
    presskit:            null | string;
    article_link:        string;
    wikipedia:           string;
    video_link:          string;
    youtube_id:          string;
    flickr_images:       any[];
}

export interface Rocket {
    rocket_id:    RocketID;
    rocket_name:  RocketName;
    rocket_type:  RocketType;
    first_stage:  FirstStage;
    second_stage: SecondStage;
    fairings:     Fairings | null;
}

export interface Fairings {
    reused:           boolean;
    recovery_attempt: boolean;
    recovered:        boolean;
    ship:             null;
}

export interface FirstStage {
    cores: Core[];
}

export interface Core {
    core_serial:     string;
    flight:          number;
    block:           number | null;
    gridfins:        boolean;
    legs:            boolean;
    reused:          boolean;
    land_success:    null;
    landing_intent:  boolean;
    landing_type:    null;
    landing_vehicle: null;
}

export enum RocketID {
    Falcon1 = "falcon1",
    Falcon9 = "falcon9",
}

export enum RocketName {
    Falcon1 = "Falcon 1",
    Falcon9 = "Falcon 9",
}

export enum RocketType {
    MerlinA = "Merlin A",
    MerlinC = "Merlin C",
    V10 = "v1.0",
}

export interface SecondStage {
    block:    number;
    payloads: Payload[];
}

export interface Payload {
    payload_id:         string;
    norad_id:           number[];
    reused:             boolean;
    customers:          string[];
    nationality?:       Nationality;
    manufacturer?:      null | string;
    payload_type:       PayloadType;
    payload_mass_kg:    number | null;
    payload_mass_lbs:   number | null;
    orbit:              Orbit;
    orbit_params:       OrbitParams;
    cap_serial?:        string;
    mass_returned_kg?:  number | null;
    mass_returned_lbs?: number | null;
    flight_time_sec?:   number;
    cargo_manifest?:    null | string;
}

export enum Nationality {
    Malaysia = "Malaysia",
    UnitedStates = "United States",
}

export enum Orbit {
    Iss = "ISS",
    Leo = "LEO",
}

export interface OrbitParams {
    reference_system:   ReferenceSystem;
    regime:             Regime;
    longitude:          null;
    semi_major_axis_km: number | null;
    eccentricity:       number | null;
    periapsis_km:       number | null;
    apoapsis_km:        number | null;
    inclination_deg:    number | null;
    period_min:         number | null;
    lifespan_years:     number | null;
    epoch:              Date | null;
    mean_motion:        number | null;
    raan:               number | null;
    arg_of_pericenter?: number | null;
    mean_anomaly?:      number | null;
}

export enum ReferenceSystem {
    Geocentric = "geocentric",
}

export enum Regime {
    LowEarth = "low-earth",
}

export enum PayloadType {
    Dragon10 = "Dragon 1.0",
    DragonBoilerplate = "Dragon Boilerplate",
    Satellite = "Satellite",
}

export interface Telemetry {
    flight_club: null;
}

export enum TentativeMaxPrecision {
    Hour = "hour",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toAPISpaceXResponse(json: string): APISpaceXResponse[] {
        return cast(JSON.parse(json), a(r("APISpaceXResponse")));
    }

    public static aPISpaceXResponseToJson(value: APISpaceXResponse[]): string {
        return JSON.stringify(uncast(value, a(r("APISpaceXResponse"))), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "APISpaceXResponse": o([
        { json: "flight_number", js: "flight_number", typ: 0 },
        { json: "mission_name", js: "mission_name", typ: "" },
        { json: "mission_id", js: "mission_id", typ: a("") },
        { json: "upcoming", js: "upcoming", typ: true },
        { json: "launch_year", js: "launch_year", typ: "" },
        { json: "launch_date_unix", js: "launch_date_unix", typ: 0 },
        { json: "launch_date_utc", js: "launch_date_utc", typ: Date },
        { json: "launch_date_local", js: "launch_date_local", typ: Date },
        { json: "is_tentative", js: "is_tentative", typ: true },
        { json: "tentative_max_precision", js: "tentative_max_precision", typ: r("TentativeMaxPrecision") },
        { json: "tbd", js: "tbd", typ: true },
        { json: "launch_window", js: "launch_window", typ: 0 },
        { json: "rocket", js: "rocket", typ: r("Rocket") },
        { json: "ships", js: "ships", typ: a("") },
        { json: "telemetry", js: "telemetry", typ: r("Telemetry") },
        { json: "launch_site", js: "launch_site", typ: r("LaunchSite") },
        { json: "launch_success", js: "launch_success", typ: true },
        { json: "launch_failure_details", js: "launch_failure_details", typ: u(undefined, r("LaunchFailureDetails")) },
        { json: "links", js: "links", typ: r("Links") },
        { json: "details", js: "details", typ: u(null, "") },
        { json: "static_fire_date_utc", js: "static_fire_date_utc", typ: u(Date, null) },
        { json: "static_fire_date_unix", js: "static_fire_date_unix", typ: u(0, null) },
        { json: "timeline", js: "timeline", typ: m(0) },
        { json: "crew", js: "crew", typ: null },
    ], false),
    "LaunchFailureDetails": o([
        { json: "time", js: "time", typ: 0 },
        { json: "altitude", js: "altitude", typ: u(0, null) },
        { json: "reason", js: "reason", typ: "" },
    ], false),
    "LaunchSite": o([
        { json: "site_id", js: "site_id", typ: r("SiteID") },
        { json: "site_name", js: "site_name", typ: r("SiteName") },
        { json: "site_name_long", js: "site_name_long", typ: r("SiteNameLong") },
    ], false),
    "Links": o([
        { json: "mission_patch", js: "mission_patch", typ: "" },
        { json: "mission_patch_small", js: "mission_patch_small", typ: "" },
        { json: "reddit_campaign", js: "reddit_campaign", typ: null },
        { json: "reddit_launch", js: "reddit_launch", typ: u(null, "") },
        { json: "reddit_recovery", js: "reddit_recovery", typ: null },
        { json: "reddit_media", js: "reddit_media", typ: null },
        { json: "presskit", js: "presskit", typ: u(null, "") },
        { json: "article_link", js: "article_link", typ: "" },
        { json: "wikipedia", js: "wikipedia", typ: "" },
        { json: "video_link", js: "video_link", typ: "" },
        { json: "youtube_id", js: "youtube_id", typ: "" },
        { json: "flickr_images", js: "flickr_images", typ: a("any") },
    ], false),
    "Rocket": o([
        { json: "rocket_id", js: "rocket_id", typ: r("RocketID") },
        { json: "rocket_name", js: "rocket_name", typ: r("RocketName") },
        { json: "rocket_type", js: "rocket_type", typ: r("RocketType") },
        { json: "first_stage", js: "first_stage", typ: r("FirstStage") },
        { json: "second_stage", js: "second_stage", typ: r("SecondStage") },
        { json: "fairings", js: "fairings", typ: u(r("Fairings"), null) },
    ], false),
    "Fairings": o([
        { json: "reused", js: "reused", typ: true },
        { json: "recovery_attempt", js: "recovery_attempt", typ: true },
        { json: "recovered", js: "recovered", typ: true },
        { json: "ship", js: "ship", typ: null },
    ], false),
    "FirstStage": o([
        { json: "cores", js: "cores", typ: a(r("Core")) },
    ], false),
    "Core": o([
        { json: "core_serial", js: "core_serial", typ: "" },
        { json: "flight", js: "flight", typ: 0 },
        { json: "block", js: "block", typ: u(0, null) },
        { json: "gridfins", js: "gridfins", typ: true },
        { json: "legs", js: "legs", typ: true },
        { json: "reused", js: "reused", typ: true },
        { json: "land_success", js: "land_success", typ: null },
        { json: "landing_intent", js: "landing_intent", typ: true },
        { json: "landing_type", js: "landing_type", typ: null },
        { json: "landing_vehicle", js: "landing_vehicle", typ: null },
    ], false),
    "SecondStage": o([
        { json: "block", js: "block", typ: 0 },
        { json: "payloads", js: "payloads", typ: a(r("Payload")) },
    ], false),
    "Payload": o([
        { json: "payload_id", js: "payload_id", typ: "" },
        { json: "norad_id", js: "norad_id", typ: a(0) },
        { json: "reused", js: "reused", typ: true },
        { json: "customers", js: "customers", typ: a("") },
        { json: "nationality", js: "nationality", typ: u(undefined, r("Nationality")) },
        { json: "manufacturer", js: "manufacturer", typ: u(undefined, u(null, "")) },
        { json: "payload_type", js: "payload_type", typ: r("PayloadType") },
        { json: "payload_mass_kg", js: "payload_mass_kg", typ: u(0, null) },
        { json: "payload_mass_lbs", js: "payload_mass_lbs", typ: u(0, null) },
        { json: "orbit", js: "orbit", typ: r("Orbit") },
        { json: "orbit_params", js: "orbit_params", typ: r("OrbitParams") },
        { json: "cap_serial", js: "cap_serial", typ: u(undefined, "") },
        { json: "mass_returned_kg", js: "mass_returned_kg", typ: u(undefined, u(0, null)) },
        { json: "mass_returned_lbs", js: "mass_returned_lbs", typ: u(undefined, u(0, null)) },
        { json: "flight_time_sec", js: "flight_time_sec", typ: u(undefined, 0) },
        { json: "cargo_manifest", js: "cargo_manifest", typ: u(undefined, u(null, "")) },
    ], false),
    "OrbitParams": o([
        { json: "reference_system", js: "reference_system", typ: r("ReferenceSystem") },
        { json: "regime", js: "regime", typ: r("Regime") },
        { json: "longitude", js: "longitude", typ: null },
        { json: "semi_major_axis_km", js: "semi_major_axis_km", typ: u(3.14, null) },
        { json: "eccentricity", js: "eccentricity", typ: u(3.14, null) },
        { json: "periapsis_km", js: "periapsis_km", typ: u(3.14, null) },
        { json: "apoapsis_km", js: "apoapsis_km", typ: u(3.14, null) },
        { json: "inclination_deg", js: "inclination_deg", typ: u(3.14, null) },
        { json: "period_min", js: "period_min", typ: u(3.14, null) },
        { json: "lifespan_years", js: "lifespan_years", typ: u(0, null) },
        { json: "epoch", js: "epoch", typ: u(Date, null) },
        { json: "mean_motion", js: "mean_motion", typ: u(3.14, null) },
        { json: "raan", js: "raan", typ: u(3.14, null) },
        { json: "arg_of_pericenter", js: "arg_of_pericenter", typ: u(undefined, u(3.14, null)) },
        { json: "mean_anomaly", js: "mean_anomaly", typ: u(undefined, u(3.14, null)) },
    ], false),
    "Telemetry": o([
        { json: "flight_club", js: "flight_club", typ: null },
    ], false),
    "SiteID": [
        "ccafs_slc_40",
        "kwajalein_atoll",
    ],
    "SiteName": [
        "CCAFS SLC 40",
        "Kwajalein Atoll",
    ],
    "SiteNameLong": [
        "Cape Canaveral Air Force Station Space Launch Complex 40",
        "Kwajalein Atoll Omelek Island",
    ],
    "RocketID": [
        "falcon1",
        "falcon9",
    ],
    "RocketName": [
        "Falcon 1",
        "Falcon 9",
    ],
    "RocketType": [
        "Merlin A",
        "Merlin C",
        "v1.0",
    ],
    "Nationality": [
        "Malaysia",
        "United States",
    ],
    "Orbit": [
        "ISS",
        "LEO",
    ],
    "ReferenceSystem": [
        "geocentric",
    ],
    "Regime": [
        "low-earth",
    ],
    "PayloadType": [
        "Dragon 1.0",
        "Dragon Boilerplate",
        "Satellite",
    ],
    "TentativeMaxPrecision": [
        "hour",
    ],
};
