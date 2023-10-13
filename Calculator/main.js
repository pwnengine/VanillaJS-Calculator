import './style.css'

let curr_calc  = 0;
let first_val  = 0;
let second_val = 0;
let first_check = true; //  check if we use the first value 

let operation = '';

const calc_element = document.querySelector('#calculation');

function get_digit(class_list) {
  if(class_list.contains('num-0')) {
    return '0';
  }
  else if(class_list.contains('num-1')) {
    return '1';
  }
  else if(class_list.contains('num-2')) {
    return '2';
  }
  else if(class_list.contains('num-3')) {
    return '3';
  }
  else if(class_list.contains('num-4')) {
    return '4';
  }
  else if(class_list.contains('num-5')) {
    return '5';
  }
  else if(class_list.contains('num-6')) {
    return '6';
  }
  else if(class_list.contains('num-7')) {
    return '7';
  }
  else if(class_list.contains('num-8')) {
    return '8';
  }
  else if(class_list.contains('num-9')) {
    return '9';
  }
}

function handle_click(elmt) {
  const class_list = elmt.classList;
  if(!(class_list.contains('op-plus') || class_list.contains('op-sub') || class_list.contains('op-equal') || class_list.contains('op-mult') || class_list.contains('op-div') || class_list.contains('op-clear'))) {
    const add_digit = get_digit(class_list);
    first_check ? first_val = String(first_val) + add_digit : second_val = String(second_val) + add_digit;
    console.log(first_val + '+' + second_val);
    return;
  } 

  // if we made it this fall then we are pressing something other than digit buttons
  if(second_val == 0) {
    first_check = false;
  }    
  
  if(class_list.contains('op-plus')) {
    operation = 'addition';
  } 
  else if(class_list.contains('op-sub')) {
    operation = 'subtraction';
  } 
  else if(class_list.contains('op-mult')) {
    operation = 'multiplication';
  }
  else if(class_list.contains('op-div')) {
    operation = 'division';
  }
  else if(class_list.contains('op-clear')) {
    first_check = true;
    first_val = 0;
    second_val = 0;
    curr_calc = 0;
    operation = '';

    calc_element.innerHTML = `
      ${first_val}
    `;
  }
  else {
    first_check = true;
    if(operation === 'addition') {
      curr_calc = (Math.floor(first_val) + Math.floor(second_val));
    }
    else if(operation === 'subtraction') {
      curr_calc = Math.floor(first_val) - Math.floor(second_val);
    }
    else if(operation === 'multiplication') {
      curr_calc = Math.floor(first_val) * Math.floor(second_val);
    }
    else if(operation === 'division') {
      curr_calc = Math.floor(first_val) / Math.floor(second_val);
    }
    console.log('curr calc ' + curr_calc);
    
    first_val = curr_calc;
    second_val = 0;

    calc_element.innerHTML = `
      ${first_val}
    `;
  }

  
}

const btn_element_array = document.querySelectorAll('.btn');
btn_element_array.forEach((element_obj) => {
  element_obj.addEventListener('click', () => handle_click(element_obj));  
});


