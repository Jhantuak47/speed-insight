const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

const getInsights = async (req, res) => {
    const query = req.query;
    const url = query.url;

    if (!url) {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
        const options = { logLevel: 'info', onlyCategories: ['performance'], output: 'json', port: chrome.port };
        const runnerResult = await lighthouse(url, {
            port: chrome.port,
            output: 'json',  // Output the result as JSON
        });

        await chrome.kill();

        const lhr = runnerResult.lhr;
        res.status(200).json(lhr);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while analyzing the URL', details: error.message });
    }
};

module.exports = { getInsights };