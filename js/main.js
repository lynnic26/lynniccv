$(document).ready(function() {
	setTimeout(function() {
    	$('#html-pourcent').html('80%');
    },2800);

    setTimeout(function() {
    	$('#css-pourcent').html('90%');
    },3500);

    setTimeout(function() {
    	$('#javascript-pourcent').html('70%');
    },4200);

    setTimeout(function() {
    	$('#php-pourcent').html('55%');
    },4900);

    setTimeout(function() {
    	$('#angular-pourcent').html('65%');
    },5600);

    setTimeout(function() {
    	$('#gulp-pourcent').html('50%');
    },6300);

    setTimeout(function() {
        $('#bt-pourcent').html('80%');
    },6900);

    $('#fullpage').fullpage({
    	// sectionsColor:['#E74C3C'],
    	verticalCentered:true,
    	navigation:true,
    	navigationPosition:'left',
    	navigationTooltips:['Home', 'Skills','Projects','Education&career','Certification','Jobs Preferred','More'],
    	showActiveTooltip: true,
    	anchors:['page1','page2','page3','page4','page5','page6','page7'],
    	loopBottom:true,
    	loopTop:true,
    	easingcss3: 'ease',
    	afterLoad: function(anchorLink, index){
            var loadSection = $(this);
    	 	loadSection.css('background-color','#ff514c');
            switch(index){
                case 5:
                   move('.section5 .certifi1').scale(1.1).end(function(){
                      move('.section5 .certifi2').scale(1.1).end();
                   });

                break;
                default:
                break;
            }
    	},
    	 onLeave: function(index, nextIndex, direction){
    	 	var leavingSection = $(this);
    	 	leavingSection.css('background-color','#fa2620');
            switch(index){
                case 5:
                   move('.section5 .certifi1').scale(1.0).end();
                   move('.section5 .certifi2').scale(1.0).end();
                break;
                default:
                break;
            }
    	 }
    });



});