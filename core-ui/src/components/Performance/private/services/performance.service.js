import { ApiCommon } from "../../../../common/services";

export const fetchPerformanceInsights = async (inputUrl) => ApiCommon.get('/insights', { url: inputUrl });