export interface Scout {
    name: String,
    team: Team,
    sections: Array<ScoutSection>
}

export interface Team {
    name: String,
    number: Number
}

export interface ScoutSection {
    name: String,
    metrics: Array<ScoutMetric<any>>
}

export interface ScoutMetric<T> {
    type: ScoutMetricType,
    name: String,
    value: T
}

export enum ScoutMetricType {
    TEXT = "text",
    NUMBER = "number",
    BOOLEAN = "boolean",
    ENUM = "enum"
}
