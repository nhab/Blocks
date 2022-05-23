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
