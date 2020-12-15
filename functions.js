function displayInfo(name)
{
    var parent = document.getElementById(name);
    parent.style.display="block";
    document.getElementById('player').style.display = "none";
    document.getElementById('shark').style.display = "none";
    var children = parent.children;
    for(i=0;i<children.length;i++)
    {
    	if(children[i].className == "detailContent")
    	{
    		if (children[i].offsetHeight < children[i].scrollHeight)
    		{
    			for(j=0;j<children.length;j++)
    			{
    				if(children[j].className == "detailScroller")
    				{
    					children[j].style.display="block";
    				}
    			}
    		}
    	}
    }
}
function hideInfo(name)
{
    document.getElementById(name).removeAttribute("style");
    document.getElementById('player').style.display = "block";
    document.getElementById('shark').style.display = "block";
    document.getElementById('shark').style.top = "";
}
function lunch()
{
    window.alert("!!!The stingray ate your Turtle!!!");
}
function startGame(){
	document.getElementsByClassName('printer')[0].style.display="block";
    document.getElementById('howToBG').style.display ="none";
    init();
};
    
function init() {
	if (window.Event) {
	document.captureEvents(Event.MOUSEMOVE);
	}
	document.onmousemove = getCursorXY;
	document.click = getCursorXY;
}

function getCursorXY(e) {
	if($(window).innerWidth() >= 500)
	{
	    var player = document.getElementById('playerMover');
	    var halfheight = ($('#playerMover').height())/2;
	    var halfwidth = ($('#playerMover').width()) / 2;
	    var mouseX = ((window.Event) ? e.pageX : event.clientX);
		var mouseY = ((window.Event) ? e.pageY : event.clientY);
		var turtleX = $('#playerMover').position().left + halfwidth;
		var turtleY = $('#playerMover').position().top + halfheight;
		var deltaY = mouseY - turtleY;
		var deltaX = mouseX - turtleX;
		var radians = Math.atan2(deltaX,deltaY);
	    var degree = (radians * (180 / Math.PI) * -1) + 90;
	    document.getElementById('playerRotator').style.transform = "rotate(" + degree + "deg)";
		player.style.left = (((window.Event) ? e.pageX : event.clientX) - halfwidth) +'px';
		player.style.top = (((window.Event) ? e.pageY : event.clientY) - halfheight) +'px';
		var shark = document.getElementById('sharkMover');
	    var halfheight = ($('#sharkMover').height())/2;
	    var halfwidth = ($('#sharkMover').width()) / 2;
	    var sharkX = $('#sharkMover').position().left + halfwidth;
	    var sharkY = $('#sharkMover').position().top + halfheight;
	    var deltaY = mouseY - sharkY;
	    var deltaX = mouseX - sharkX;
	    var radians = Math.atan2(deltaX,deltaY);
	    var degree = (radians * (180 / Math.PI) * -1) + 90;
	    document.getElementById('sharkRotator').style.transform = "rotate(" + degree + "deg)";
	    shark.style.left = (((window.Event) ? e.pageX : event.clientX) - halfwidth) +'px';
	    shark.style.top = (((window.Event) ? e.pageY : event.clientY) - halfheight) +'px';
	    if($(window).innerWidth() >= 600){
	    	$('#body').ripples({dropRadius:10,perturbance:0.005,imageURL:"coralReef.jpg",resolution:450});
	    }
	}
};
function moveBubbles(){
    var bubbles = document.getElementsByClassName("bubbles");
    var i;
    var bubbleX = $('.bubbles').width();
    var bubbleY = $('.bubbles').height();
    var maxX = $('body').width() - bubbleX;
    var maxY = $('body').height() - bubbleY;
    for(i = 0; i < (bubbles.length); i++)
    {
        bubbles[i].style.top = (Math.floor(Math.random() * maxY) + 0) + "px";
        bubbles[i].style.left = (Math.floor(Math.random() * maxX) + 0) + "px";
        bubbles[i].style.display = "block";
    }
}
function moveJellyfish(){
    var jellyfish = document.getElementsByClassName("jellyfish");
    var i;
    var jellyfishX = $('.jellyfish').parent().parent().width();
    var jellyfishY = $('.jellyfish').parent().parent().height();
    var halfheight = ($('.jellyfish').parent().parent().height())/2;
    var halfwidth = ($('.jellyfish').parent().parent().width()) / 2;
    var maxX = $('body').width() - jellyfishX;
    var maxY = $('body').height() - jellyfishY;
    for(i = 0; i < (jellyfish.length); i++)
    {
        var currentX = $('.jellyfish').parent(i).parent(i).position(i).left;
	    var currentY = $('.jellyfish').parent(i).parent(i).position(i).top;
        var randX = (Math.floor(Math.random() * maxY) + 0);
        var randY = (Math.floor(Math.random() * maxX) + 0);
        var deltaX = (randX - currentX);
        var deltaY = (randY - currentY);
        var radians = Math.atan2(deltaX,deltaY);
        var degree = (radians * (180 / Math.PI) * -1) + 90;
        jellyfish[i].parentElement.style.transform = "rotate(" + (degree) + "deg)";
        jellyfish[i].parentElement.parentElement.style.top = randX + "px";
        jellyfish[i].parentElement.parentElement.style.left = randY  + "px";
        jellyfish[i].parentElement.parentElement.style.display = "block";
    }
}
function flashReturnToSea(){
	var element = document.getElementsByClassName('returnToSea');
	for(i=0;i<element.length;i++)
	{
		if(element[i].style.backgroundColor == "yellow")
		{
			element[i].style.backgroundColor = "";
		}
		else
		{
			element[i].style.backgroundColor = "yellow"
		}
	}
}
function snackbar(detail,timeout){
	var container = document.getElementById('snackbarContainer');
	var snackbar = document.getElementById('snackbar');
	if(container.style.display == "none")
	{
		container.style.display = "block";
		setTimeout(function(){container.style.display = "none";},timeout);
	}
	else
	{
		container.style.display = "none";
	}
	snackbar.innerText = detail;
}