var divs = new Array();

divs[0] = "errUname";
divs[1] = "errpassword";

function validate()
{
    var inputs = new Array();

	inputs[0] = document.getElementById('Uname').value;
	inputs[1] = document.getElementById('pass').value;
	
	var errors = new Array();

	errors[0] = "<span style='color:red'>Please enter your user name!</span>";
	errors[1] = "<span style='color:red'>Please enter your password!</span>";
	
	for (i in inputs)
    {
	    var errMessage = errors[i];
	   	var div = divs[i];

	   	if (inputs[i] == "")
	        document.getElementById(div).innerHTML = errMessage;
	        
	    else if (i==1)
	    {
	    	var atpos=inputs[i].indexOf("@");
	        var dotpos=inputs[i].lastIndexOf(".");

	       	if (atpos==0 || dotpos<atpos || dotpos>=inputs[i].length)
    	       	document.getElementById('errpass').innerHTML = "<span style='color: red'>Enter a password!</span>";
       		else
           		document.getElementById(div).innerHTML = "OK!";

       	}
    	else if (i==1)
        {
          	var first = document.getElementById('Uname').value;
         	var second = document.getElementById('password').value;

            if (second != first)
                document.getElementById('errpass').innerHTML = "<span style='color: red'>Your password is incorrect!</span>";
			else
                document.getElementById(div).innerHTML = "OK!";
        }
       	
	else
            document.getElementById(div).innerHTML = "OK!";
        }
}

function finalValidate()
{
    var count = 0;

    for(i=0;i<1;i++)
    {
	    var div = divs[i];

	    if(document.getElementById(div).innerHTML == "OK!")
           count = count + 1;
    }
   	if(count == 1)
	    document.getElementById("errFinal").innerHTML = "All the data you entered is correct!!!";
}