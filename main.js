//Get month from user and find (winter,fall,summer)
let b=parseInt(prompt("Enter Month"));
let a=new Date();
	a.setMonth(b);
	let ses=a.getMonth();
	if(ses>=0 && ses<=3)
	{
		console.log("Summer");
	}
	else if(ses>=4 && ses<=7)
	{
		console.log("Winter");
	}
	else
	{
		console.log("Fall");
	}