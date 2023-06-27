// write your code here
// const ramenMenu = document.getElementById("ramen-menu");

// // fetching the Ramen menu from the server
// fetch(`http://localhost:3000/ramens`)
//   .then((response) => response.json())
//   .then((ramens) => {
//     console.log(ramens);
//     ramens.forEach((ramen) => {
//       console.log(ramen);
//       //creating the image element
//       const img = document.createElement("img");
//       // Set the src attribute of the img element to the image URL of the ramen
//       img.src = ramen.image;
//       ramenMenu.appendChild(img);
//     });
//   });

const ramenMenu = document.getElementById("ramen-menu");
const ramenDetail = document.getElementById("ramen-detail");

// Fetching the Ramen menu from the server
fetch(`http://localhost:3000/ramens`)
  .then((response) => response.json())
  .then((ramens) => {
    ramens.forEach((ramen) => {
      // Creating the image element
      const img = document.createElement("img");
      img.src = ramen.image;
      img.dataset.id = ramen.id; // Add data-id attribute to the image
      ramenMenu.appendChild(img);

      // Adding click listener to the image
      img.addEventListener('click', () => {
        fetchRamenDetails(ramen.id);
      });
    });
  });

function fetchRamenDetails(id) {
  fetch(`http://localhost:3000/ramens/${id}`)
    .then((res) => res.json())
    .then((ramen) => {
      // Update ramen-detail div
      ramenDetail.querySelector('.detail-image').src = ramen.image;
      ramenDetail.querySelector('.name').innerText = ramen.name;
      ramenDetail.querySelector('.restaurant').innerText = ramen.restaurant;
      
      // Update comment and rating
      document.getElementById('comment-display').innerText = ramen.comment;
      document.getElementById('rating-display').innerText = ramen.rating;
    })
    .catch((error) => console.error('Error:', error));
}


 const newRamenForm = document.getElementById("new-ramen");

    // Add an event listener for the form submission
    newRamenForm.addEventListener("submit", (event) => {
        // Prevent the default form submission action
        event.preventDefault();
        
        // Get the form values
        const newName = document.getElementById("new-name").value;
        const newRestaurant = document.getElementById("new-restaurant").value;
        const newImage = document.getElementById("new-image").value;
        const newRating = document.getElementById("new-rating").value;
        const newComment = document.getElementById("new-comment").value;

        // Create a new img element
        const newRamenImage = document.createElement("img");
        newRamenImage.src = newImage;

        // You can set additional data attributes if needed
        newRamenImage.dataset.name = newName;
        newRamenImage.dataset.restaurant = newRestaurant;
        newRamenImage.dataset.rating = newRating;
        newRamenImage.dataset.comment = newComment;
        newRamenImage.dataset.id = newId

        // Append the new image to the ramen menu
        ramenMenu.appendChild(newRamenImage);

        // Optional: Clear the form fields after submission
        newRamenForm.reset();
    });

    