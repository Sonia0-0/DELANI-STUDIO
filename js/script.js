$(document).ready(
    // Show/Hide image and content in what-we-do section
    $("#item1").click(function() {
      $("#item1 img").toggle();
      $("#item1 div").toggle();
    }),
    $("#item2").click(function() {
      $("#item2 img").toggle();
      $("#item2 div").toggle();
    }),
    $("#item3").click(function() {
      $("#item3 img").toggle();
      $("#item3 div").toggle();
    }),
  
    // Hover effect on portfolio section
    $("#portfolio img").hover(
      function() {
        $(this).fadeTo(300, 0.6);
      },
      function() {
        $(this).fadeTo(300, 1);
      }
    )
  );
  
  function submitFormData() {
    var name = $("input[type=text]").val();
    var email = $("input[type=email]").val();
    var message = $("textarea").val();
  
    if (!email || !name) {
      alert("Kindly fill the form below");
    } else {
      alert("Hello " + name + ". \nWe have received your message. Thank you for reaching out to us.");
    }
  }
  