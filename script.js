$(document).ready(function() {


    $('.slider').slick({
        infinite: true,
        centerMode: true,
        centerPadding: '12%',
        slidesToShow: 3,
        focusOnSelect: true,
        speed: 700
        // responsive: [{
        //     breakpoint: 992,
        //     settings: {
        //         slidesToShow: 1
        //     }
        // }]
    });

    

    $('.slider').on('setPosition', function (event, slick, direction) {
        
        let currentSlide = $('.slider').slick('slickCurrentSlide');

        switch (currentSlide) {

            // SLIDE 1 (centar starting)
            case 0:
                setTimeout(function () {
                    $("#description0").hide().html(`
                        <div id="fadeOne">
                            <p>explore a wold of</p>
                            <h1>SLIDE ONE</h1>
                            <p>Rehabilitation cannot take place behind the high walls of an</p>
                            <p>institution. Only in liberty can one find true healing, peace, love.</p>
                            <button id="more">More!</button>		
                        </div>
                    `).fadeIn(1500);

                    $("#more").on("click", function () {
                        $("#mainContainer").html(`
                           <div id="meunPosition">
                                <div>
                                    <img src="images/placeholder.jpg" alt="" />
                                </div>
                                <div id="insideMenu">
                                    <h1>SLIDE ONE</h1>
                                    <h1>SLIDE ONE</h1>
                                    <h1>SLIDE ONE</h1>
                                    <h1>SLIDE ONE</h1>
                                    <h1>SLIDE ONE</h1>
                                    <a href="slider.html" id="after">back please</a>
                                </div>
                            </div>
                        `);
                    })
                }, 300);

                $(`#description1`).fadeOut(700);
                $(`#description1`).html('');

                // for (let i = 0; i < 8; i++) {
                //     $(`#description${i}`).html(``);
                // }
                break;
            
            // SLIDE TWO     
            case 1:
                setTimeout(function () {
                    $("#description1").hide().html(`
                        <div id="fadeOne">
                            <p>explore a wold of</p>
                            <h1>SLIDE TWO</h1>
                            <p>Rehabilitation cannot take place behind the high walls of an</p>
                            <p>institution. Only in liberty can one find true healing, peace, love.</p>
                            <button id="more">More!</button>		
                        </div>
                    `).fadeIn(1500);

                    $("#more").on("click", function () {
                        $("#mainContainer").html(`
                           <div id="meunPosition">
                                <div>
                                    <img src="images/placeholder.jpg" alt="" />
                                </div>
                                <div id="insideMenu">
                                    <h1>SLIDE TWO</h1>
                                    <h1>SLIDE TWO</h1>
                                    <h1>SLIDE TWO</h1>
                                    <h1>SLIDE TWO</h1>
                                    <h1>SLIDE TWO</h1>
                                    <a href="slider.html" id="after">back please</a>
                                </div>
                            </div>
                        `);
                    })
                }, 300);

                $(`#description0`).fadeOut(700);
                $(`#description0`).html('');
                

                // for (let i = 0; i < 8; i++) {
                //     $(`#description${i}`).html(``);
                // }
                break;
            
            // SLIDE THREE    
            case 2:
                setTimeout(function () {
                    $("#description2").hide().html(`
                        <div id="fadeOne">
                            <p>explore a wold of</p>
                            <h1>SLIDE THREE</h1>
                            <p>Rehabilitation cannot take place behind the high walls of an</p>
                            <p>institution. Only in liberty can one find true healing, peace, love.</p>
                            <button id="more">More!</button>		
                        </div>
                    `).fadeIn(1500);

                    $("#more").on("click", function () {
                        $("#mainContainer").html(`
                           <h1>SLIDE THREE</h1>
                           <h1>SLIDE THREE</h1>
                           <h1>SLIDE THREE</h1>
                           <h1>SLIDE THREE</h1>
                           <h1>SLIDE THREE</h1>
                           <a href="slider.html" id="after">back please</a>  
                        `);
                    })
                }, 300);

                for (let i = 0; i < 8; i++) {
                    $(`#description${i}`).html(``);
                }
                break;

            // SLIDE FOUR    
            case 3:
                setTimeout(function () {
                    $("#description3").hide().html(`
                        <div id="fadeOne">
                            <p>explore a wold of</p>
                            <h1>SLIDE FOUR</h1>
                            <p>Rehabilitation cannot take place behind the high walls of an</p>
                            <p>institution. Only in liberty can one find true healing, peace, love.</p>
                            <button id="more">More!</button>		
                        </div>
                    `).fadeIn(1500);

                    $("#more").on("click", function () {
                        $("#mainContainer").html(`
                           <h1>SLIDE FOUR</h1>
                           <h1>SLIDE FOUR</h1>
                           <h1>SLIDE FOUR</h1>
                           <h1>SLIDE FOUR</h1>
                           <h1>SLIDE FOUR</h1>
                           <a href="slider.html" id="after">back please</a>  
                        `);
                    })
                }, 300);

                for (let i = 0; i < 8; i++) {
                    $(`#description${i}`).html(``);
                }
                break; 

            // SLIDE FIVE    
            case 4:
                setTimeout(function () {
                    $("#description4").hide().html(`
                        <div id="fadeOne">
                            <p>explore a wold of</p>
                            <h1>SLIDE FIVE</h1>
                            <p>Rehabilitation cannot take place behind the high walls of an</p>
                            <p>institution. Only in liberty can one find true healing, peace, love.</p>
                            <button id="more">More!</button>		
                        </div>
                    `).fadeIn(1500);

                    $("#more").on("click", function () {
                        $("#mainContainer").html(`
                           <h1>SLIDE FIVE</h1>
                           <h1>SLIDE FIVE</h1>
                           <h1>SLIDE FIVE</h1>
                           <h1>SLIDE FIVE</h1>
                           <h1>SLIDE FIVE</h1>
                           <a href="slider.html" id="after">back please</a>  
                        `);
                    })
                }, 300);

                for (let i = 0; i < 8; i++) {
                    $(`#description${i}`).html(``);
                }
                break;

            //SLIDE SIX    
            case 5:
                setTimeout(function () {
                    $("#description5").hide().html(`
                        <div id="fadeOne">
                            <p>explore a wold of</p>
                            <h1>SLIDE SIX</h1>
                            <p>Rehabilitation cannot take place behind the high walls of an</p>
                            <p>institution. Only in liberty can one find true healing, peace, love.</p>
                            <button id="more">More!</button>		
                        </div>
                    `).fadeIn(1500);

                    $("#more").on("click", function () {
                        $("#mainContainer").html(`
                           <h1>SLIDE SIX</h1>
                           <h1>SLIDE SIX</h1>
                           <h1>SLIDE SIX</h1>
                           <h1>SLIDE SIX</h1>
                           <h1>SLIDE SIX</h1>
                           <a href="slider.html" id="after">back please</a>  
                        `);
                    })
                }, 300);

                for (let i = 0; i < 8; i++) {
                    $(`#description${i}`).html(``);
                }
                break;

            // SLIDE SEVEN    
            case 6:
                setTimeout(function () {
                    $("#description6").hide().html(`
                        <div id="fadeOne">
                            <p>explore a wold of</p>
                            <h1>SLIDE SEVEN</h1>
                            <p>Rehabilitation cannot take place behind the high walls of an</p>
                            <p>institution. Only in liberty can one find true healing, peace, love.</p>
                            <button id="more">More!</button>		
                        </div>
                    `).fadeIn(1500);

                    $("#more").on("click", function () {
                        $("#mainContainer").html(`
                           <h1>SLIDE SEVEN</h1>
                           <h1>SLIDE SEVEN</h1>
                           <h1>SLIDE SEVEN</h1>
                           <h1>SLIDE SEVEN</h1>
                           <h1>SLIDE SEVEN</h1>
                           <a href="slider.html" id="after">back please</a>  
                        `);
                    })
                }, 300);

                for (let i = 0; i < 8; i++) {
                    $(`#description${i}`).html(``);
                }
                break;  
            
            // SLIDE EIGHT    
            case 7:
                setTimeout(function () {
                    $("#description7").hide().html(`
                        <div id="fadeOne">
                            <p>explore a wold of</p>
                            <h1>SLIDE EIGHT</h1>
                            <p>Rehabilitation cannot take place behind the high walls of an</p>
                            <p>institution. Only in liberty can one find true healing, peace, love.</p>
                            <button id="more">More!</button>		
                        </div>
                    `).fadeIn(1500);

                    $("#more").on("click", function () {
                        $("#mainContainer").html(`
                           <h1>SLIDE EIGHT</h1>
                           <h1>SLIDE EIGHT</h1>
                           <h1>SLIDE EIGHT</h1>
                           <h1>SLIDE EIGHT</h1>
                           <h1>SLIDE EIGHT</h1>
                           <a href="slider.html" id="after">back please</a>  
                        `);
                    })
                }, 300);

                for (let i = 0; i < 8; i++) {
                    $(`#description${i}`).html(``);
                }
                $(`#description8`).html(``);
                break;   
                
            // SLIDE NINE    
            case 8:
                setTimeout(function () {
                    $("#description8").hide().html(`
                        <div id="fadeOne">
                            <p>explore a wold of</p>
                            <h1>SLIDE NINE</h1>
                            <p>Rehabilitation cannot take place behind the high walls of an</p>
                            <p>institution. Only in liberty can one find true healing, peace, love.</p>
                            <button id="more">More!</button>		
                        </div>
                    `).fadeIn(1500);

                    $("#more").on("click", function () {
                        $("#mainContainer").html(`
                           <h1>SLIDE NINE</h1>
                           <h1>SLIDE NINE</h1>
                           <h1>SLIDE NINE</h1>
                           <h1>SLIDE NINE</h1>
                           <h1>SLIDE NINE</h1>
                           <a href="slider.html" id="after">back please</a>  
                        `);
                    })
                }, 300);

                for (let i = 9; i < 9; i++) {
                    $(`#description${i}`).html(``);
                }
                $(`#description7`).html(``);
                $(`#description0`).html('');
                break;    
            
            default:
                break;    
                
        }
    })

})





