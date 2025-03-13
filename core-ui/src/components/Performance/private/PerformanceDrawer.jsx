import React from "react";

const PerformanceMetrics = ({ data, title, metrics }) => {

    return (
        <div className="p-6 max-w-4xl mx-auto bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Website {title}</h2>
            <ul className="space-y-3">
                {data && metrics.map((metric) => {
                    const audit = data.audits[metric];
                    if (!audit) return null;

                    return (
                        <li key={audit.id} className="p-3 bg-gray-100 rounded-md">
                            <h3 className="text-lg font-semibold text-gray-700">{audit.title}</h3>
                            <p className="text-sm text-gray-500">{audit.description}</p>
                            {audit.score !== null && (
                                <div className="mt-2">
                                    <span
                                        className={`px-2 py-1 text-white text-sm rounded-md ${audit.score >= 0.9
                                            ? "bg-green-500"
                                            : audit.score >= 0.5
                                                ? "bg-yellow-500"
                                                : "bg-red-500"
                                            }`}
                                    >
                                        Score: {audit.score * 100}%
                                    </span>
                                </div>
                            )}
                            {audit.displayValue && (
                                <p className="text-sm text-gray-600 mt-1">
                                    Value: {audit.displayValue}
                                </p>
                            )}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PerformanceMetrics;
