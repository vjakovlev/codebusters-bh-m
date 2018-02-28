$(document).ready(function() {



    // $("#two").on("click", function () {
    //     alert("two");
    // })

    // $("#three").on("click", function () {
    //     alert("three");
    // })

    // $("#four").on("click", function () {
    //     alert("four");
    // })

    // $("#five").on("click", function () {
    //     alert("five");
    // })

    // $("#six").on("click", function () {
    //     alert("six");
    // })

    // $("#seven").on("click", function () {
    //     alert("seven");
    // })

    // $("#eight").on("click", function () {
    //     alert("eight");
    // })

    // $("#nine").on("click", function () {
    //     alert("nine");
    // })



    let carousel = $(".carousel").waterwheelCarousel({
        flankingItems: 2,
        separation: 460,
        separationMultiplier: 0.76,
        speed: 800,
        keyboardNav: true,
        sizeMultiplier: 0.7,
        //imageNav: false

        movingToCenter: function ($newCenterItem) {
            
            let imgUrl = $newCenterItem.attr('src');

            switch (imgUrl) {

                case "img/img1.jpg":
                    $("#parOne").html(`
                        <p>explore a wold of </p>
                        <h1>FREEDOM</h1>
                        <p>Rehabilitation cannot take place behind the high walls of an</p>
                        <p>institution. Only in liberty can one find true healing, peace, love.</p>
                        <button id="more">More!</button>
                    `);
                    break;
                case "img/img2.jpg":
                    $("#parOne").html(`
                        <p>explore a wold of </p>
                        <h1>FAITH</h1>
                        <p>For the very poor, mental health support hardly exist. With no</p>
                        <p>acces to counselling, medicine or proffesional care, all they have</p>
                        <p>is feith</p>
                        <button id="more">More!</button>
                    `);
                    break;
                case "img/img9.jpg":
                    $("#parOne").html(`
                        <p>explore a wold of </p>
                        <h1>SUFFOCATION</h1>
                        <p>lorem</p>
                        <p>lorem</p>
                        <p>lorem</p>
                        <button id="more">More!</button>
                    `);
                    break;    
                default:
                    alert('no mo');    
            }



            $("#more").on("click", function () {

                switch (imgUrl) {

                    case "img/img1.jpg":
                        $(".carousel").html(`  
                            <div id="afterPop">
                                <p class="popwin">Lorem ipsum dolor, sit amet consectetur lol </p>
                                <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                                <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                                <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                                <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                                <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                                <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                                <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                                <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                                <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                            </div>
                        `);

                        $("#parOne").html(`  
                            <p>Lorem ipsum dolor, sit amet consectetur </p>
                            <p>Lorem ipsum dolor, sit amet consectetur </p>
                            <a href="slider.html">back</a>
                         `);

                        $("#prevNextButtons").hide();

                    case "img/img2.jpg":
                        $(".carousel").html(`  
                            <div id="afterPop">
                                <p class="popwin">one one one one one</p>
                                <p class="popwin">one one one one one</p>
                                <p class="popwin">one one one one one</p>
                                <p class="popwin">one one one one one</p>
                                <p class="popwin">one one one one one</p>
                                <p class="popwin">one one one one one</p>
                                <p class="popwin">one one one one one</p>
                                <p class="popwin">one one one one one</p>
                                <p class="popwin">one one one one one</p>
                            </div>
                        `);

                        $("#parOne").html(`  
                            <p>Lorem ipsum dolor, sit amet consectetur </p>
                            <p>Lorem ipsum dolor, sit amet consectetur </p>
                            <a href="slider.html">back</a>
                         `);

                        $("#prevNextButtons").hide();   
                    
                    default:
                           




                }

                

            })

            
            

            
            
        },
    });

    $("#prev").bind("click", function () {
        carousel.prev();
        return false;
    });

    $("#next").bind("click", function () {
        carousel.next();
        return false;
    });

    // $("#carousel").on("swipeleft", function () {
    //     carousel.next();
    //     return false;
    // });

    // $("#carousel").on("swiperight", function () {
    //     carousel.prev();
    //     return false;
    // });

    let counter = 0;

    $("#prev").on("click", function() {
        counter--;
        console.log(counter);
    })

    $("#next").on("click", function () {
        counter++;
        console.log(counter);
    })

    $("#more").on("click", function () {

        $(".carousel").html(`  
                    <div id="afterPop">
                        <p class="popwin">Lorem ipsum dolor, sit amet consectetur lol </p>
                        <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                        <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                        <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                        <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                        <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                        <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                        <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                        <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                        <p class="popwin">Lorem ipsum dolor, sit amet consectetur </p>
                    </div>
                `);

        $("#parOne").html(`  
                    <p>Lorem ipsum dolor, sit amet consectetur </p>
                    <p>Lorem ipsum dolor, sit amet consectetur </p>
                    <a href="slider.html">back</a>
                `);

        $("#prevNextButtons").hide();

    })



    

    
    



    



    

    

    



    
    
});