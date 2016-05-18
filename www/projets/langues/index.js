(function(){
   
    
   "use strict"
   
     
   var leiframe = document.querySelector("iframe");
    
    leiframe.onload=function(){
        
    leiframe.style.height = 'initial';
    leiframe.style.height = leiframe.contentDocument.body.scrollHeight + 200 +'px';
    
    var lesbutton  = leiframe.contentDocument;
    var $paragraDansArticle=$(lesbutton).find('article p');
    $paragraDansArticle.before('<button>basculer<br>affichage</button>');
    // masquer les boutons
      var iframeRoot = leiframe.contentDocument;
      var $buton = $(iframeRoot).find(' article button')
     $buton.hide();
     
    }
    
     window.onresize = resize;

    function resize()
    {
     leiframe.style.height = 'initial';
     leiframe.style.height = leiframe.contentDocument.body.scrollHeight + 200 +'px';     
    }
     
// basculer le iframe au complet    
$( ".basculeIframe" ).click(function() {
  $( "iframe" ).fadeToggle( "slow","linear" );
}); 
    
// basculer les paragraphe au complet
   
$(".basculeParagraphe").click(function(){
   var iframeRoot = leiframe.contentDocument;
  var $p = $(iframeRoot).find('p'); 
  $p.slideToggle(2000);
});
    // button dans les articles

$(".basculebouton").click(function(){
    
 var iframeRoot = leiframe.contentDocument;
  var $buton = $(iframeRoot).find(' article button');
$buton.css({
 
    float:'right',
    marginTop:'10px', 
    marginRight:'10px', 
  
});
  $buton.fadeToggle("linear");
    
 
    $buton.hover(function () {
            $(this).css({
                "color": "red",
                "opacity": "1",
                cursor:"pointer",
                transition:"1s"
                
            });
        }, function () {
            $(this).animate({
                "opacity": "0.5"
            },"slow",function () {
                $(this).css({"color": "black"});
            });

        });

});

 

 
   
    
     
})();


    
    
