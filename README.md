<!--- Replace the following placeholders in angle brackets with your own information --->
<!--- Make sure to remove the angle brackets as well --->

# Chatter: Connect with Text-Based Content

![Website Preview](https://example.com/preview-image.png)

This repository contains a blog post website built with React, TypeScript, and Firebase. The website provides features such as user authentication, post creation, bookmarking, post analytics, and more.

## Features

- **Authentication:** Users can sign up using their email and password or log in using their Google account. Custom hooks like `useGoogle`, and `useSignup` have been implemented to handle the authentication process.

- **Content Creation:** Chatter offers a powerful rich text editor that empowers users to create and publish their own content seamlessly. Users can write blog posts or any other form of content and enhance it with images or videos. The content is authored and saved in Markdown format, and it gets displayed as HTML when viewed.
  
- **Content Discovery:** Chatter provides a personalized feed tailored to each user's interests and reading history, making it effortless for users to discover new captivating content. Users can also browse and search for other users' content, exploring various categories and tags that pique their interest.
  
- **Social Features:** Chatter fosters interaction and engagement among users through social features like commenting and liking. Users can share their thoughts, engage in discussions, and connect with fellow content enthusiasts.

- **Persistent User Data:** The Context API is used to persist user data throughout the website. This ensures that users can access their information across different pages.

- **Home Page:** The home page serves as the main landing page for users. It displays a curated list of posts based on user interests.

- **Posts Page:** Users can explore all posts on the dedicated posts page. This allows them to discover a wide range of articles and blog posts from various authors.

- **Bookmark Page:** Users have the ability to bookmark posts they find interesting. The bookmark page provides a convenient way to access and revisit these saved posts.

- **Post Details Page:** Clicking on a post takes the user to the post details page, where they can read the full article and engage in comments and discussions.

- **Analytics Page:** Users can access the analytics page to gain insights into their posts. This feature provides valuable data on post views, likes, shares, and user engagement.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/im-hassan-wd/chatter.git
   ```
   
2. Navigate to the project directory:

   ```bash
   cd chatter
   ```
   
3. Install the dependencies:

   ```bash
   npm install
   ```
   
4. Set up Firebase:

 - Create a Firebase project and enable the necessary authentication providers.
 - Update the Firebase configuration in the project's `firebase/config` file.

   
5. Start the development server:

   ```bash
   npm start
   ```
   
5. Open the application in your browser:

   ``` bash
   http://localhost:3000
   ```
