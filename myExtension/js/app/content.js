var categorizationApi ="https://website-categorization.whoisxmlapi.com/api/v1?apiKey=at_zs6tishK2xEXWG5TdY1uy7htcOPS3&domainName="
var result = document.getElementsByClassName("result");
var drive = document.getElementsByClassName("paper");

for (var i = 0; i < result.length; i++) {
	var link = document.getElementsByClassName("js-result-title")[i];
	getInformation(link, i, categorizationApi);
}

var drive = document.getElementsByClassName("paper")[0];
addElement(drive);
console.log("hi")


function setElement(data, link, i){
      //console.log(data)
  var div=document.createElement("div"); 
  div.innerHTML="<div class='suggestions'><label class='suggestions-label'>"+data+"</label></div>";
  result[i].appendChild(div);
}


function getInformation(link, i, linkApi) {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", linkApi + link, true);
  xhttp.send();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var data = this.responseText;
      setlabel(data, link, i)
    }
  };
}

function setlabel(data, link, i){
      //console.log(data)
  var div=document.createElement("div"); 
  div.innerHTML="<div class='suggestions'><label class='suggestions-label'>"+data+"</label></div>";
  result[i].appendChild(div);
}


function addElement(drive){
  var div=document.createElement("div");
  div.innerHTML="<div><button style='background:#FD6C6C'>Filter</button><button style='background:#FD6C6C'>Button1</button><button style='background:#FD6C6C'>Button2</button></div>";
  drive.prepend(div);
}



 
