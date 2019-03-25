# NotificationServiceFrontEnd

## Getting Started

### Installation
1. Clone the repo with `git clone git@github.com:johnsn27/NotificationServiceFrontEnd.git`.
2. Run `yarn install` within the project.

### Running It

1. Run `yarn start`.
2. Open [http://localhost:3000](http://localhost:3000) to view the project (Make sure localhost is defined in your bypass proxy settings).
3. In order to transfer data to/from the API, the [NotificationServiceBackEnd](https://github.com/johnsn27/NotificationServiceBackEnd) must be running. Instructions can be found in the project README.md.
4. Assume a user identity by setting the appropriate user ID on the login page. Each user will have differing booking and watched list.

PS: The page will automatically refresh as changes to the code are made.

### Keeping It Updated

1. Pull from master with `git pull` to get any new changes.
2. Run `yarn install` to update dependencies.

## Directory Structure

## Testing

### Automation Tests
Run command `yarn test:e2e` to start the selenium-cucumber-js tests.
