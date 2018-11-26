var currentpos,timer,scrolling = true,scrolldir;

window.onload = startscroll
window.onclick = pauseorcontinue
//window.ondblclick = pauseorcontinue
currentpos = document.body.scrollTop;

function startscroll()
{
	currentpos = window.scrollY;
	scrolling = false;
	scrolldir = true;
    document.body.style.cursor = "s-resize" ;
	timer=setInterval ("scrollwindow()",20);
}

function scrollwindow()
{
  	if(scrolldir) 
	    window.scroll(0,++currentpos);
 	else
      	window.scroll(0,--currentpos);
	if (!scrolling && currentpos >= document.body.scrollHeight - 600) {
		clearInterval(timer);
		currentpos = 0;
		window.scroll(0, 0);
    	setTimeout("window.location.reload()",1000);
    	//scrolldir = false;
	//} else if (currentpos < 0) {
	//	scrolldir = true;
	}
} 

function stopscroll()
{
	scrolling = true;
	clearInterval(timer);
	document.body.style.cursor = "default" ;
}

function pauseorcontinue()
{
	if(scrolling)
		startscroll();
	else 
		stopscroll();
}
