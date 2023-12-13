
<div id="thankYouMessage">
<p>Thank you <span id="thankYouName"></span> for visiting our Restaurant!</p>
<p>Email: <span id="thankYouEmail"></span></p>
<p>Phone: <span id="thankYouPhone"></span></p>
<p>Menu item selected <span id="thankYouforMenu"></span></p>
<p>Additional Notes: <span id="thankYouMessageText"></span></p>
</div>   
<script>
    document.getElementById("Thank you").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents the form from actually submitting (for demonstration purposes)
         // Retrieve form values
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var Menu = document.getElementById("Menu").value;
        var message = document.getElementById("message").value;

          // Display thank you message with patient details
          document.getElementById("thankYouName").innerText = name;
            document.getElementById("thankYouEmail").innerText = email;
            document.getElementById("thankYouPhone").innerText = phone;
            document.getElementById("thankYouforMenu").innerText = Menu;
           document.getElementById("thankYouMessageText").innerText = message;document.getElementById("thankYouMessage").style.display = "block";
        });
</script>
