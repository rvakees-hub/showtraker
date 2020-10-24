$(document).ready(function(){
    $('#action').click(function(){
        $('.action').show();
        $('.news,.romance,.adventure,.horror,.sports,.drama,.sci-fi,.children,.travel,.reality').hide();
    });
    $('#news').click(function(){
        $('.news').show();
        $('.action,.romance,.adventure,.horror,.sports,.drama,.sci-fi,.children,.travel,.reality').hide();
    });
    $('#romance').click(function(){
        $('.romance').show();
        $('.news,.action,.adventure,.horror,.sports,.drama,.sci-fi,.children,.travel,.reality').hide();
    });
    $('#adventure').click(function(){
        $('.adventure').show();
        $('.news,.romance,.action,.horror,.sports,.drama,.sci-fi,.children,.travel,.reality').hide();
    });
    $('#horror').click(function(){
        $('.horror').show();
        $('.news,.romance,.adventure,.action,.sports,.drama,.sci-fi,.children,.travel,.reality').hide();
    });
    $('#sports').click(function(){
        $('.sports').show();
        $('.news,.romance,.adventure,.horror,.action,.drama,.sci-fi,.children,.travel,.reality').hide();
    });
    $('#drama').click(function(){
        $('.drama').show();
        $('.news,.romance,.adventure,.horror,.sports,.action,.sci-fi,.children,.travel,.reality').hide();
    });
    $('#sci-fi').click(function(){
        $('.sci-fi').show();
        $('.news,.romance,.adventure,.horror,.sports,.drama,.action,.children,.travel,.reality').hide();
    });
    $('#children').click(function(){
        $('.children').show();
        $('.news,.romance,.adventure,.horror,.sports,.drama,.sci-fi,.action,.travel,.reality').hide();
    });
    $('#travel').click(function(){
        $('.travel').show();
        $('.news,.romance,.adventure,.horror,.sports,.drama,.sci-fi,.children,.action,.reality').hide();
    });
    $('#reality').click(function(){
        $('.reality').show();
        $('.news,.romance,.adventure,.horror,.sports,.drama,.sci-fi,.children,.travel,.action').hide();
    });
    $('.noFilm').click(function(){
        $('.action,.news,.romance,.adventure,.horror,.sports,.drama,.sci-fi,.children,.travel,.reality').hide();
    });
});



$(document).ready(function(){
    $('#a').click(function(){
        $('.a').show();
        $('.0-9,.b,.c,.d,.e,.f,.g,.h,.i,.j,.k').hide();
    });
    $('#b').click(function(){
        $('.b').show();
        $('.0-9,.a,.c,.d,.e,.f,.g,.h,.i,.j,.k').hide();
    });
    $('#c').click(function(){
        $('.c').show();
        $('.0-9,.b,.a,.d,.e,.f,.g,.h,.i,.j,.k').hide();
    });
    $('#d').click(function(){
        $('.d').show();
        $('.0-9,.b,.c,.a,.e,.f,.g,.h,.i,.j,.k').hide();
    });
    $('#e').click(function(){
        $('.e').show();
        $('.0-9,.b,.c,.d,.a,.f,.g,.h,.i,.j,.k').hide();
    });
    $('#f').click(function(){
        $('.f').show();
        $('.0-9,.b,.c,.d,.e,.a,.g,.h,.i,.j,.k').hide();
    });
    $('#g').click(function(){
        $('.g').show();
        $('.0-9,.b,.c,.d,.e,.f,.a,.h,.i,.j,.k').hide();
    });
    $('#h').click(function(){
        $('.h').show();
        $('.0-9,.b,.c,.d,.e,.f,.g,.a,.i,.j,.k').hide();
    });

    $('#i').click(function(){
        $('.i').show();
        $('.0-9,.b,.c,.d,.e,.f,.g,.h,.a,.j,.k').hide();
    });
    $('#j').click(function(){
        $('.j').show();
        $('.0-9,.b,.c,.d,.e,.f,.g,.h,.i,.a,.k').hide();
    });
    $('#k').click(function(){
        $('.k').show();
        $('.0-9,.b,.c,.d,.e,.f,.g,.h,.i,.j,.a').hide();
    });
    $('#0-9').click(function(){
        $('.0-9').show();
        $('.a,.b,.c,.d,.e,.f,.g,.h,.i,.j,.k').hide();
    });

 
        var Namecheck = false;
        var Emailcheck = false;
        var Passwordcheck = false;

    



    $('#Name').keyup(function(){
        var username = $('#Name').val();
        if(username.length < 6){
            $('#Namere').hide();
            $('#Namein').show();
            $('#Namearea').css({'border':'1px solid red','box-shadow':'0 0 10px red'});
        }
        else{
            $('#Namere').hide();
            $('#Namein').hide();
            $('#Namearea').css({'border':'1px solid silver','box-shadow':'none'});
            Namecheck = true;
        }
    
    });

    $('#Email').keyup(function(){
        var useremail = $('#Email').val();
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 
        if(useremail.match(mailformat)){
            $('#Emailre').hide();
            $('#Emailin').hide();
            $('#Emailarea').css({'border':'1px solid silver','box-shadow':'none'});
            Emailcheck = true;
        }
        else{
            $('#Emailre').hide();
            $('#Emailin').show();
            $('#Emailarea').css({'border':'1px solid red','box-shadow':'0 0 10px red'});
        }
    
    });

    $('#Email').click(function(){
        var username = $('#Name').val();
        if(username.length == 0){
            $('#Namere').show();
            $('#Namein').hide();
            $('#Namearea').css({'border':'1px solid red','box-shadow':'0 0 10px red'});
        }
        else{
            $('#Namere').hide();
            $('#Namein').hide();
            $('#Namearea').css({'border':'1px solid silver','box-shadow':'none'});
        }
    
    });

    $('#Password').click(function(){
        var username = $('#Name').val();
        var usermail = $('#Email').val();
        if(username.length == 0){
            $('#Namere').show();
            $('#Namein').hide();
            $('#Namearea').css({'border':'1px solid red','box-shadow':'0 0 10px red'});
        }
        else{
            $('#Namere').hide();
            $('#Namein').hide();
            $('#Namearea').css({'border':'1px solid silver','box-shadow':'none'});
        }
    
        if(usermail.length == 0){
            $('#Emailre').show();
            $('#Emailin').hide();
            $('#Emailarea').css({'border':'1px solid red','box-shadow':'0 0 10px red'});
        }
        else{
            $('#Emailre').hide();
            $('#Emailin').hide();
            $('#Emailarea').css({'border':'1px solid silver','box-shadow':'none'});
        }

    });


    $('#Password').keyup(function(){
        var userpassword = $('#Password').val();
        var pwdFormat = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,8}$/; 
        if(userpassword.match(pwdFormat)){
            $('#Passwordre').hide();
            $('#Passwordin').hide();
            $('#Passwordarea').css({'border':'1px solid silver','box-shadow':'none'});
            Passwordcheck = true;
        }
        else{
            $('#Passwordre').hide();
            $('#Passwordin').show();
            $('#Passwordarea').css({'border':'1px solid red','box-shadow':'0 0 10px red'});
            
        }
    
    });

    $('#sign').click(function(){
        if(Namecheck === true && Emailcheck === true && Passwordcheck === true){
            var username = $('#Name').val();
            var useremail = $('#Email').val();
            var userpassword = $('#Password').val();

            var user = { Name: username , Email:useremail , Password:userpassword};
        }
    });

});


