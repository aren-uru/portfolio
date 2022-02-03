var stroke;
stroke = new Vivus('mask', {
    start:'manual',
    type: 'scenario-sync',
    duration: 20,
    forceRender: false,
    animTimingFunction:Vivus.EASE,
},
function(){
       $("#mask").attr("class", "done");
}
);

$(window).on('load',function(){
  $("#loading").delay(7000).fadeOut('slow');
	$("#loading_logo").delay(7000).fadeOut('slow');
        stroke.play();
});