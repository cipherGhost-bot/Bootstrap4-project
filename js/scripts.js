$(document).ready(function() {
        $("#carouselButton").click(function(){
                if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                    $("#mycarousel").carousel('pause');
                    $("#carouselButton").children("span").removeClass('fa-pause');
                    $("#carouselButton").children("span").addClass('fa-play');
                }
                else if ($("#carouselButton").children("span").hasClass('fa-play')){
                    $("#mycarousel").carousel('cycle');
                    $("#carouselButton").children("span").removeClass('fa-play');
                    $("#carouselButton").children("span").addClass('fa-pause');                    
                }
            });
        $("#showbtn").click(function(){
          $("#loginModal").modal('toggle')
        });

        $("#cancelbtn,#closebtn").click(function(){
          $("#loginModal").modal('hide')
        });

         $("#sbtn").click(function(){
          $("#reserveTable").modal('toggle')
        });

        $("#cabtn,#clbtn").click(function(){
          $("#reserveTable").modal('hide')
        });

       });  