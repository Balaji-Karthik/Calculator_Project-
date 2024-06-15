let input = document.getElementById('input-box');
let buttons = document.querySelectorAll('button');
let string = "";
let ary = Array.from(buttons);


ary.forEach(button => {
    button.addEventListener('click', (e) =>{ //e is event
        if(e.target.innerHTML == '='){
            string = eval(string); //evl() It will evaluate the function which was entered
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
                string = string.substring(0, string.length-1);
                input.value = string;
        }
        else if(e.target.id == 'square'){
                let noof = parseFloat(string);
                string = (noof * noof).toString();
                input.value = string;           
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})


