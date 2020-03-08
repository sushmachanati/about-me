
console.log(9387689)

const add = (x, y) => {
    return x + y ;
  
}


const updateWithadd = async (event) => {
    
    const i = parseInt(document.querySelector('#first').value);
    const j = parseInt(document.querySelector('#second').value);
    const ans = parseInt(add(i, j));
    document.querySelector('#add').innerHTML = `Result of Adding of two numbers: ${ans}`;
  
}

document.addEventListener('click', event => {
  if (event.target && event.target.id === 'calc') { updateWithadd(event); }
});



// fetch information
const getImage = async () => {
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const obj = await response.json();
        const imag = obj.message || 'No Image for you.';
        return imag;
    } catch (error) 
    { 
      console.error(error);
     }
}
const updateWithImage = async (event) => {
    try {
        const answer = await getImage();
        document.querySelector('#ajaximg').src = answer;
    } catch (error) { 
      console.error(error);
     }
}
document.addEventListener('click', event => {
    if (event.target && event.target.id === 'ajax') { 
      updateWithImage(event);
     }
})


