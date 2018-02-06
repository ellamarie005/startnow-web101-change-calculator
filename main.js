// Write your JavaScript here


function handleClickEvent () {
    var due = $('#amount-due').val();
    var rec = $('#amount-received').val();
    var change = (rec-due).toFixed(2);

    $('#total-change').html('Your Change Is $ ' + change);

    
        var dollarChange = change / 1.00;
        var dollarRemainder = change % 1.00;
        $('#dollars-output').text(Math.floor(dollarChange));

        var quarterChange = dollarRemainder / 0.25;
        var quarterRemainder = dollarRemainder % 0.25;
        $('#quarters-output').text(Math.floor(quarterChange));

        var dimesChange = quarterRemainder / 0.10;
        var dimesRemainder = quarterRemainder % 0.10;
        $('#dimes-output').text(Math.floor(dimesChange));

        var nickelChange = dimesRemainder/ 0.05;
        var nickelRemainder = dimesRemainder % 0.05;
        $('#nickels-output').text(Math.floor(nickelChange));

        var penniesChange = nickelRemainder / 0.01;
        $('#pennies-output').text(Math.round(penniesChange));
        
        

    

    

    
    /*var due = document.getElementById('amount-due').value;
    var rec = document.getElementById('amount-received').value;
    var result = (rec - due).toFixed(2);
    
    var dollars = parseInt(result);
    var dollarsChange = change%1;
     dollarsChange=Math.round(dollarsChange*=100);*/


}



