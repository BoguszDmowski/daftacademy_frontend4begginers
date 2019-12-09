const pagehamburger = document.querySelector('.page-hamburger');
    const navigationitems = document.querySelector('#nawigacja');
    
    pagehamburger.addEventListener('click', () => {
    
      navigationitems.classList.toggle('page-navigationdwa');
    
    });
    
    /////Próowałem na wiele sposobów zastąpić button innym elementem zaiwerajacym tekst ale nic nie działało, zostawiłem ten kawałek kodu bo wydaje mi się że był najbliżej usunięcia buttona :P/////
    
    //const ticket1 = document.querySelector('#ticket1');
    //const info = document.createElement('span');
    //ticket1.addEventListener('click', () => {
    //info.innerHTML = 'Miłej Zabawy!';
    //ticket1.parentNode.replaceChild(ticket1, info);
    //})
    
    ///////////
    
    const ticket01 = document.querySelector('#ticket1');
    
    console.log(ticket01.textContent);
    console.log(ticket01.innerText); 
    
    ticket01.addEventListener('click', () => { 
      ticket01.textContent = 'Miłej zabawy!';
      ticket01
    })
    const ticket02 = document.querySelector('#ticket2');
    
    console.log(ticket02.textContent);
    console.log(ticket02.innerText); 
    
    ticket02.addEventListener('click', () => { 
      ticket02.textContent = 'Miłej zabawy!';
    })
    const ticket03 = document.querySelector('#ticket3');
    
    console.log(ticket03.textContent);
    console.log(ticket03.innerText); 
    
    ticket03.addEventListener('click', () => { 
      ticket03.textContent = 'Miłej zabawy!';
    })
    const ticket04 = document.querySelector('#ticket4');
    
    console.log(ticket04.textContent);
    console.log(ticket04.innerText); 
    
    ticket04.addEventListener('click', () => { 
      ticket04.textContent = 'Miłej zabawy!';
    })
    
    
    
    const contact = document.querySelector('.button--contact');
    contact.addEventListener('click', () => {
      
      FormData(A)
    })
    
    
    const form = document.getElementById('myform');	
    
    form.addEventListener('submit', logSubmit);	
    
    function logSubmit(event) {	
      
      var formData = new FormData(form);	
      
      var objectBuiltFromFormData = Object.fromEntries(formData.entries());	
      console.dir(objectBuiltFromFormData); 
      
      event.preventDefault();
    }
