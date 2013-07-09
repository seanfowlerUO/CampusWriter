
function request()
{
var xmlHttp;
//for Chrome, Firefox, IE7+
if (window.XMLHttpRequest)
    {xmlHttp = new XMLHttpRequest();}
//for IE5 and IE6
else
    {xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");}
//Requesting the file from the server
xmlHttp.open("GET","localnotecache.txt",true);
xmlhttp.send();
$(#noteText).innerHTML=xmlHttp.responseText;
}

