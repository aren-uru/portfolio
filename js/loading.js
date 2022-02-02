var stroke;
stroke = new Vivus('mask', {
    start:'manual',
    type: 'scenario-sync',
    duration: 30,
    forceRender: false,
    animTimingFunction:Vivus.EASE,
},
function(){
       $("#mask").attr("class", "done");
}
);

$(window).on('load',function(){
  $("#loading").delay(9000).fadeOut('slow');
	$("#loading_logo").delay(9000).fadeOut('slow');
        stroke.play();//SVGアニメーションの実行
});