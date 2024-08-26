const app = angular.module("angularModule", ["ngRoute"]);
app.controller("controller", function ($scope) {
  $scope.navItems = [
    {
      label: "Home",
      to: "#",
    },
    {
      label: "Projects",
      to: "#!Projects",
    },
    {
      label: "About Us",
      to: "#!AboutUs",
    },
  ];

  $scope.socialLinks = [
    {
      label: "LinkedIn",
      icon: "./src/assets/social-links/linkedin-box-fill.svg",
      to: "",
      alt: "LinkedIn",
    },
    {
      label: "Twitter",
      icon: "./src/assets/social-links/twitter-x-fill.svg",
      to: "",
      alt: "Twitter",
    },
    {
      label: "Github",
      icon: "./src/assets/social-links/github-fill.svg",
      to: "",
      alt: "Github",
    },
    {
      label: "Codepen",
      icon: "./src/assets/social-links/codepen-fill.svg",
      to: "",
      alt: "Codepen",
    },
  ];

  $scope.techStacks = [
    {
      label: "Html",
      icon: "./src/assets/tech-stack/html5-fill.svg",
      alt: "Html",
    },
    {
      label: "Css",
      icon: "./src/assets/tech-stack/css3-fill.svg",
      alt: "Css",
    },
    {
      label: "Javascript",
      icon: "./src/assets/tech-stack/javascript-fill.svg",
      alt: "Javascript",
    },
    {
      label: "Tailwind Css",
      icon: "./src/assets/tech-stack/tailwind-css-fill.svg",
      alt: "Tailwind Css",
    },
    {
      label: "Bootstrap",
      icon: "./src/assets/tech-stack/bootstrap-fill.svg",
      alt: "Bootstrap",
    },
    {
      label: "Jquery",
      icon: "./src/assets/tech-stack/jquery-fill.svg",
      alt: "Jquery",
    },
    {
      label: "React",
      icon: "./src/assets/tech-stack/reactjs-fill.svg",
      alt: "React",
    },
    {
      label: "Angular",
      icon: "./src/assets/tech-stack/angularjs-fill.svg",
      alt: "Angular",
    },
    {
      label: "Sql",
      icon: "./src/assets/tech-stack/sql-fill.svg",
      alt: "Sql",
    },
    {
      label: "Php",
      icon: "./src/assets/tech-stack/php-fill.svg",
      alt: "Php",
    },
  ];

  $scope.projects = [
    {
      label: "Notion Clone",
      categories: ["Web App", "Productivity", "Note Taking"],
      link: "#",
      previews: [
        { src: "./src/assets/projects/notion/Notion.jpg", alt: "Notion Hero Section" },
        { src: "./src/assets/projects/notion/NotionSignup.jpg", alt: "Notion Signup Page" },
        { src: "./src/assets/projects/notion/NotionTemplate.jpg", alt: "Template Section" }
      ]
    },
    {
      label: "E-commerce App",
      categories: ["Web App", "E-commerce", "Shopping"],
      link: "#",
      previews: [
        { src: "./src/assets/projects/ecommerce/EcommerceHomepage.jpg", alt: "E-commerce Homepage" },
        { src: "./src/assets/projects/ecommerce/ProductPage.jpg", alt: "Product Page" },
        { src: "./src/assets/projects/ecommerce/CartPage.jpg", alt: "Cart Page" },
        { src: "./src/assets/projects/ecommerce/CheckoutPage.jpg", alt: "Checkout Page" }
      ]
    },
    {
      label: "Social Media Platform",
      categories: ["Web App", "Social Media", "Networking"],
      link: "#",
      previews: [
        { src: "./src/assets/projects/socialmedia/FeedPage.jpg", alt: "Feed Page" },
        { src: "./src/assets/projects/socialmedia/ProfilePage.jpg", alt: "Profile Page" },
        { src: "./src/assets/projects/socialmedia/CreatePost.jpg", alt: "Create Post" },
        { src: "./src/assets/projects/socialmedia/Messages.jpg", alt: "Messages" }
      ]
    },
    {
      label: "Music Streaming App",
      categories: ["Web App", "Music", "Entertainment"],
      link: "#",
      previews: [
        { src: "./src/assets/projects/musicstreaming/HomePage.jpg", alt: "Home Page" },
        { src: "./src/assets/projects/musicstreaming/SearchPage.jpg", alt: "Search Page" },
        { src: "./src/assets/projects/musicstreaming/PlaylistPage.jpg", alt: "Playlist Page" },
        { src: "./src/assets/projects/musicstreaming/PlayerPage.jpg", alt: "Player Page" }
      ]
    },
    {
      label: "Video Conferencing App",
      categories: ["Web App", "Communication", "Meetings"],
      link: "#",
      previews: [
        { src: "./src/assets/projects/videoconferencing/MeetingRoom.jpg", alt: "Meeting Room" },
        { src: "./src/assets/projects/videoconferencing/Participants.jpg", alt: "Participants" },
        { src: "./src/assets/projects/videoconferencing/ShareScreen.jpg", alt: "Share Screen" },
        { src: "./src/assets/projects/videoconferencing/Chat.jpg", alt: "Chat" }
      ]
    }
  ];
});

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "./src/view/Main.html",
    })
    .when("/Service", {
      templateUrl: "./src/view/Service.html",
    })
    .when("/Projects", {
      templateUrl: "./src/view/Projects.html",
    })
    .when("/AboutUs", {
      templateUrl: "./src/view/AboutUs.html",
    })
    .otherwise("./src/view/Main.html");
});
