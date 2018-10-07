function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', 'file2.json', true);
    xobj.onreadystatechange = function() {
        if (xobj.readyState == 4 && xobj.status == "200") {
            var responseText = xobj.responseText;
            // Parse JSON string into object
            var actual_JSON = JSON.parse(responseText);
            callback(actual_JSON);
        }
    };
    xobj.send(null);
}

function viewJSON() {
    loadJSON(function(response) {
        var html = "";
        var dd = "dropd";
        for (var i = 0; i < response.results.length; i++) {
            html += ("<h2>"+response.results[i].departure.icaoCode+"</h2>");

            html += ("<table border=1 double id=table><tr><td>");
            html += ("Nombre del Restaurante:</td></tr><td>");
            html += ("<strong>" + response.results[i].geography.latitude + "</strong>");
            html += ("</td></tr><td>");

            html += ("Latitud GPS:</td><tr><td>");
            html += (response.results[i].geography.latitude);
            html += ("</td></tr><td>");
            html += ("Longitud</td><tr><td>");
            html += (response.results[i].geography.latitude);
            html += ("</td></tr><tr><td>");
            /* html += ("<img src=" + response.results[i].icon + ">"); */
            html += ("</td></tr><tr><td>");
            /* for (var j = 0; j <response.results[i].types.length; j++) {
                
                html += ("<br>");
                    html += ("<div>")
                 html += ("<p>");

                   html += (response.results[i].types[j]);
                    html += ("</p>");
                     html += ("</div>");
                         html += ("</div>");
            
            } */
            html += ("</td></tr></table >");
            html += ("<hr>");
            response.results[i].innerHTML = html;
            
            document.getElementById('results').innerHTML = html;
            




        }

    });
}



