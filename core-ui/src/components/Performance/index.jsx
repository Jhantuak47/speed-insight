import React, { useEffect } from 'react'
import { fetchPerformanceInsights } from './private/services/performance.service';
import useFetchData from '../../common/hooks/useFetchData';
import PerformanceDrawer from './private/PerformanceDrawer';

import "./_styles/index.scss";

const PerformanceInsight = ({ title, searchInputUrl, setApiResponse, renderFields, ...props }) => {
    const { data, isLoading } = useFetchData(
        fetchPerformanceInsights,
        [searchInputUrl],
        [],
        (apiData) => setApiResponse(data => ({ ...data, apiData })),
    );

    useEffect(() => {
        setApiResponse(data => ({ ...data, isLoading }))
    }, [isLoading]);

    return (

        <div className="performance-draweer">
            {
                isLoading ? <div className="is-loading">....loading</div>
                    : <PerformanceDrawer title={title} data={data} metrics={renderFields}  {...props} />
            }

        </div>

    )
}

export default PerformanceInsight
