function loadJSON(callback) {   

    var jObject = new XMLHttpRequest();
        jObject.overrideMimeType("application/json");
    jObject.open('GET', 'quest1.json', true); 
    jObject.onreadystatechange = function () {
          if (jObject.readyState == 4 && jObject.status == 200) {
            callback(jObject.responseText);             
          }
    };  
    jObject.send(null);
 }


 $(document).ready(function(){
    loadJSON(function(response){        
        var json = JSON.parse(response);
        document.getElementById('question').innerHTML = json['quest']['question'];        
        var opts = json['quest']['options'];
        for (var i = 0; i < opts.length; i++){
            document.getElementById('options').innerHTML += "<div><input type='radio'>" + opts[i]['option'] + "</div></input>";
        }            
            
        });
    });
