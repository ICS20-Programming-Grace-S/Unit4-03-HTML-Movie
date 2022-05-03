// Created by: Grace S
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a response based on the guessed number
 */
function displayAge () {
  // initialize variables
  let response = ""
	const MIN_R = 18
  const MIN_PG_13 = 13
  const MIN_G = 10
  
	// get user input for degrees celsius
	let age = parseInt(document.getElementById('age').value)


  // determine the response based on the guessed number

  if (age >= 0) {
   if (age == 0) {
    response= "Oops looks like you can't input zero."
    
    } else if (age >= MIN_R) {
      response = " You can see an R rated movie. "
  
    } else if (age >= MIN_PG_13){
      response =" You can see PG-13 movie. "
  
    }  else if (age >= MIN_G) {
  		response = " You can see a G or PG movie. "
    }
  	//if not says incorrect	
    else {
      response = " You are not old enough to see a movie alone. "
    }
  } else {
    response = " Did you think not inputting your age was a witty idea? Try again. "
  }
  
  // display the results
  document.getElementById('resultAge').innerHTML = response
}