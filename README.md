# Book Haven Marketplace

[//]: # ([Project Link/Live Demo] &#40;If applicable&#41;)

## Overview

Book Haven Marketplace is a web application designed to provide users with 
a delightful experience in discovering, searching, and purchasing books. 
Built on the MERN (MongoDB, Express.js, React, Node.js) stack, 
the project offers robust features for book enthusiasts, including 
book lists and administrative tools.

## Key Features

*   **User Authentication:**
    *   Securely create an account and log in to access personalized features.
    *   Option to sign in with an existing Google account for convenience.

*   **Book Catalog:**
    *   Explore a vast collection of books fetched from an external source.
    *   Easily find the perfect book with advanced search and filtering options (by author, genre, title).
    *   View detailed information about each book, including author, genre, page count, publication year, and price.
    *   Benefit from a forgiving search algorithm that handles typos and minor spelling variations.

*   **Shopping Cart:**
    *   Add books to your cart as you browse.
    *   Easily remove unwanted items.
    *   See the total cost of your items update automatically.
    *   Go through a simplified checkout process (payment simulation for this project).

*   **Personalized Book Lists (User Haven):**
    *   Create up to 20 custom book lists to organize your reading interests.
    *   Give your lists meaningful names and descriptions.
    *   Decide whether to keep lists private or share them with the community.
    *   Easily edit or delete lists as your preferences change.

*   **Public Book Lists:**
    *   Discover curated book lists created by other users.
    *   View list details and the books included.
    *   Leave reviews on public lists to share your thoughts and recommendations.

*   **Marketplace Management (Administrator Features):**
    *   Assign a special user as the administrator to oversee the marketplace.
    *   Grant additional site manager privileges to trusted users.
    *   Moderate booklist reviews by hiding inappropriate or irrelevant content.
    *   Activate or deactivate user accounts as needed to maintain a positive community.

*   **RESTful API:**
    *   A custom-built API enables seamless communication between the front-end (user interface) and the back-end (server logic).
    *   Strong security measures are implemented using JSON Web Tokens (JWT) to protect user data and sensitive operations.
    *   Different parts of the API are clearly organized for public access, authenticated user actions, and administrator tasks.

## Project Structure

```
book-haven-marketplace/
├── client/        # React frontend
├── server/         # Node.js/Express backend
└── README.md
```

## Technology Stack

*   **Frontend:** React
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB
*   **Authentication:** JSON Web Tokens (JWT)
*   **External API:** Google Books API (or your choice)
*   **Other Libraries:** (List any additional libraries you used)

## Getting Started

1.  **Prerequisites:** Node.js and MongoDB installed.
2.  **Clone:** `git clone [your repository url]`
3.  **Install Dependencies:** Navigate to the `client` and `server` directories and run `npm install` in each.
4.  **Environment Variables:** Create `.env` files in both directories to store configuration settings (API keys, database URI).
5.  **Run:** In each directory, run `npm start` to launch the client and server.

## Contributing

We welcome contributions! Please follow our [contribution guidelines](CONTRIBUTING.md).

## Team Members

*   Reuben Coutinho
*   Rhea Sera Rodrigues

## Acknowledgments

*   A special thanks to the instructor of ECE 9065 for guidance and support.
*   Credit to many tutorials or resources on YouTube that helped with specific aspects of the project.
```

