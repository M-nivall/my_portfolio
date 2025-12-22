import { fastFood } from "../assets";
import { movieDiscovery } from "../assets";
import { laptopStore } from "../assets";
import { kuonaTrust } from "../assets";  
import { nairobiBeauty } from "../assets";
import { lotusFertility } from "../assets";


export const projects = [
  {
    id: "fast-food-app",
    title: "Fast Food Delivery App",
    shortDesc: "A modern fast-food eCommerce & delivery mobile application.",
    image: fastFood,
    github: "https://github.com/yourusername/fast-food-app",
    live: null,
    details: {
      overview:
        "A full-featured fast food eCommerce and delivery mobile app focused on smooth ordering, authentication, and cart management.",
      features: [
        "User authentication with Google Auth",
        "Browse food menu & categories",
        "Add to cart & manage orders",
        "Secure backend management with Appwrite",
        "Error monitoring with Sentry",
      ],
      techStack: [
        "React Native (Expo)",
        "TypeScript",
        "NativeWind",
        "Zustand (Cart State)",
        "Appwrite (Backend)",
        "Google Authentication",
        "Sentry",
        "Figma",
        "GitHub",
      ],
      type: "Mobile Application",
    },
  },

  {
    id: "movie-app",
    title: "Movie Discovery App",
    shortDesc:
      "A movie app that fetches latest movies and tracks trending searches.",
    image: movieDiscovery,
    github: "https://github.com/yourusername/movie-app",
    live: null,
    details: {
      overview:
        "A movie discovery application that fetches real-time movie data from TMDB and dynamically tracks trending searches.",
      features: [
        "Fetch latest movies from TMDB API",
        "Movie search functionality",
        "Search-based trending movies logic",
        "Google Authentication",
        "Backend management using Appwrite",
      ],
      techStack: [
        "React Native",
        "TypeScript",
        "NativeWind",
        "TMDB API",
        "Appwrite",
        "Google Authentication",
      ],
      type: "Mobile Application",
    },
  },

  // ✅ NEW PROJECT (Inserted after Movie App)
  {
    id: "kuona-trust-foundation",
    title: "Kuona Trust Foundation",
    shortDesc:
      "A mobile platform for artists to showcase artwork, apply for exhibitions, and connect with donors.",
    image: kuonaTrust,
    github: null,
    live: null,
    details: {
      overview:
        "A mobile application built to empower artists by enabling them to showcase their artwork, apply for exhibitions, and connect with external donors and supporters.",
      features: [
        "Artist artwork showcase",
        "Exhibition application system",
        "Artist–donor connection platform",
        "User authentication",
        "Backend API integration",
      ],
      techStack: [
        "Android Studio",
        "Java",
        "Volley (RequestQueue APIs)",
        "RecyclerView",
        "Adapters & Models",
        "XML Layouts",
        "PHP Backend",
        "MySQL Database",
        "Authentication",
      ],
      type: "Mobile Application",
    },
  },

  {
    id: "laptop-store",
    title: "Laptop Store E-commerce Website",
    shortDesc:
      "An eCommerce platform for laptops with payments and cart management.",
    image: laptopStore,
    github: "https://github.com/yourusername/laptop-store",
    live: "https://laptop-store-demo.vercel.app",
    details: {
      overview:
        "A full-stack laptop E-commerce website featuring product listings, cart management, and M-PESA payments.",
      features: [
        "Laptop listings with categories & pricing",
        "Redux-based cart management",
        "M-PESA Daraja payment integration",
        "Google authentication",
        "Firebase integration",
      ],
      techStack: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "Redux",
        "M-PESA Daraja API",
        "Firebase",
        "Google Authentication",
        "PHP Backend",
        "MySQL Database",
      ],
      type: "Web Application",
    },
  },

  {
  id: "nairobi-beauty-app",
  title: "Nairobi Beauty App",
  shortDesc:
    "A beauty eCommerce and e-learning mobile application for products, classes, and certifications.",
  image: nairobiBeauty, // add asset
  github: null,
  live: null,
  details: {
    overview:
      "A comprehensive Android application that combines a beauty products marketplace with a learning management system, enabling users to shop, enroll in beauty courses, track learning progress, and earn certifications.",
    features: [
      "Beauty product eCommerce marketplace",
      "Online booking of beauty classes",
      "Learning progress tracking",
      "Assignments, exams, and grading system",
      "Online attendance tracking",
      "Certification issuance after course completion",
      "Secure authentication and payment processing",
    ],
    techStack: [
      "Android Studio",
      "Java",
      "Retrofit (REST APIs)",
      "RecyclerView & Adapters",
      "Room Database",
      "Material Design Components",
      "XML Layouts",
      "Payment Gateway Integration",
      "PHP Backend",
      "MySQL Database",
      "Authentication & Authorization",
    ],
    type: "Mobile Application",
  },
},

{
  id: "lotus-fertility-app",
  title: "Lotus Fertility App",
  shortDesc:
    "A health-tech mobile platform supporting intended parents through the surrogacy journey.",
  image: lotusFertility, // add asset
  github: null,
  live: null,
  details: {
    overview:
      "A secure Android health-tech application that guides intended parents through the surrogacy process, including surrogate selection, medical screening, legal contracting, payments, and pregnancy progress tracking.",
    features: [
      "Surrogate mother browsing and selection",
      "Medical screening and doctor appointment booking",
      "Attorney selection and contract management",
      "Secure payment processing",
      "Pregnancy milestone and checkup tracking",
      "Role-based access for parents, doctors, and legal professionals",
      "Real-time notifications and updates",
    ],
    techStack: [
      "Android Studio",
      "Java",
      "MVVM Architecture",
      "Retrofit (REST APIs)",
      "RecyclerView",
      "Firebase Authentication",
      "Firebase Cloud Messaging",
      "XML Layouts",
      "PHP Backend",
      "MySQL Database",
      "Secure Payment Integration",
    ],
    type: "Mobile Application",
  },
},

];
