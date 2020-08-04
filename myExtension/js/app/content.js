var result = document.getElementsByClassName("result");
// var link = document.getElementsByClassName("js-result-title");

for (var i = 0; i < result.length; i++) {
	var link = document.getElementsByClassName("js-result-title")[i];
	var div=document.createElement("div"); 
	div.innerHTML="<div class='suggestions'><label class='suggestions-label'>"+link.href+"</label></div>";
	result[i].appendChild(div);
	//console.log(link[i].href);
	getInformation(link);
}

function getInformation(link) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = this.responseText
      console.log(data.categories[0])
    }
  };
  xhttp.open("GET", "https://website-categorization.whoisxmlapi.com/api/v1?apiKey=at_zs6tishK2xEXWG5TdY1uy7htcOPS3&domainName=" + link, true);
  xhttp.send();
}

 
