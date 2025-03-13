export interface InsightData {
    url: string;
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
    pwa: number;
    audits: Record<string, any>;
}