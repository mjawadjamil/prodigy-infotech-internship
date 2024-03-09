function myfunc()
{
    let b1, b2, b3, b4, b5, b6, b7, b8, b9;

b1 = document.getElementById('b1').value;
b2 = document.getElementById('b2').value;
b3 = document.getElementById('b3').value;
b4 = document.getElementById('b4').value;
b5 = document.getElementById('b5').value;
b6 = document.getElementById('b6').value;
b7 = document.getElementById('b7').value;
b8 = document.getElementById('b8').value;
b9 = document.getElementById('b9').value;



let btnb1, btnb2, btnb3, btnb4, btnb5, btnb6, btnb7, btnb8, btnb9;

btnb1 = document.getElementById('b1');
btnb2 = document.getElementById('b2');
btnb3 = document.getElementById('b3');
btnb4 = document.getElementById('b4');
btnb5 = document.getElementById('b5');
btnb6 = document.getElementById('b6');
btnb7 = document.getElementById('b7');
btnb8 = document.getElementById('b8');
btnb9 = document.getElementById('b9');


// Conditionals for Player 'O'

if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
    document.getElementById('print').innerHTML = 'Player X Won';
    btnb4.disabled = true;
    btnb5.disabled = true;
    btnb6.disabled = true;
    btnb7.disabled = true;
    btnb8.disabled = true;
    btnb9.disabled = true;

    btnb1.style.color = 'red';
    btnb2.style.color = 'red';
    btnb3.style.color = 'red';

}

else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || b6 == 'X') && (b9 == 'x' || b9 == 'X')) {
    document.getElementById('print').innerHTML = 'Player X Won';
    btnb1.disabled = true;
    btnb2.disabled = true;
    btnb4.disabled = true;
    btnb5.disabled = true;
    btnb7.disabled = true;
    btnb8.disabled = true;


    btnb3.style.color = 'red';
    btnb6.style.color = 'red';
    btnb9.style.color = 'red';

}

else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
    document.getElementById('print').innerHTML = 'Player X Won';
    btnb1.disabled = true;
    btnb2.disabled = true;
    btnb3.disabled = true;
    btnb4.disabled = true;
    btnb5.disabled = true;
    btnb6.disabled = true;


    btnb8.style.color = 'red';
    btnb6.style.color = 'red';
    btnb9.style.color = 'red';

}

else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
    document.getElementById('print').innerHTML = 'Player X Won';

    btnb2.disabled = true;
    btnb3.disabled = true;
    btnb5.disabled = true;
    btnb6.disabled = true;
    btnb8.disabled = true;
    btnb9.disabled = true;


    btnb1.style.color = 'red';
    btnb4.style.color = 'red';
    btnb7.style.color = 'red';

}

else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
    document.getElementById('print').innerHTML = 'Player X Won';

    btnb2.disabled = true;
    btnb3.disabled = true;
    btnb4.disabled = true;
    btnb6.disabled = true;
    btnb7.disabled = true;
    btnb8.disabled = true;



    btnb1.style.color = 'red';
    btnb5.style.color = 'red';
    btnb9.style.color = 'red';

}

else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
    document.getElementById('print').innerHTML = 'Player X Won';

    btnb1.disabled = true;
    btnb2.disabled = true;
    btnb4.disabled = true;
    btnb6.disabled = true;
    btnb8.disabled = true;
    btnb9.disabled = true;


    btnb3.style.color = 'red';
    btnb5.style.color = 'red';
    btnb7.style.color = 'red';

}

else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
    document.getElementById('print').innerHTML = 'Player X Won';

    btnb1.disabled = true;
    btnb3.disabled = true;
    btnb4.disabled = true;
    btnb6.disabled = true;
    btnb7.disabled = true;
    btnb9.disabled = true;


    btnb2.style.color = 'red';
    btnb5.style.color = 'red';
    btnb8.style.color = 'red';

}


// Conditionals for Player 'O'

else if ((b1 == 'o' || b1 == 'O') && (b2 == 'o' || b2 == 'O') && (b3 == 'o' || b3 == 'O')) {
    document.getElementById('print').innerHTML = 'Player O Won';
    btnb4.disabled = true;
    btnb5.disabled = true;
    btnb6.disabled = true;
    btnb7.disabled = true;
    btnb8.disabled = true;
    btnb9.disabled = true;

    btnb1.style.color = 'red';
    btnb2.style.color = 'red';
    btnb3.style.color = 'red';

}

else if ((b3 == 'o' || b3 == 'O') && (b6 == 'o' || b6 == 'O') && (b9 == 'o' || b9 == 'O')) {
    document.getElementById('print').innerHTML = 'Player O Won';
    btnb1.disabled = true;
    btnb2.disabled = true;
    btnb4.disabled = true;
    btnb5.disabled = true;
    btnb7.disabled = true;
    btnb8.disabled = true;


    btnb3.style.color = 'red';
    btnb6.style.color = 'red';
    btnb9.style.color = 'red';

}

else if ((b7 == 'o' || b7 == 'O') && (b8 == 'o' || b8 == 'O') && (b9 == 'o' || b9 == 'O')) {
    document.getElementById('print').innerHTML = 'Player O Won';
    btnb1.disabled = true;
    btnb2.disabled = true;
    btnb3.disabled = true;
    btnb4.disabled = true;
    btnb5.disabled = true;
    btnb6.disabled = true;


    btnb8.style.color = 'red';
    btnb6.style.color = 'red';
    btnb9.style.color = 'red';

}

else if ((b1 == 'o' || b1 == 'O') && (b4 == 'o' || b4 == 'O') && (b7 == 'o' || b7 == 'O')) {
    document.getElementById('print').innerHTML = 'Player O Won';

    btnb2.disabled = true;
    btnb3.disabled = true;
    btnb5.disabled = true;
    btnb6.disabled = true;
    btnb8.disabled = true;
    btnb9.disabled = true;


    btnb1.style.color = 'red';
    btnb4.style.color = 'red';
    btnb7.style.color = 'red';

}

else if ((b1 == 'o' || b1 == 'O') && (b5 == 'o' || b5 == 'O') && (b9 == 'o' || b9 == 'O')) {
    document.getElementById('print').innerHTML = 'Player O Won';

    btnb2.disabled = true;
    btnb3.disabled = true;
    btnb4.disabled = true;
    btnb6.disabled = true;
    btnb7.disabled = true;
    btnb8.disabled = true;



    btnb1.style.color = 'red';
    btnb5.style.color = 'red';
    btnb9.style.color = 'red';

}

else if ((b3 == 'o' || b3 == 'O') && (b5 == 'o' || b5 == 'O') && (b7 == 'o' || b7 == 'O')) {
    document.getElementById('print').innerHTML = 'Player O Won';

    btnb1.disabled = true;
    btnb2.disabled = true;
    btnb4.disabled = true;
    btnb6.disabled = true;
    btnb8.disabled = true;
    btnb9.disabled = true;


    btnb3.style.color = 'red';
    btnb5.style.color = 'red';
    btnb7.style.color = 'red';

}

else if ((b2 == 'o' || b2 == 'O') && (b5 == 'o' || b5 == 'O') && (b8 == 'o' || b8 == 'O')) {
    document.getElementById('print').innerHTML = 'Player O Won';

    btnb1.disabled = true;
    btnb3.disabled = true;
    btnb4.disabled = true;
    btnb6.disabled = true;
    btnb7.disabled = true;
    btnb9.disabled = true;


    btnb2.style.color = 'red';
    btnb5.style.color = 'red';
    btnb8.style.color = 'red';

}


else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X' || b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
    (b4 == 'X' || b4 == 'O') && (b5 == 'X' || b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' || b8 == 'O') && (b9 == 'X' || b9 == 'O')) {

            document.getElementById('print').innerHTML = "Match Tie!";
}

else{
    // Here Printing Result
    if (flag == 1)
    {
        document.getElementById('print').innerHTML = "Player X Turn";
    }
    else{
        document.getElementById('print').innerHTML = "Player O Turn";
    }
}



}



// Function to reset the Game

const func_reset = () => {
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}

// For Checking the turn of the player
flag = 1;

function func_b1 ()
{
    if(flag == 1)
    {
        document.getElementById('b1').value = 'X';
        document.getElementById('b1').disabled = true;
        flag = 0;
    }
    else
    {
        document.getElementById('b1').value = 'O';
        document.getElementById('b1').disabled = true;
        flag = 1;
    }
}

function func_b2 ()
{
    if(flag == 1)
    {
        document.getElementById('b2').value = 'X';
        document.getElementById('b2').disabled = true;
        flag = 0;
    }
    else
    {
        document.getElementById('b2').value = 'O';
        document.getElementById('b2').disabled = true;
        flag = 1;
    }
}

function func_b3 ()
{
    if(flag == 1)
    {
        document.getElementById('b3').value = 'X';
        document.getElementById('b3').disabled = true;
        flag = 0;
    }
    else
    {
        document.getElementById('b3').value = 'O';
        document.getElementById('b3').disabled = true;
        flag = 1;
    }
}

function func_b4 ()
{
    if(flag == 1)
    {
        document.getElementById('b4').value = 'X';
        document.getElementById('b4').disabled = true;
        flag = 0;
    }
    else
    {
        document.getElementById('b4').value = 'O';
        document.getElementById('b4').disabled = true;
        flag = 1;
    }
}

function func_b5 ()
{
    if(flag == 1)
    {
        document.getElementById('b5').value = 'X';
        document.getElementById('b5').disabled = true;
        flag = 0;
    }
    else
    {
        document.getElementById('b5').value = 'O';
        document.getElementById('b5').disabled = true;
        flag = 1;
    }
}

function func_b6 ()
{
    if(flag == 1)
    {
        document.getElementById('b6').value = 'X';
        document.getElementById('b6').disabled = true;
        flag = 0;
    }
    else
    {
        document.getElementById('b6').value = 'O';
        document.getElementById('b6').disabled = true;
        flag = 1;
    }
}

function func_b7 ()
{
    if(flag == 1)
    {
        document.getElementById('b7').value = 'X';
        document.getElementById('b7').disabled = true;
        flag = 0;
    }
    else
    {
        document.getElementById('b7').value = 'O';
        document.getElementById('b7').disabled = true;
        flag = 1;
    }
}

function func_b8 ()
{
    if(flag == 1)
    {
        document.getElementById('b8').value = 'X';
        document.getElementById('b8').disabled = true;
        flag = 0;
    }
    else
    {
        document.getElementById('b8').value = 'O';
        document.getElementById('b8').disabled = true;
        flag = 1;
    }
}

function func_b9 ()
{
    if(flag == 1)
    {
        document.getElementById('b9').value = 'X';
        document.getElementById('b9').disabled = true;
        flag = 0;
    }
    else
    {
        document.getElementById('b9').value = 'O';
        document.getElementById('b9').disabled = true;
        flag = 1;
    }
}


