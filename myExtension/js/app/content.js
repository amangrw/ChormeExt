var result = document.getElementsByClassName("result");
// var link = document.getElementsByClassName("js-result-title");

for (var i = 0; i < result.length; i++) {
	var link = document.getElementsByClassName("js-result-title")[i];
	getInformation(link, i);
}

function getInformation(link, i) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://website-categorization.whoisxmlapi.com/api/v1?apiKey=at_zs6tishK2xEXWG5TdY1uy7htcOPS3&domainName=" + link, true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = this.responseText;
      setlabel(data, link, i)
    }
  };
}

function setlabel(data, link, i){
      console.log(data)
  var div=document.createElement("div"); 
  div.innerHTML="<div class='suggestions'><label class='suggestions-label'>"+data+"</label></div>";
  result[i].appendChild(div);
}

 
