## Developer notes

Used Next.js to fulfill the coding test requirements.

Implemented below features:

- Created an api to fetch the data from the json file provided. Added deliberate delay of 1000ms.
- Fetch and display property (hotel) details
- Implemented Sort functionality and summary in the header
- Added Not found and loading pages to show custom message to the user. Click on Hotels, Holidays, Rewards links to see the behaviour
- Used Jest to create unit tests to test the summary , sortby , api router functionality

Partially complete features:

- Ratings component shows only full or empty icon but not half filled

## Setup

Instructions to run the application:

- `npm install`
- Create `.env.local` file in the root directory and add below environment variable for api calls to work
  - `URL=http://localhost:3000`
- `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

To run tests:

- `npm run test`
