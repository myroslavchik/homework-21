document.addEventListener('DOMContentLoaded', () =>  {

  $(document).ready(function(){
    $(".hover, .icon").hover(function(){
      $(this).css("color", "#FFFFFF");
      }, function(){
      $(this).css("color", "#8D91A3");
    });

    $(".my-rating").starRating({
      starShape: 'rounded',
      totalStars: 5,
      initialRating: 4,
      strokeColor: '#FFDD3F',
      activeColor: '#FFDD3F',
      hoverColor: '#FFDD3F',
      ratedColor: '#FFDD3F',
      strokeWidth: 10,
      starSize: 20,
      disableAfterRate: true,
    });

    $('#circle').circleProgress({
      value: 0.85,
      size: 75,
      startAngle: 300,
      thickness: 4,
      emptyFill: "#B7BACD",
      fill: {
        gradient: ["#00D4BE", "#1AE780"]
      }
    });


  });



})