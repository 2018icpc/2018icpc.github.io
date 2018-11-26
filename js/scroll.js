
window.onload = startscroll

function startscroll()
{
	for(var i=0;i<document.getElementById("board").rows[0].cells.length;i++)
   {
        document.getElementById("header").rows[0].cells[i].width=document.getElementById("board").rows[0].cells[i].offsetWidth;
   }
}

