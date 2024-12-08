# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules. The app also includes form handling and validation using **Formik** and **Yup** for building login and signup forms. Additionally, the "Remember Me" functionality is implemented to persist the user's email in the `localStorage`.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## How to Run the Project

Follow these steps to set up and run the project:

### 1. Clone the repository (if applicable)

If you have not already cloned the repository, run the following command:

git clone <repository-url>
2. Navigate to the project directory
cd formik-auth-app
3. Install dependencies
Run the following command to install the required dependencies:

npm install
This will install Formik, Yup, React Router, and other dependencies needed for the application.

4. Start the development server
After installing the dependencies, start the development server with:

npm start
This will start the application on http://localhost:3000 by default.

5. Access the app
Login Page: http://localhost:3000/login
Signup Page: http://localhost:3000/signup

### The Design Choices Made
1. Formik for Form Handling
Formik is used to manage form state, handle form submission, and integrate validation. It provides an easy-to-use API for building controlled forms.

2. Yup for Validation
Yup is used to define validation rules for the login and signup forms.

3. React Router for Routing
React Router is used to handle routing between the login and signup pages. It allows navigation between these pages without reloading the entire application.

4. "Remember Me" Checkbox
The "Remember Me" checkbox in the login form is used to simulate persistent login by saving the user's email in the localStorage.

5. Component-Based Architecture
The app is designed with reusable components: Login and Signup components for the respective forms.

### Assumptions and Limitations

1. Assumptions
Basic Authentication: This app does not include real authentication (e.g., backend integration, API calls). It only simulates the login and signup process with alert messages for success.
No User Persistence: Since this is a front-end simulation, no actual user data is saved on a server or database.
Remember Me Functionality: The "Remember Me" feature persists only the email in the browser’s localStorage.
2. Limitations
No Actual Authentication: The app only simulates successful login/signup. For real-world applications, you would need to integrate with an authentication service (like Firebase, Auth0, or a custom backend with JWT).
LocalStorage Limitation: The "Remember Me" feature saves the email only on the client side (in localStorage). This data is not encrypted or secure.
No Error Handling for Invalid Credentials: This project does not handle invalid login attempts. In a real-world scenario, you would typically check credentials against a backend service and show appropriate error messages.
No Form Reset on Success: Upon successful submission (login or signup), the form does not automatically reset. In a production app, you would likely clear the form fields after a successful operation.
No Styling for Error Messages: While error messages are displayed, the application doesn’t have any custom styling for validation errors.
How to Run the Project (Additional Details)
What steps are required to run the project?

You need to clone the repository using git clone <repository-url>.
Then, run npm install to install the dependencies.
Afterward, use npm start to run the project on http://localhost:3000.
What design choices were made in this project?

Formik was chosen to handle form state and validation in a simple and structured way.
Yup was used for schema-based validation to ensure proper form data and user input.
React Router is used to handle routing for a multi-page application (Login and Signup).
The "Remember Me" functionality stores the user's email in the browser's localStorage.
What assumptions or limitations does this project have?

This app simulates login and signup processes and does not include real authentication. For real-world applications, backend integration with actual user data and security should be added.
The "Remember Me" feature only saves data locally in the browser and is not encrypted.
There is no error handling for invalid login attempts.
There is no actual form reset after a successful login/signup.
Conclusion
This project demonstrates how to build a simple login and signup form with Formik, Yup, and React Router in a React app using TypeScript. The app includes basic form validation, the "Remember Me" feature, and navigation between login and signup pages.

For a production app, you should integrate backend authentication, improve user experience (e.g., form reset on success), and secure sensitive data like passwords.

This is the updated README file with the explanations to help users understand how to run the project, the design choices made, and the assumptions/limitations of the project. You can copy and replace your current `README.md` content with this.





