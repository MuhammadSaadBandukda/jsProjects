const form = document.querySelector('form')

form.addEventListener('submit' , (e) => {

  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const result = document.querySelector('#results')   
  if(height == '' || height < 0 || isNaN(height))
    result.innerHTML = `Invalid height ${height}`
  else if(weight == '' || weight < 0 || isNaN(weight))
    result.innerHTML = `Invalid weight ${weight}`
  else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if(bmi<18.6)
      guide = document.querySelector('#weight-guide p').textContent 
    else if(bmi > 24.9)
      guide = document.querySelector('#weight-guide p:last-child').textContent 
    else
    guide = document.querySelector('#weight-guide p:nth-child(3)').innerHTML
    
    result.innerHTML = `Your BMI is ${bmi} and you are ${guide}`
  
  }

  



})