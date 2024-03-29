/* This file should be initialized on the pages startup and will save the contents of the note, essay and outline every five
   seconds. NOTE: THIS IS DEPENDENT ON THE ORDER OF THE ELEMENTS IN THE HTML, that is, it requires the order:
   note , essay , outline. 
   Author: Sean Fowler, Skylar Berg*/
   

/*function logText()
{
    var count = 0;
    $("div").each(
    function() {
    if($(this).hasClass("nicEdit-main"))
        {
        var text = $(this).html();
        if(count==0){cache.note    = text}
        if(count==1){cache.essay   = text}
        if(count==2){cache.outline = text}
        //console.log(text);
        count++;
        }
    });
    setTimeout(logText, 5000);
}*/

function logText(area)
{
	
    var count = 0;
    $("div").each(
    function() {
    if($(this).hasClass("nicEdit-main"))
        {
        var text = $(this).html();
        if(count==0 && area=="note"){cache.note    = text;}
        else if(count==1 && area=="essay"){cache.essay   = text;}
        else if(count==2 && area=="outline"){cache.outline = text;}
        count++;
        }
    });
    //setTimeout(logText, 5000);
}
	
function checkChange()
{
	//THIS WILL BE POINTLESS WHEN TEXT DIVS ARE GIVEN ID's. AT THAT POINT WE WILL USE THE onChange attribute
	var count = 0;
	$("div").each(
		
			function ()
			{   if($(this).hasClass("nicEdit-main"))
				{
					if(count==0)
					{
						if(cache.note != $(this).html()){cache.noteChange=true}
					}
					else if(count==1)
					{
						if(cache.essay != $(this).html()){cache.essayChange=true}
					}		
					else if(count==2)
					{
						if(cache.outline != $(this).html()){cache.outlineChange=true}
					}	
				count++;
				}
			
			});
		
	
	updateLoggedText();
	setTimeout(checkChange, 5000);

}
function displayLoggedText(areaString)
{
    console.log(cache[areaString]);
}


function updateLoggedText()
{
	if(cache.noteChange==true){logText("note"); cache.noteChange=false;}
	if(cache.essayChange==true){logText("essay"); cache.essayChange=false;}		
	if(cache.outlineChange==true){logText("outline"); cache.outlineChange=false;}
}

var cache = {
            note    : null,
            essay   : null,
            outline : null,
			
			noteChange   : false,
			essayChange  : false,
			outlineChange: false,
            }