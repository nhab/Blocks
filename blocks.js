function toggle(el){
	if(el.value=='-')
	{
		el.value='+';
		el.parentElement.nextElementSibling.style.display='none';
	}
	else
	{
		el.value='-';
		el.parentElement.nextElementSibling.style.display='block';
	}
}

function toggleAll(btn){
	if(btn.value=='-')
		btn.value="+"
	else
		btn.value="-";
	var elements = document.getElementsByTagName('input');

for (var i = 0; i < elements.length;i++) {
		if	(elements[i].type="button")	
			toggle(elements[i]);
	}

}

function AddToggleButtons(){
	var childDivs = document.getElementsByTagName('h2');

	for( i=0; i< childDivs.length; i++ )
	{
		var childDiv = childDivs[i];

		const para = document.createElement("input");
		para.setAttribute("value","-");
		para.setAttribute("type","button");
		para.setAttribute("onclick","toggle(this)");
		para.setAttribute("class","toggleButton");
		childDiv.prepend(para);
	}
}

function AddToggleButtonsToH2andH3(){
	for(j=2;j<=3;j++)
	{
		var childDivs = document.getElementsByTagName('h'+j.toString());

		for( i=0; i< childDivs.length; i++ )
		{
			var childDiv = childDivs[i];

			const para = document.createElement("input");
			para.setAttribute("value","-");
			para.setAttribute("type","button");
			para.setAttribute("onclick","toggle(this)");
			para.setAttribute("class","toggleButton");
			childDiv.prepend(para);
		}
	}
}

function ReplaceLtGt(){
    len=$("code").length;
    for(i=0;i<len;i++)
    {
	    if($("code").eq(i)[0]==undefined) return;
        s=$("code").eq(i)[0].innerHTML
        s=s.replaceAll("<"," < ")
        s=s.replaceAll("&lt;","<")
        //s=s.replaceAll("&gt;",">")
        //s=s.replaceAll("&amp;","&")
        
        $("code").eq(i).text( s)
    }
}

//n can be 3 or 4
function AddToggleButtonsToH(n)
{
	for(j=2;j<=n;j++)
	{
		var childDivs = document.getElementsByTagName('h'+j.toString());

		for( i=0; i< childDivs.length; i++ )
		{
			var childDiv = childDivs[i];

			const para = document.createElement("input");
			para.setAttribute("value","-");
			para.setAttribute("type","button");
			para.setAttribute("onclick","toggle(this)");
			para.setAttribute("class","toggleButton");
			childDiv.prepend(para);
		}
	}
}
