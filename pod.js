var emailAddress = document.getElementById('email').value;
var reqAccess = document.getElementById('access');

reqAccess.addEventListener("click", function() {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
        if (!filter.test(email.value)) {
        alert('Please provide a valid email address');
        return false;
     } else {
         alert('Valid email');
     }
    }
    );