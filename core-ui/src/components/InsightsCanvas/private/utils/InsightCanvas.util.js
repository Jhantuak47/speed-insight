export const shouldDrawPerformanceInsights = (config) => {
    return config.performanceInsights || true;
}

export const shouldDrawMetricInsights = (config) => {
    return config.metricInsights || true;
}