

function regex_test_function(regex, flag, regular_text)
{
    if(flag == '')
    {
        flag = 'g';
    }

    let regex_2 = new RegExp(regex, flag);

    return regex_2.test(regular_text);    
}
module.exports =  regex_test_function;