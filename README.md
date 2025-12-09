# Task Manager App

A simple and efficient web-based task management application to help you organize your daily activities. This application allows users to add, edit, delete, and mark tasks as completed, with all data persisting locally.

## Features

-   **Dashboard View**: Separate views for "Pending Tasks" and "Completed Tasks".
-   **Add Tasks**: Easily add new tasks with a title and detailed description.
-   **Edit Tasks**: Modify existing tasks if details change.
-   **Task Completion**: Mark tasks as completed to move them to the "Completed" section.
-   **Delete Tasks**: Remove tasks that are no longer needed.
-   **Local Storage**: All tasks are saved in your browser's local storage, ensuring your data is not lost on page refresh.
-   **Responsive Design**: Works on various screen sizes.

## Technology Stack

-   **HTML5**: Structure of the application.
-   **CSS3**: Styling and responsive layout (Custom styles & Flexbox).
-   **JavaScript**: Logic for task management and DOM manipulation.

## Project Structure

```
PLACEMENT PROJECT/
├── assets/             # Images and background assets
├── css/
│   ├── style.css       # Main stylesheet
│   └── responsive.css  # Responsive styles
├── js/
│   ├── dashboard.js    # Task management logic
│   └── script.js       # Auth/General logic
├── pages/
│   ├── dashboard.html  # Main application dashboard
│   └── login.html      # Login page
└── index.html          # Signup/Landing page
```

## How to Run

1.  Clone this repository or download the source code.
2.  Open the project folder.
3.  Double-click on `index.html` to open the application in your web browser.
4.  Create an account (simulation) or navigate to the login page.
5.  Once logged in (or redirected), you will see the Dashboard where you can manage your tasks.

## Usage

1.  **Add a Task**: Click the "Add Task" button, fill in the title and description, and click "Add Task".
2.  **Edit**: Click the "Edit" button on a pending task to update its details.
3.  **Complete**: Click "Mark as Completed" to move a task to the completed list.
4.  **Delete**: Click "Delete" to permanently remove a task.
