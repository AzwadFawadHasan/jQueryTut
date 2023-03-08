$(document).ready(function () {//ensures that the page loads first before the javascript executes
    //your jQuery code here 
    console.log('newfile')
    //below: $ and jQuery is the same thing
    console.log($)//$ is the shortcut of jQuery
    //cdn is content delivery network
    //meaning you can serve jQuery using the internet 


    //*************************************************************************
    //$('selector').action()                                      // this is the syntax of jQuery
    //$('p').click(); //click on paragraph p
    $('p').click(function () {
        console.log('you clicked on <p>', this)
        //    $('p').hide()

        //if we use the above code, on one single click all the p elements gets hidden
        //if we want to click individually and hide them individually then we use the this keyword

        //$(this).hide()

        //likewise we can also select #id and .classes
        //$('#id').hide()
        //$('.class').hide()

    }); //click on paragraph p
    /*
    $('p').dblclick(function () {
        console.log('Double Clikked', this)
      

    }); 

    $('p').mouseenter(function () {
        console.log('You Entered', this)
      

    }); 
    $('p').mouseleave(function () {
        console.log('You mouse leave', this)
      

    }); 
    $('p').mousedown(function () {
        console.log('Your mouse is down', this)
      

    }); 
    $('p').mouseup(function () {
        console.log('Your mouse has gon up', this)
      

    }, function(){
        console.log('thanks for comming')
    });*/

    //
    // there are 3 main types of selectors in jQuery
    //1.element selector
    //2. id selector
    //3. class selector

    //Element Selector
    //element selector which clicks on all p
    //$('p').click()

    //2. This is an example of ID selector
    //$('#second').click()//example of id selector

    //d. This is an example of class selector
    //$('.odd').click()//example of id selector


    //Other Selectors
    // $('*').click()//clicks on all the elements
    //$('p.odd').click()//clicks on all the elements

    //p:first means the first element of a p tag
    //
    //$('p:first').click()//clicks on all the elements
    //$('*').click()
    //Event's in jQuery
    //Mouse Events = click, dblclick, mouseenter, mouseleave
    //keyboard Events = keypress, keydown, keyup,
    //formEvents = submit, change, focus,blur
    //document/window events = load resize, scroll, unload

    //demo-ing on methods

    $('p').on({
        'click': function () {
            console.log('Thasnks for clicking', this)
        },

        mouseleave: function () {
            console.log("mouseleave")
        }


    });
    $('#wiki').hide(1000, function () {
        console.log('hide complete')
    }); $('#wiki').show(1000, function () {
        console.log('show complete')
    })

    $('#but').click(function () {
        $('#wiki').toggle(1000)
    })
    $('#but3').click(function () {
        $('#wiki2').fadeToggle(1000)
    })

    $('#but2').click(function () {
        $('#wiki2').fadeIn(1000, () => {
            //document.write('faded in')
            console.log('fadedin')
            $('#wiki2').fadeOut(1000, () => {
                console.log('fadedOut')
                $('wiki2').fadeTo(0.5)
            })

        })
    })



    $('#wiki2').slideUp(1000)
    
    $('#wiki2').slideToggle(1000)
    $('#wiki2').slideDown(1000)


    //Animate function in  JQuery
    $('#wiki2').animate({opacity:0.3,
       // height:'1550px'
        //,width:'350px'
    },2000)

    $('#wiki2').animate({opacity:0.3,
       // height:'1550px'
        //,width:'350px'
    },'slow')

    $('#wiki').animate({opacity:0.3},3000)
    $('#wiki').animate({opacity:0.9},1000)
    //$('#wiki').animate({height:'13px'},1000)
    //$('#wiki').animate({width:'13px'},1000)
    //$('#wiki').animate({height:'13px'},1000)
    //$('#wiki').animate({width:'130px'},1000)

    
    $('#ta').animate(1000, ()=>{
        $('#ta').val('value changeseS')
    }
    );
    $('#inp').val('text line ')
   $('inp').remove()
   $('#wiki2').css('background-color', 'red')

   //AJAX using JQuery
   $.get('https://code.jquery.com/jquery-3.6.3.js', function(data, status){alert(data)})
   $.get('https://code.jquery.com/jquery-3.6.3.js', function(data, status){alert(status)})
   $.get('https://code.jquery.com/jquery-3.6.3.js', function(data, status){alert(status)})
   

    $.post('https://code.jquery.com/jquery-3.3.1.js',
        { name: 'harry', channel: 'code with harry' },
        function (data, status) { alert(status) });


    


    
})

