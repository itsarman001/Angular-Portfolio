const app = angular.module("angularModule", ["ngRoute"]);
app.controller("controller", function ($scope) {
  $scope.navItems = [
    {
      label: "Home",
      to: "#",
    },
    {
      label: "Service",
      to: "#!Service",
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
        {
          src: "./src/assets/projects/notion/Notion.jpg",
          alt: "Notion Hero Section",
        },
        {
          src: "./src/assets/projects/notion/NotionSignup.jpg",
          alt: "Notion Signup Page",
        },

        {
          src: "./src/assets/projects/notion/NotionTemplate.jpg",
          alt: "Template Section",
        },
      ],
    },
    
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
