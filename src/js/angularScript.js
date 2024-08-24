const app = angular.module("angularModule", ["ngRoute"]);
app.controller("controller", function ($scope) {
  $scope.navItems = [
    {
      label: "Home",
      to: "#!Main",
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
      alt: "LinkedIn"
      
    },
    {
      label: "Twitter",
      icon: "./src/assets/social-links/twitter-x-fill.svg",
      to: "",
      alt: "Twitter"
    },
    {
      label: "Github",
      icon: "./src/assets/social-links/github-fill.svg",
      to: "",
      alt: "Github"
    },
    {
      label: "Codepen",
      icon: "./src/assets/social-links/codepen-fill.svg",
      to: "",
      alt: "Codepen"
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