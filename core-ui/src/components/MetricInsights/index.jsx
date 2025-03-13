import React, { useEffect } from 'react'
import PerformanceDrawer from '../Performance/private/PerformanceDrawer';

import './_styles/index.scss';
const MetricInsights = ({ title, isLoading, apiData, renderFields }) => {

    return (

        <div className="metric-draweer">
            {
                isLoading ? <div className="is-loading">....loading</div>
                    : <PerformanceDrawer title={title} data={apiData} metrics={renderFields} />
            }

        </div>

    )
}

export default MetricInsights