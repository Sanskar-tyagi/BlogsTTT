# Project README

This README provides instructions on setting up and understanding the project. The project utilizes Vite for performance optimization and follows the React standard best practice folder structure.

## Project Setup

Follow these steps to set up the project locally:

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd <repository-directory>
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

    The development server will be accessible at `http://localhost:5173/`.

## Project Structure

The project follows a standard React folder structure:

```
/src
  /assets
  /components
    Avatar.jsx
    BlogCard.jsx
    BlogSection.jsx
    Header.jsx
    Nav.jsx
    SidePost.jsx
    Tabs.jsx
   App.css
   App.jsx
   main.jsx
```

### Components

1. **Avatar.jsx**
   - Displays an avatar image.
   - Props:
     - `src`: URL of the avatar image.

2. **BlogCard.jsx**
   - Displays a blog card with information.
   - Props:
     - `data`: Object containing blog details.

3. **BlogSection.jsx**
   - Renders a section with multiple `BlogCard` components.
   - Utilizes `react-hot-toast` for displaying notifications.

4. **Header.jsx**
   - Displays the user's header information, including an avatar, user details, and statistics.
   - Utilizes icons from `react-icons` for various features.

5. **Nav.jsx**
   - Renders the project header with a logo and a "Courses" button.

6. **SidePost.jsx**
   - Displays a side section with images and a message.

7. **Tabs.jsx**
   - Renders tabs for switching sections.
   
## Libraries and Plugins Used

- **Vite**: Used for performance optimization.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **react-icons**: Provides a set of accessible icons.
- **react-hot-toast**: Lightweight notification library.
- **react-confetti-explosion**: Used for confetti animation on the like button.

## Running the Project

Once the project is set up locally, visit `http://localhost:5173/` in your web browser to view the React page.

Feel free to explore the hosted project at `https://blogstt.netlify.app/`. Happy coding!