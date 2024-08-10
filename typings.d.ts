import {ObjectId} from "bson";

export interface Figure {
    _id: ObjectId
    type?: string
    releaseWave?: {
        name: string
    }
    mainName: string
    material?: string[]
    faction?: {
        name: string
    }[]
    image?: {
        _type: string,
        asset?: {
            _ref: string,
            _type: string
        }
    }
    character?:{
        name: string
    }[]
}

export interface GridFigure {
    _id: ObjectId
    mainName: string
    image?: {
        _type: string,
        asset?: {
            _ref: string,
            _type: string
        }
    }
    releaseWave?: { name: string }
    faction?: { name:string }[]
}

export interface Set {
    _id: ObjectId
    _type: string
    mainName: string
}

export interface Terrain {
    _id: ObjectId
    _type: string
    mainName: string
}

export interface Print {
    _id: ObjectId
    _type: string
    mainName: string
}

export interface Character {
    _id: ObjectId
    _type: string
    name: string
}

export interface Faction {
    _id: string
    _type: string
    alignment: string
    name: string
}

export interface ReleaseWave {
    _id: ObjectId
    _type: string
    name: string
}