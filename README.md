# Airbnb Microservices

This project contains the codebase for an Airbnb-like application, implemented using a microservices architecture with a monorepo structure. The application utilizes MongoDB for data storage and RabbitMQ for message queuing and event-driven communication between the services.

## Features

- **Microservices Architecture**: The application is built using a microservices approach, with each service responsible for a specific domain or functionality.
- **Monorepo Structure**: The codebase is organized as a monorepo, allowing for easier management, testing, and deployment of the individual services.
- **MongoDB Integration**: The application uses MongoDB as the primary data storage solution, providing a scalable and flexible document-oriented database.
- **RabbitMQ Integration**:  RabbitMQ is used as the message broker, facilitating event-driven communication and asynchronous processing between the microservices.
- **User Management**: The application supports user registration, authentication, and management of user profiles and preferences.
- **Listing Management**: Users can create, update, and manage their property listings, including features like pricing, availability, and amenities.
- **Booking and Reservation**: Customers can search for available listings, make reservations, and manage their upcoming and past bookings.
- **Notifications**: The system generates and delivers real-time notifications to users, keeping them informed about important events and updates.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/thismajid/airbnb-microservices.git
```

2. Install the dependencies:

```bash
cd airbnb-microservices
npm install
```

3. Set up the environment variables: Create a .env file in the project's root directory and populate it with the necessary configuration values, such as MongoDB connection details, RabbitMQ connection details, and any other required environment-specific settings.


4. Start the microservices:

```bash
npm run start | or | npm run start:dev
```

### Docker

The application can also be run using Docker. Follow these steps to set up the Docker environment:

1. Build the Docker image:

```bash
docker-compose build
```

2. Run the Docker containers:

```bash
docker-compose up
```


### Contributing
Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please feel free to create a new issue or submit a pull request.


### License
This project is licensed under the MIT License.
