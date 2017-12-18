import { Project } from './project';

export const PROJECTS: Project[] = [
  {    title: "Groundswell",
       img_src:"assets/images/groundswell.png",
       details: "This is a case management system for lawyers. A lawyer's technology is typically extremely old. This project seeks to resolve this issue. Groundswell allows for a lawyer to define tasks, track time, email notifications, and even auto generate documents. My specific task was implementing the Microsoft Graph API so that lawyers can upload/manage documents through the Groundswell portal. This project was built with Ruby on Rails, jQuery, and Ember.js.",
       link: "https://app.groundswell.online/users/sign_in"
  }, { title: "Blakada",
       img_src:"assets/images/blakada.png",
       details: "This was a website for a client that had reached out to me. It is a simple site that allows my client to upload photos and display them on the website. The project was built from the ground up. It was built with Ruby on Rails and jQuery.",
       link: "http://www.blakada.me/"
  }, { title: "Lense A Film",
       img_src:"assets/images/facebook_image.jpg",
       details: "This was another project for a client that had reached out to me. It is yet another site that allows the client to upload photos and display them on the website. The project was built from the ground up. It was built with Ruby on Rails and jQuery.",
       link: "http://lenseafilm.com/"
  }, { title: "Tuteering",
       img_src:"assets/images/tuteering.png",
       details: "This was a project built at HackNC2017. It is a tutoring voluteer application. A volunteer signs up to be a tutor and signs up for availibility. A parent signs their child up (who needs tutoring) and finds a volunteet who fits the their needs. All comunication is done from the volunteer to the parent, through the app's in house messaging system. Web design was done by my good buddies Henry Lin, John Hodson, and Paul Chang-Fatt.",
       link: "https://devpost.com/software/tuteering-a46nwr"
  }, { title: "EmployeeNinja",
       img_src:"assets/images/employee.jpg",
       details: "This was a project built by a former employer of mine, FreshStart Software, to help schedule employees for fast food chains. I was responsible for a number of things including writing tests, writing new features, and refactoring old code. This app was never pushed to a live website.",
       link: ""
  }, { title: "TargetZero",
       img_src:"assets/images/targetzero.png",
       details: "This application a consultancy project that I worked on with a former employer, FreshStart Software. TargetZero is a nonprofit organization seeking to reduce the euthanization rate of shelter pets to 0%. My task on the project was implementing the Google Maps API so that employees could see a list of cities with the rate of the euthanization rate. I also wrote tests and helped implement a content management system.",
       link: "http://www.target-zero.org/"
  }, { title: "DESC", 
       img_src:"assets/images/desc.jpg", 
       details: "In high school, I wrote software for this nonprofit organization as volunteer work. They had a Ruby on Rails application in place but it needed a lot of work to get it working properly. My task included writing rspec tests to ensure working code as well as implenting features. Some of these features included calculating when a given holiday would occur (ie Labor Day or Thanksgiving) to notify employees as well as implementing modals for forms so employees did not have to refresh to page to view forms.",
       link: "https://descjax.org/"
  }
];
