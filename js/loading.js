var stroke;
stroke = new Vivus('mask', {
    start:'manual',
    type: 'scenario-sync',
    duration: 12,
    forceRender: false,
    animTimingFunction:Vivus.EASE,
},
function(){
       $("#mask").attr("class", "done");
}
);

$(window).on('load',function(){
  $("#loading").delay(6800).fadeOut('slow');
	$("#loading_logo").delay(6800).fadeOut('slow');
        stroke.play();
});