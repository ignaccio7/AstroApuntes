// To parse this data:
//
//   import { Convert } from "./file";
//
//   const aPISpaceXResponse = Convert.toAPISpaceXResponse(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface APISpaceXResponse {
    id: number;
    active: boolean;
    stages: number;
    boosters: number;
    cost_per_launch: number;
    success_rate_pct: number;
    first_flight: Date;
    country: string;
    company: string;
    height: Diameter;
    diameter: Diameter;
    mass: Mass;
    payload_weights: PayloadWeight[];
    first_stage: FirstStage;
    second_stage: SecondStage;
    engines: Engines;
    landing_legs: LandingLegs;
    flickr_images: string[];
    wikipedia: string;
    description: string;
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
}

export interface Diameter {
    meters: number | null;
    feet: number | null;
}

export interface Engines {
    number: number;
    type: string;
    version: string;
    layout: null | string;
    isp: ISP;
    engine_loss_max: number | null;
    propellant_1: string;
    propellant_2: string;
    thrust_sea_level: Thrust;
    thrust_vacuum: Thrust;
    thrust_to_weight: number;
}

export interface ISP {
    sea_level: number;
    vacuum: number;
}

export interface Thrust {
    kN: number;
    lbf: number;
}

export interface FirstStage {
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number | null;
    thrust_sea_level: Thrust;
    thrust_vacuum: Thrust;
    cores?: number;
}

export interface LandingLegs {
    number: number;
    material: null | string;
}

export interface Mass {
    kg: number;
    lb: number;
}

export interface PayloadWeight {
    id: string;
    name: string;
    kg: number;
    lb: number;
}

export interface SecondStage {
    reusable: boolean;
    engines: number;
    fuel_amount_tons: number;
    burn_time_sec: number | null;
    thrust: Thrust;
    payloads: Payloads;
}

export interface Payloads {
    option_1: string;
    composite_fairing: CompositeFairing;
    option_2?: string;
}

export interface CompositeFairing {
    height: Diameter;
    diameter: Diameter;
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
            } catch (_) { }
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
            : typ.hasOwnProperty("arrayItems") ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props") ? transformObject(getProps(typ), typ.additional, val)
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
        { json: "id", js: "id", typ: 0 },
        { json: "active", js: "active", typ: true },
        { json: "stages", js: "stages", typ: 0 },
        { json: "boosters", js: "boosters", typ: 0 },
        { json: "cost_per_launch", js: "cost_per_launch", typ: 0 },
        { json: "success_rate_pct", js: "success_rate_pct", typ: 0 },
        { json: "first_flight", js: "first_flight", typ: Date },
        { json: "country", js: "country", typ: "" },
        { json: "company", js: "company", typ: "" },
        { json: "height", js: "height", typ: r("Diameter") },
        { json: "diameter", js: "diameter", typ: r("Diameter") },
        { json: "mass", js: "mass", typ: r("Mass") },
        { json: "payload_weights", js: "payload_weights", typ: a(r("PayloadWeight")) },
        { json: "first_stage", js: "first_stage", typ: r("FirstStage") },
        { json: "second_stage", js: "second_stage", typ: r("SecondStage") },
        { json: "engines", js: "engines", typ: r("Engines") },
        { json: "landing_legs", js: "landing_legs", typ: r("LandingLegs") },
        { json: "flickr_images", js: "flickr_images", typ: a("") },
        { json: "wikipedia", js: "wikipedia", typ: "" },
        { json: "description", js: "description", typ: "" },
        { json: "rocket_id", js: "rocket_id", typ: "" },
        { json: "rocket_name", js: "rocket_name", typ: "" },
        { json: "rocket_type", js: "rocket_type", typ: "" },
    ], false),
    "Diameter": o([
        { json: "meters", js: "meters", typ: u(3.14, null) },
        { json: "feet", js: "feet", typ: u(3.14, null) },
    ], false),
    "Engines": o([
        { json: "number", js: "number", typ: 0 },
        { json: "type", js: "type", typ: "" },
        { json: "version", js: "version", typ: "" },
        { json: "layout", js: "layout", typ: u(null, "") },
        { json: "isp", js: "isp", typ: r("ISP") },
        { json: "engine_loss_max", js: "engine_loss_max", typ: u(0, null) },
        { json: "propellant_1", js: "propellant_1", typ: "" },
        { json: "propellant_2", js: "propellant_2", typ: "" },
        { json: "thrust_sea_level", js: "thrust_sea_level", typ: r("Thrust") },
        { json: "thrust_vacuum", js: "thrust_vacuum", typ: r("Thrust") },
        { json: "thrust_to_weight", js: "thrust_to_weight", typ: 3.14 },
    ], false),
    "ISP": o([
        { json: "sea_level", js: "sea_level", typ: 0 },
        { json: "vacuum", js: "vacuum", typ: 0 },
    ], false),
    "Thrust": o([
        { json: "kN", js: "kN", typ: 0 },
        { json: "lbf", js: "lbf", typ: 0 },
    ], false),
    "FirstStage": o([
        { json: "reusable", js: "reusable", typ: true },
        { json: "engines", js: "engines", typ: 0 },
        { json: "fuel_amount_tons", js: "fuel_amount_tons", typ: 3.14 },
        { json: "burn_time_sec", js: "burn_time_sec", typ: u(0, null) },
        { json: "thrust_sea_level", js: "thrust_sea_level", typ: r("Thrust") },
        { json: "thrust_vacuum", js: "thrust_vacuum", typ: r("Thrust") },
        { json: "cores", js: "cores", typ: u(undefined, 0) },
    ], false),
    "LandingLegs": o([
        { json: "number", js: "number", typ: 0 },
        { json: "material", js: "material", typ: u(null, "") },
    ], false),
    "Mass": o([
        { json: "kg", js: "kg", typ: 0 },
        { json: "lb", js: "lb", typ: 0 },
    ], false),
    "PayloadWeight": o([
        { json: "id", js: "id", typ: "" },
        { json: "name", js: "name", typ: "" },
        { json: "kg", js: "kg", typ: 0 },
        { json: "lb", js: "lb", typ: 0 },
    ], false),
    "SecondStage": o([
        { json: "reusable", js: "reusable", typ: true },
        { json: "engines", js: "engines", typ: 0 },
        { json: "fuel_amount_tons", js: "fuel_amount_tons", typ: 3.14 },
        { json: "burn_time_sec", js: "burn_time_sec", typ: u(0, null) },
        { json: "thrust", js: "thrust", typ: r("Thrust") },
        { json: "payloads", js: "payloads", typ: r("Payloads") },
    ], false),
    "Payloads": o([
        { json: "option_1", js: "option_1", typ: "" },
        { json: "composite_fairing", js: "composite_fairing", typ: r("CompositeFairing") },
        { json: "option_2", js: "option_2", typ: u(undefined, "") },
    ], false),
    "CompositeFairing": o([
        { json: "height", js: "height", typ: r("Diameter") },
        { json: "diameter", js: "diameter", typ: r("Diameter") },
    ], false),
};
