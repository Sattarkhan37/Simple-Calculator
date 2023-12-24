let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }        
        else if (e.target.innerHTML === '%') {
            string += '/100'; // Adding /100 for percentage calculation
            document.querySelector('input').value = string;
          } 
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
})