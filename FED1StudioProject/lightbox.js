//jQuery lightbox
//When the user clicks a thumbnail image, display the lightbox container and insert an image tag into it. 

    $(".thumb").on("click", function () {
        let imgSrc = $(this).attr("src"); //on this object, find the  HTML attribute of src. So when user clicks on something with a class of thumb 

        //Plus the img into #lightbox-content, using imgSrc as the src
        //<img src="Images/studiokitchen.jpg" id="imgkitchen" alt="cooking on stove in kitchen" height="310" width="630" class="img-responsive thumb" />
        $("#lightbox-content").html('<img src="' + imgSrc + '"id=imgkitchen" alt="cooking on stove in kitchen" height="310" width="310" class="img-responsive" />');

        //Make the lightbox visible by fading it in
        $("#lightbox-container").fadeIn(500); //remember this is in milliseconds so 500 = half a second

        //Close the container when the user clicks anywhere within it:
        $("#lightbox-container").on("click", function () {
            $(this).fadeOut(500);
    });
    });