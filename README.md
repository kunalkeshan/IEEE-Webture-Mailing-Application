# IEEE Webture Boot camp on Fullstack Development - Mailing Application

Web application that sends confirmation and paid email updates to the attendees of the boot camp.

Table of Contents:

- [Installation](#installation)
- [Basic Functions](#basic-functions)
- [HTTP Endpoints](#http-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Installation

Use `$ npm install` to install the dependencies.

Additionally you'll need to do some external set up.

- The Response's from the Google Sheets being extracted come from the responses of [TypeForm](https://typeform.com).
  - Create a TypeForm and Connect it to a Google Sheet.
  - [Publish the Google Sheets](https://www.algolia.com/doc/tools/crawler/guides/enriching-extraction-with-external-data/how-to/expose-google-spreadsheet-as-csv/) to the web in CSV Format and copy the published URL.
  - Paste the URL in `config/index.js`.

  ```js
  const sheets = {
    ALL_PARTICIPANTS_SPREADSHEET_PUBLISHED_URL: isProduction ? '<public sheet link> ' : '<testing sheet link>',
    }
  ```

- For the Mailing Service, [Mailgun](https://mailgun.com) is used in the application.
  - Create a Mailgun account.
  - Add your Domain and create an API Key for it.
  - Copy your domain and paste it in a `.env` file on the root of your app.

  ```env
    # NODE ENVIRONMENT 

    NODE_ENV=development
    PORT=5000

    # EMAIL CONFIG

    EMAIL_API_KEY=<mailgun api key here>
    EMAIL_DOMAIN=<mailgun api domain here>

    # DATABASE

    DB_URL_TEST='mongodb://localhost:27017:IEEEWebture'
    DB_URL_PROD=<production mongodb url here>
  ```

## Basic Functions

- Application is running on [Express](https://expressjs.com/en/api.html).
- It fetches the data from the Google Sheet and sends the emails.
- It uses [TypeForm](https://typeform.com) to get the responses.
- It uses [Mailgun](https://mailgun.com) to send the emails.
- For Quick comparison, of email recipients, the data is stored in MongoDB. (Also if the hosting system is ephemeral, this saves the tension of having to worry about emails being sent more than once to the same person)
- Three Emails are sent to the attendees.
  - One is a confirmation email.
  - The other is a paid email.
  - The last is a error email if the email given by the attendee is invalid. (will be sent to admin email specified in the `config/index.js` file)

## HTTP Endpoints

### Default

```rest
[GET](/)
Returns information about the application.
```

### Fetch Participants Count

```rest
[GET](/api/participants-count)
Returns the number of participants in the boot camp.
```

## Contributing

- Fork the repository.
- Create a new branch for your changes.
- Make your changes.
- Commit your changes.
- Push your changes to the remote repository.
- Create a pull request on GitHub.

## License

This project is licensed under the [MIT License](/LICENSE).
