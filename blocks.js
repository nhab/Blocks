function toggle(el)
{
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

function toggleAll(btn)
{
	if(btn.value=='-')
		btn.value="+"
	else
		btn.value="-";
	var elements = document.getElementsByTagName('input');

	for (var i = 0; i < elements.length; i++) {
		if	(elements[i].type="button")	
			toggle(elements[i]);
	}

}