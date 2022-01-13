

function validateForm() 
{

    let x = document.forms["regex_form"]["regular_exp"].value;
    if (x == "") {
      alert("REGULAR EXPRESSION must be filled out");
      return false;
    }

    let y = document.forms["regex_form"]["exp_string"].value;
    if (y == "") {
      alert("STRING must be filled out");
      return false;
    }
    else
    {
        takeDataToVariable();
    }

}

function validateForm_2() 
{
    let x = document.forms["regex_form"]["regular_exp"].value;
    if (x == "") {
      alert("REGULAR EXPRESSION must be filled out");
      return false;
    }

    let y = document.forms["regex_form"]["exp_string"].value;
    if (y == "") {
      alert("STRING must be filled out");
      return false;
    }
    else
    {
        testFunction();
    }

}


function testFunction()
{
    let regular_text = document.getElementById("regular_exp").value;
    let regex = document.getElementById("exp_string").value;

        //for getting input from function drop-down menu
    let regex_function = document.getElementById("function").value;

        //making temp variable a REGEXP 
    let temp = new RegExp(regex);

    if(regex_function == 'select_function')
    {
        alert("Please Select a FUNCTION from the drop-down menu")
    }

    

    if(regex_function == 'test')
    {
        document.getElementById("data3").innerHTML = "Result of test() function in REGEX ->";
        if(temp.test(regular_text))
        {
            document.getElementById("data2").innerHTML = "TRUE";
        }
        else
        {
            document.getElementById("data2").innerHTML = "FALSE";
        }
    }

    if(regex_function == 'search')
    {
        document.getElementById("data3").innerHTML = "Result of search() function in REGEX -> ";
        let return_search = regular_text.search(temp);
        document.getElementById("data2").innerHTML = return_search;    
        
    }

    if(regex_function == 'match')
    {
        document.getElementById("data3").innerHTML = "Result of match() function in REGEX -> ";
        let return_value = regular_text.match(temp);
        if(return_value != null)
        {
            document.getElementById("data2").innerHTML = return_value;
        }
        else
        {
            document.getElementById("data2").innerHTML = 'null';
        }
    }

}





function takeDataToVariable()
{
    let regular_text = document.getElementById("regular_exp").value;
    let regex = document.getElementById("exp_string").value;
    // document.getElementById("data").innerHTML = regular_text;
    console.log("regex ->" +regex);


    let flag = document.getElementById("flag").value;

        // initializing a temp variable to make it REGEXP 
    let temp;

    console.log("flag ->" + flag );
    console.log("temp ->" + temp );

    if(flag == 'select')
    {
        alert("Please select a FLAG from the drop-down menu")
        temp = new RegExp(regex);
    }
    else if(flag == 'no' )//|| flag == 'y')
    {
        temp = new RegExp(regex);
        console.log("inside else if ->"+temp);
    }
    else
    {
        temp = new RegExp(regex, flag);
        console.log("else  ->" + temp);
    }
        
    
    let result = temp.exec(regular_text);

    console.log("result -> " + result);

    let result_2;



    if(result !== null)
    {

        if(flag == 'no')
        {
            result_2 = regular_text.replace(new RegExp(regex), (match) => `<mark>${match}</mark>`);
            document.getElementById("data").innerHTML = result_2;
        }

        else
        {
            result_2 = regular_text.replace(new RegExp(regex, flag), (match) => `<mark>${match}</mark>`);
            document.getElementById("data").innerHTML = result_2;
        }
        console.log("result_2 ->" + result_2);

    }
    else if(result == null)
    {

        if(flag == 'y')
        {
            // temp.lastIndex = 8;
            let stickyy = temp.sticky;
            console.log("sticky ->" + stickyy);
            document.getElementById("data").innerHTML = stickyy;
        }


        else
        {
            document.getElementById("data").innerHTML = "NOT FOUND";
            console.log("NOT FOUND");

        }

    }   

}
