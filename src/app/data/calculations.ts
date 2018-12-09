import { Metric, ScoutMetricType } from '@robot-analytics/data/metric';
import { reduce } from 'lodash';
import { number } from 'prop-types';
import { std } from 'mathjs'

export type Calculations = {
    [name: string]: Calculation
}

export interface Calculation<T = any> {
    type: ScoutMetricType,
    invoke: (...metrics: Array<Metric<T>>) => Metric
}

export const calculations: Calculations = {
    'Maximum': {
        type: ScoutMetricType.NUMBER,
        invoke: (...metrics: Array<Metric>) => reduce(metrics, function (acc: Metric, metric) {
            if (metric.value > acc.value) acc.value = metric.value
            return acc
        }, { type: ScoutMetricType.NUMBER, value: 0 })
    },
    'Minimum': {
        type: ScoutMetricType.NUMBER,
        invoke: (...metrics: Array<Metric>) => reduce(metrics, function(acc: Metric, metric) {
            if (metric.value > -1 && acc.value == -1) acc.value = metric.value
            else if (metric.value < acc.value) acc.value = metric.value
            return acc
          }, {type: ScoutMetricType.NUMBER, value: -1})
    },
    'Average': {
        type: ScoutMetricType.NUMBER,
        invoke: (...metrics: Array<Metric>) => ({type:ScoutMetricType.NUMBER, value: reduce(metrics, function (acc, metric){ 
            return acc + metric.value}, 0) / metrics.length
        })
    },
    'Standard Deviation': {
        type: ScoutMetricType.NUMBER,
        invoke: (...metrics: Array<Metric>) => ({type: ScoutMetricType.NUMBER, value: std(reduce(metrics, function(acc, metric) { 
            acc.push(metric.value)
            return acc
            }, []))})
    }
};
