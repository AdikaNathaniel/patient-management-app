# Patient Management App

The **Patient Management System** is a comprehensive healthcare platform designed to streamline patient registration, appointment scheduling, and management of medical records. This project utilizes a modern tech stack to provide an intuitive and efficient user experience while ensuring scalability and maintainability.

## Key Features

- **Patient Registration**: Secure and user-friendly registration process for patients.
- **Appointment Scheduling**: Easy appointment booking and management for both patients and healthcare providers.
- **Medical Records Management**: Centralized and secure storage of patient medical records.
- **SMS Notifications**: Timely reminders  of booked appointments and updates sent to patients via SMS.

## Tech Stack

### **Frontend: Next.js**
- **Purpose**: Handles the client-side and server-side rendering of the application.
- **Features**: Utilized for its hybrid rendering capabilities, routing, and performance optimizations.
- **Why Next.js**: Provides seamless integration for building a responsive and high-performance web application.

### **Backend: Appwrite**
- **Purpose**: Manages authentication, database interactions, and server-side logic.
- **Features**: Provides secure APIs for user management, database operations, and file storage.
- **Why Appwrite**: Chosen for its developer-friendly interface and support for real-time updates.

### **TypeScript**
- **Purpose**: Adds static typing to JavaScript, enhancing code quality and developer productivity.
- **Features**: Ensures type safety and helps catch errors during development.
- **Why TypeScript**: Makes the codebase more maintainable and scalable.

### **Tailwind CSS**
- **Purpose**: Handles the styling of the application.
- **Features**: Provides a utility-first CSS framework for rapid UI development.
- **Why Tailwind CSS**: Speeds up the design process and allows for consistent and customizable styling.

### **Twilio**
- **Purpose**: Sends SMS notifications to patients for reminders and updates.
- **Features**: Integrated to provide real-time communication with patients.
- **Why Twilio**: Offers reliable and scalable SMS services with robust API documentation.


## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/AdikaNathaniel/patient-management-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   - Set up Appwrite credentials (API key, endpoint, project ID).
   - Add Twilio credentials (account SID, auth token, and phone number).

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Access the application at `http://localhost:3000`.

## Future Enhancements

- **Sentry Integration**: For application monitoring and error tracking.
- **Mobile App**: Develop a mobile version of the platform.
- **Medical Records Storage**: Store the past medical records of patients to enhance diagnosis of patients.
- 
## Conclusion
This Patient Management System leverages modern web technologies to simplify and improve healthcare management processes. With future enhancements like Sentry integration, the platform aims to provide a secure, reliable, and seamless experience for all users.

🎉 **Curious to see the app in action?** 
🎥 Click https://patient-management-7cpxif67s-adikanathaniels-projects.vercel.app to have a  live demo and remember to book your next medical appointment on this CarePulse Patient Management System!
