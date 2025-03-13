# Express Server Project

This project is an Express server that provides insights using Lighthouse. It includes necessary middleware and a dedicated endpoint for analyzing URLs.

## Project Structure

```
express-server
├── src
│   ├── app.js
│   ├── controllers
│   │   └── insightsController.js
│   ├── routes
│   │   └── insights.js
│   └── types
│       └── index.js
├── package.json
├── .env
└── README.md
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd express-server
   ```

3. Install the dependencies:
   ```
   npm install
   ```

## Environment Variables

Create a `.env` file in the root directory and add your configuration settings for Lighthouse. For example:
```
LIGHTHOUSE_CHROME_PATH=/path/to/chrome
```

## Usage

To start the server, run:
```
npm start
```

The server will be running on `http://localhost:3000`.

## API Endpoint

### GET /insights

This endpoint analyzes a URL using Lighthouse and returns the raw JSON data.

#### Example Request
```
GET http://localhost:3000/insights?url=https://example.com
```

#### Example Response
```json
{
  "lighthouseResult": {
    // Lighthouse analysis results
  }
}
```

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.