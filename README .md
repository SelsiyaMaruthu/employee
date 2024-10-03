# Employee Management System

The Employee Management System is a comprehensive web application designed to streamline the management of employee details, schedules, and administrative processes within an organization. Built with **React and Node.js**, this system offers a user-friendly interface for both administrators and employees to perform various tasks efficiently.

# Features

1. **Employee Management**: Admins can register new employees, manage their details, and assign roles and projects.
2. **Attendance Tracking**: Facilities for recording employee entry and exit times, with options to view and manage attendance records.
3. **Leave Management**: Employees can apply for leaves, while Admins and Managers can approve or reject leave requests.

# Setup

Follow these steps to set up the Employee Management System on your local machine:

### Prerequisites
Ensure you have `Node.js` and `npm` installed on your system. You can download and install them from [Node.js official website](https://nodejs.org/).

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/SelsiyaMaruthu/Employee-Management-System.git
   cd Employee-Management-System
2. **Install dependencies:**
    ```bash
    npm install

3. **Start the Development Server:**
   ```bash
   npm run dev

4. **Run the Backend Server:**
   ```bash
   node server.js

 Make sure to run this command in the root of your project directory to start the backend server.

**Accessing the Application**
After completing the above steps, open your web browser and visit http://localhost:8000 to start using the Employee Management System.

By following these instructions, you can set up and start using the Employee Management System on your local environment for development and testing purposes.


# Dashboards

* **Employee Dashboard:** Provides employees with personal details, leave application forms, a view of ongoing and completed projects, and payment status information. Employees can apply for leaves and view their leave status.


# Usage

Upon successful setup, you can use the application as follows:


* **Dashboard Navigation**: Use the dashboard specific to your role (Admin/Manager/Employee) to access various functionalities.
* **Employee Registration**: Admins can register new employees through the Admin Dashboard.
* **Attendance and Leave Management**: Employees can mark their attendance and apply for leaves through their dashboard.

# Backend Overview

The backend of the Employee Management System is built with Node.js and Express.js, providing a robust API for the frontend React application. It interacts with a MySQL database to manage employee data, authentication, and other functionalities essential to the system. Below are key components of the backend:

# Core Dependencies
  
 * ***Express.js:*** Utilized for creating the server and handling API requests.
 * ***BCrypt:*** Manages password hashing for secure storage and verification.
 * ***CORS:*** Configured to allow requests from the frontend domain.
 * ***Express-session:*** Manages user sessions for authentication and state management.

# Key Features

* **Employee Management**
    * ***Employee Registration:*** Facilitates registering new employees, including details like department, role, and project assignments. Checks for existing roles, departments, and project IDs to ensure data integrity.
    * ***Fetching Employee Info:*** Provides endpoints to fetch detailed information about employees, including department and role names, and associated projects.

* **Attendance and Leave Management**
    * ***Attendance Recording:*** Implements endpoints to record employee attendance entries and exits. Also, allows applying for leaves and managing leave requests with approval/rejection functionality.

* **Payment Management**
Records the payment details after confirming the correct payment ID in the backend.

# Database Connection
Establishes a connection to the MySQL database with configuration details (host, user, password, database).

# Running the Server
The server listens on a specified port (default is 3002) and logs a message when successfully running.


This backend setup ensures that all operations related to employee management, from authentication to project assignments and leave management, are handled efficiently. It lays the foundation for a scalable and secure application capable of supporting various HR functionalities.

For more detailed documentation on the API endpoints and their usage, refer to the in-code comments and Express.js routing setup within the server.js file.

* **Attendance, Holidays, Leave Requests, and Payments Tables**  
 Tables like daily_attendance, holidays, leave_requests, and employee_payments manage  
 daily attendance records, official holidays, leave requests by employees, and payment 
 records respectively.

This overview offers a glimpse into the structure and functionality of the database supporting the Employee Management System. Each table plays a critical role in managing different aspects of the system, from user accounts and employee details to projects, departments, and payroll.

For further customization and scaling of the system, understanding this schema is essential for developers looking to add new features or modify existing functionalities.



