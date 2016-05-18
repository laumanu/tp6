
(function(){
    "use strict";
    
if(localStorage.checked === "true")
{
    sourdine.checked = "true";
}
else
{
    audio.play();
}

window.Jouer = Jouer;    

function Jouer()
{
    localStorage.checked = sourdine.checked;
    if(sourdine.checked)
    {
        audio.play();
        document.getElementById("labelID").title = "Desactiver la sourdine";
    }
    else
    {
        audio.load();
        document.getElementById("labelID").title = "Activer la sourdine";
    }
}   
  jQuery.getJSON("projets.json").done(function(jsonData){
      console.log(JSON.stringify(jsonData,null,4));
  })
  .fail(function(){
      console.log("impossible de charger le JSON");
  });
var projets = 
[
    {nom:"Langues",
     file:"langues/langues.html",
     description:"Pratique de l'utilisation des selecteurs et de la mise en page avec css3"},
    { nom:"Pens", 
     file:"pens/pens.html"},
    { nom:"YouTube", file:"youtube/youtubes.html"},
    { nom:"Tutoriel",
     file :"tutoriel/indextu.html"},
     {nom:"Todo",
      file:"Todo/todo.html"},
];
   
//   $(function () {
  // Grab the template script
 var theTemplateScript = $("#templateScript").html();

  // Compile the template
  var theTemplate = Handlebars.compile(theTemplateScript);

  // This is the default context, which is passed to the template
  var context = {
    projets: [ 
      { nom:"Langues", file:"langues/langues.html",
       description:"Pratique de l'utilisation des selecteurs et de la mise en page avec css3",
       sujets: ["CSS3","HTML5","Selecteurs"]},
        
      { nom:"Pens", file:"pens/pens.html",
       description:"Exercices que j'ai faits sur CodePen"},
         { nom:"Todo",file:"Todo/todo.html" },
        { nom:"Todo <span style='color:red'>(Classique</span>)",file:"Todo/todo.html?skin=bred-on-black" },
        { nom:"Todo (<span style='color:orange'>Orange</span>)",file:"Todo/todo.html?skin=blue-on-orange" },
        { nom:"Todo (<span style='color:gray'>Gris</span>)",file:"Todo/todo.html?skin=design" },
        //{ nom:"Todo of Heroes",file:"Todo/todo.html" },
         {  nom:"Tutoriel",file :"tutoriel/indextu.html" },
      { nom:"YouTube", file:"youtube/youtubes.html"}
     
     
    ]
  };

  // Pass our data to the template
  var theCompiledHtml = theTemplate(context);

  // Add the compiled html to the page
  $(document).find("ul").append(theCompiledHtml);
//});
    
  


/*function menu(items) {
    
    var listeHTML = "";
    // boucle for pour parcourir  les items
     var ul = document.querySelector("#ulMenu");
    for(var i = 0; i < items.length; i++) {
        
        var li = '<li><a href="../' + items[i].file + '">' + items[i].nom + '</a></li>';
  
        ul.innerHTML+=li; 
    }
   
}
    menu(projets);*/
    
    
   

})();
