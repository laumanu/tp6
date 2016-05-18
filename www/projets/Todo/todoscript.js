(function(){
   var article =document.querySelector('template').content.firstElementChild;

var ListeTodo =document.getElementById('todolist');
    var ListeDone = document.getElementById('donelist');
    document.querySelector('input').onkeypress = function (e) {
        if (!e) e = window.event;
        if (e.keyCode == '13'|| e.keyCode=='32'){
           if(input.value.length!=0) {
          
               ajouterTodo(this.value);
               
            document.querySelector("input").value="";

        }
            else{
                alert(" saisie kelke choses");
            }
              return false;
        }
    }
   
   

   function ajouterTodo(todoTexte){
    
     /*var articl = document.createElement("article");
    
     var  inpu = document.createElement("input");
       inpu.type="checkbox"; 
       inpu.className="checkbox";
       
     var letexte = document.createElement("div");
    letexte.className="text";
       letexte.tabIndex="0";
     letexte.contentEditable=true;
      letexte.textContent = todoTexte; 
       
       
     var image = document.createElement("img");
       image.src="imagetd/delete.png";
       image.tabIndex="0";
      
       
     articl.appendChild(inpu);
       articl.appendChild(letexte);
       articl.appendChild(image);*/
       
       var articl=article.cloneNode(true);
       articl.querySelector('div').textContent=todoTexte;
    ListeTodo.appendChild(articl);
    ListeTodo.insertBefore(articl,ListeTodo.childNodes[0]);
      
      
 var image = articl.querySelector('img');
       image.onclick = deleteTodo;
       image.onkeypress = deleteTodoSiEnter;
    var linput = articl.querySelector('div');
       linput.onkeypress=retourInput;
     var checke = articl.querySelector('input');
       checke.onchange = barrer;
       
    
     dateUpdated();  
         
   };
    
     
    function deleteTodo(){
       this.parentNode.outerHTML="";
    }


    function deleteTodoSiEnter(e){
        if (!e) e = window.event;
        if (e.keyCode == '13'|| e.keyCode=='32'){
            this.parentNode.outerHTML=" ";
        }
        
    }

function retourInput(e){
     if (!e) e = window.event;
        if (e.keyCode == '13'|| e.keyCode=='32'){
         document.getElementById("input").focus();
            
        }
   dateUpdated();
    }

function barrer(){

   if(this.checked){
     donelist.insertBefore(this.parentNode,ListeDone.firstChild); 
       this.focus();
   }
    else{
        todolist.appendChild(this.parentNode); 
        this.focus();
    }

    dateUpdated();
}
//var lecheck = deposer.querySelectorAll=(".checkbox"); 
btncompleter.onclick= function(){
 btncompleter.disabled=true; 
    while(todolist.hasChildNodes()){
        // btncompleter.firstElementChild.checked=true;
        todolist.firstElementChild.firstElementChild.click();
        // donelist.appendChild(todolist.removeChild(todolist.firstChild));
      
    }

}

btnEffacer.onclick = function(){
    btnEffacer.disabled=true;
   while(donelist.hasChildNodes()){
    donelist.removeChild(ListeDone.firstChild);
   }
    dateUpdated();
}

function dateUpdated(){
   
    var afaire=[];
    var dejafait=[];
    for(let i =0;i<todolist.children.length;i++){
        afaire.unshift(todolist.children[i].querySelector("div").textContent);
    }
    for(let i=0;i<donelist.children.length;i++){
        dejafait.unshift(donelist.children[i].querySelector("div").textContent);
    }
    localStorage.setItem('afaire',JSON.stringify(afaire));
    localStorage.setItem('dejafait',JSON.stringify(dejafait));
}

function initialiser(){
   var afaire=JSON.parse(localStorage.getItem('afaire'));
   var dejafait=JSON.parse(localStorage.getItem('dejafait')); 
    
     for (var i in afaire)
           {
                ajouterTodo(afaire[i]);
           }
        for (var i in dejafait)
           {
            ajouterTodo(dejafait[i]);
            todolist.firstChild.querySelector("input").click();   
           }
    document.documentElement.className=localStorage.getItem('skin');
    
   
}
    

initialiser();
    
    
selectSkin.onchange=function(){

    document.documentElement.className = selectSkin.value;
    localStorage.setItem('skin',selectSkin.value);
   
}

   function parseQueryString(qstr){
        var query = {};
        var parameters = qstr.substr(1).split('&');
        for(var i = 0; i<parameters.length; i++) {
            var keyAndValue = parameters[i].split('=');
            var key = decodeURIComponent(keyAndValue[0]);
        var value = decodeURIComponent(keyAndValue[1] ||'');
        query[key] = value;
            
        }
        return query;
    }
 
   
    
      
    if(location.search)
    {
        var skin = parseQueryString(location.search)['skin'];
        if(skin || skin==="") {
            document.documentElement.className = skin;
            localStorage.skin = skin;
            selectSkin.value = skin;
        }
        if(!selectSkin.value) selectSkin.value = "";
    }
    else{
        selectSkin.value = localStorage.getItem('skin');
    }   
          
})();



 


    

