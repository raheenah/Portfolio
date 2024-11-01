// document.addEventListener("DOMContentLoaded", () => {
//   const h2 = document.querySelector(".slide-in-left");
//   const fadeInUpElements = document.querySelectorAll(".fade-in-up");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           // Element is in view - apply slide-in animation
//           if (entry.target.classList.contains("slide-in-left")) {
//             entry.target.style.transform = "translateX(0)";
//             entry.target.style.opacity = "1";
//           } else {
//             entry.target.style.transform = "translateY(0)";
//             entry.target.style.opacity = "1";
//           }
//         } else {
//           // Element is out of view - reverse animation
//           if (entry.target.classList.contains("slide-in-left")) {
//             entry.target.style.transform = "translateX(100%)";
//             entry.target.style.opacity = "0";
//           } else {
//             entry.target.style.transform = "translateY(50px)";
//             entry.target.style.opacity = "0";
//           }
//         }
//       });
//     },
//     {
//       threshold: 0.5, // Adjust this threshold as needed
//     }
//   );

//   observer.observe(h2);
//   fadeInUpElements.forEach((element) => observer.observe(element));
// });
