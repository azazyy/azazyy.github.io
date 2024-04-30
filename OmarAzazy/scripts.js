        function openNav() {
      document.getElementById("sidenav").style.width = "250px";
  }
    
  function closeNav() {
      document.getElementById("sidenav").style.width = "0";
  }
   
        function showKeyboardDetails(name, image, description, price) {
            // Encode the details to pass them through the URL
            const encodedName = encodeURIComponent(name);
            const encodedImage = encodeURIComponent(image);
            const encodedDescription = encodeURIComponent(description);
            const encodedPrice = encodeURIComponent(price);

            // Redirect to the product page with details in the URL
            window.location.href = `keyboard_details.html?name=${encodedName}&image=${encodedImage}&description=${encodedDescription}&price=${encodedPrice}`;
        }

        function openNav() {
      document.getElementById("sidenav").style.width = "250px";
  }
    
  function closeNav() {
      document.getElementById("sidenav").style.width = "0";
  }
    
        window.onload = function() {
            // Extract query parameters from the URL
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);

            // Get keyboard details from the query parameters
            const name = urlParams.get('name');
            const image = urlParams.get('image');
            const description = urlParams.get('description');
            const price = urlParams.get('price');

            // Update the keyboard details on the page
            document.getElementById('keyboard-name').innerText = decodeURIComponent(name);
            document.getElementById('keyboard-image').src = decodeURIComponent(image);
            document.getElementById('keyboard-description').innerText = decodeURIComponent(description);
            document.getElementById('keyboard-price').innerText = 'Price: ' + decodeURIComponent(price);
        }

        function addToCart() {
            alert('Product added to cart!');
        }
  
function toggleDetails() {
    var detailsContainer = document.getElementById('additional-details');
    var button = document.getElementById('show-details-button');

    if (detailsContainer.style.display === 'none') {
        // Show the additional details
        detailsContainer.style.display = 'block';
        button.innerText = 'Hide Details'; // Change button text
    } else {
        // Hide the additional details
        detailsContainer.style.display = 'none';
        button.innerText = 'Show More Details'; // Change button text
    }
}