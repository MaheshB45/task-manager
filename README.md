# Task Manager Application

## Live Site -

## Overview

This Task Manager is a simple, feature-rich application built with React and Tailwind CSS. It helps users manage their tasks efficiently with basic and advanced functionalities such as task input, deletion, sorting, searching, and setting task priority. It also includes UI animations to enhance user experience.

### Key Features

- **Task Input**: Add tasks with a title.
- **Task Deletion**: Remove tasks from the list.
- **Task Persistence**: Persist tasks in local storage to maintain data on page refresh.
- **Task Search**: Search tasks based on title.
- **Task Completion**: Mark tasks as completed or incomplete.
- **Priority Setting**: Assign priority levels (e.g., High, Medium, Low) to tasks.
- **Task Sorting**: Sort tasks by title, priority, or completion status.
- **UI Animations**: Smooth animations on task addition, deletion, and completion.

---

## Setup and Launch Process

### Prerequisites

- **Node.js** (version 14+)
- **npm** (version 6+)

### Installation

**Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/task-manager-app.git
   cd task-manager-app
   ```
---

## Assumptions Made During Development

- **Priority Levels**: The priority levels are assumed to be three types: High, Medium, and Low. This is implemented as a string value for simplicity in sorting and display.
- **Animations**: Basic animations are implemented using React Transition Group and custom CSS for entry and exit of tasks. Tailwind CSS classes are used for hover and transformation effects.
- **Task Structure**: Each task object includes the properties id, title, completed, and priority. These properties are expected when handling sorting, searching, and filtering functionalities.
- **Local Storage**: The tasks are persisted in local storage. It’s assumed that local storage is available and enabled in the user’s browser.
  
---

## Screenshots

![task-manager](https://github.com/user-attachments/assets/d73223de-cb5c-4374-bb31-88982209dd50)

---

## Technologies Used

- **React for the frontend.**
- **Tailwind CSS for styling.**
- **React Transition Group for animations.**
- **Local Storage for persisting task data.**








