$(document).ready(function(){

    $(".hover, .icon").hover(function(){
      $(this).css("color", "#FFFFFF");
      }, function(){
      $(this).css("color", "#8D91A3");
    });


    /// STARS

      $(".star-1").click(function() {
          $(".all-star").css("fill", "#8D91A3")
          $(".star-1").css("fill", "#FFDD3F");

      });
      $(".star-2").click(function() {
          $(".all-star").css("fill", "#8D91A3");
          $(".star-1, .star-2").css("fill", "#FFDD3F");

      });
      $(".star-3").click(function() {
          $(".all-star").css("fill", "#8D91A3")
          $(".star-1, .star-2, .star-3").css("fill", "#FFDD3F");

      });
      $(".star-4").click(function() {
          $(".all-star").css("fill", "#8D91A3");
          $(".star-1, .star-2, .star-3, .star-4").css("fill", "#FFDD3F");

      });
      $(".star-5").click(function() {
          $(".all-star").css("fill", "#8D91A3");
          $(".star-1, .star-2, .star-3, .star-4, .star-5").css("fill", "#FFDD3F");

      });








    });

    







    

      

  








    



