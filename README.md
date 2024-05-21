# Genius: AI-Powered SaaS Platform

Welcome to Genius, an advanced AI-powered SaaS platform that revolutionizes user interaction by offering a suite of powerful tools. Genius allows users to chat with intelligent chatbots, generate high-quality images, create code snippets, and produce videos with ease.

## Table of Contents

- [Key Features](#key-features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Subscription Tiers](#subscription-tiers)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Key Features

### Chat with AI Chatbots
- **Interactive Conversations**: Engage with AI-powered chatbots to ask questions and receive intelligent responses.

### Generate High-Quality Images
- **Image Creation**: Utilize AI to generate stunning, high-resolution images for various purposes.

### Generate Code Snippets
- **Code Assistance**: Generate code snippets in multiple programming languages, helping developers accelerate their workflow.

### Generate Videos
- **Video Production**: Create and customize videos effortlessly using AI-driven tools.

## Subscription Tiers

### Free Tier
- **10 Free Generations**: Access to 10 free generations across any of the features (chat, images, code, video).

### Pro Tier
- **Unlimited Access**: Purchase a subscription to enjoy unlimited access to all features.
- **Subscription Management**: Managed via Stripe for secure and seamless transactions.

## Technologies Used

- **Next.js**: For server-side rendering and building the front-end.
- **MySQL DB**: For reliable and scalable data storage.
- **Stripe**: For handling subscriptions and payments.
- **OpenAI API**: For leveraging AI capabilities in chat, image, code, and video generation.
- **Tailwind CSS**: For efficient and responsive styling.

## Getting Started

Follow these instructions to set up and run Genius on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed:
- Node.js
- npm or yarn
- MySQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/genius.git
   cd genius
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_SECRET_KEY=your_stripe_secret_key
   MYSQL_HOST=your_mysql_host
   MYSQL_USER=your_mysql_user
   MYSQL_PASSWORD=your_mysql_password
   MYSQL_DATABASE=your_mysql_database
   OPENAI_API_KEY=your_openai_api_key
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

### Free Tier Users

- **10 Free Generations**: Access to the platform's features with 10 free generations.
- **Upgrade to Pro**: Option to upgrade to the Pro tier for unlimited access.

### Pro Tier Users

- **Unlimited Generations**: Full access to all features without any limitations.
- **Subscription Management**: Secure payment and subscription management through Stripe.

## Contributing

We welcome contributions to Genius! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add your feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries or feedback, please contact us at:
- **Email**: bipronilghosh@gmail.com
- **GitHub**: https://github.com/Bipronil/Genius

Join us and experience the future of AI-powered tools with Genius!

---
Feel free to reach out if you have any questions or need further assistance. Enjoy using Genius! #AI #WebDevelopment #NextJS #TailwindCSS #Stripe #OpenAI #MySQL
