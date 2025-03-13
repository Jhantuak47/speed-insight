import React, { useState } from 'react'
import { RiMenuSearchFill } from "react-icons/ri";
import { shouldDrawMetricInsights, shouldDrawPerformanceInsights } from './private/utils/InsightCanvas.util';
import PerformanceInsight from '../Performance';

import "./_styles/index.scss";
import MetricInsights from '../MetricInsights';

const performanceInsightConfig = {
    ['performance']: {
        title: 'Performance Insight',
        customClass: 'bg-red-50 my-4 py-2 rounded-md',
        description: 'This is the performance insight of the website',
        permissions: shouldDrawPerformanceInsights,
        renderFields: ["first-contentful-paint", "largest-contentful-paint", "first-meaningful-paint",],
        drawInsights: (props) => <PerformanceInsight {...props} />,
    },
    ['metrics']: {
        title: 'Metrics Insight',
        customClass: 'bg-green-50 my-4 py-2 rounded-md',
        description: 'This is the metrics insight of the website',
        renderFields: ["speed-index", "is-on-https",],
        permissions: shouldDrawMetricInsights,
        drawInsights: ({ apiResponse, ...props }) => <MetricInsights isLoading={apiResponse.isLoading} apiData={apiResponse.apiData} {...props} />,
    },
    ['issues']: {
        title: 'Issues Insight',
        customClass: 'bg-blue-50 my-4 py-2 rounded-md',
        description: 'This is the issues insight of the website',
        renderFields: ["redirects-http", "service-worker", "viewport",],
        permissions: shouldDrawMetricInsights,
        drawInsights: ({ apiResponse, ...props }) => <MetricInsights isLoading={apiResponse.isLoading} apiData={apiResponse.apiData} {...props} />,
    }
}


const InsightCanvas = () => {
    const [searchInsight, setSearchInsight] = useState({});
    const [apiResponse, setApiResponse] = useState({});

    const onSetInsightSearch = (e) => {
        if (e.target.value == '') {
            setSearchInsight({})
        }
        setSearchInsight({ ...searchInsight, input: e.target.value })
    }

    const onSearch = () => {
        console.log('searching for insights', searchInsight.input)
        //validate the input before searching, input should be a valid url.
        setSearchInsight({ ...searchInsight, allowSearch: true })
    }

    return (
        <div className="insight-canvas-wrapper">
            <div className="insight-search-bar">
                <input className='search-bar-input' type="text" placeholder="Search for insights" onChange={onSetInsightSearch} />
                <div className="search-bar-icon-wrapper">
                    <RiMenuSearchFill className='search-bar-icon' onClick={onSearch} />
                </div>
            </div>
            {
                searchInsight.allowSearch && <div className="insight-search-results">
                    {
                        Object.values(performanceInsightConfig)
                            .filter(({ permissions }) => permissions({}))
                            .map(({ drawInsights, title, description, customClass, ...params }, index) =>
                                <div className={`insight-canvas-content ${customClass}`} key={`${title}-${index}`}>
                                    <div className="insight-canvas-content-header">
                                        <h3 className='font-bold'>{title} :</h3>
                                        <p className='font-light'>{description}</p>
                                    </div>
                                    <div className="insight-canvas-content-body">
                                        {drawInsights({ title, searchInputUrl: searchInsight.input, index, setApiResponse, apiResponse, ...params })}
                                    </div>
                                </div>
                            )
                    }
                </div>
            }

        </div >
    )
}

export default InsightCanvas