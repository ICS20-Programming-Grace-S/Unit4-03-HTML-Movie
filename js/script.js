// Created by: Grace S
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays a response based on the guessed number
 */
function displayCelsius () {
  // initialize variables
  let response = ""
	const MIN= 15
  const MIN_TEMP = -50
  const MAX = 50
  
	// get user input for degrees celsius
	let degCelsius = parseInt(document.getElementById('degCelsius').value)


  // determine the response based on the guessed number
	if (degCelsius >= MAX) {
    response = " Something is off... either glaciers are disappearing or you're a liar!!!!!!!!!! "

  } else if (degCelsius <= MIN_TEMP){
    response =" It’s extremely cold outside. Are you sure you're still alive? "

  }  else if (degCelsius >= MIN) {
		response = " It is going to be a hot day!!! Wear sunglasses and light outerwear. "
  }
	//if not says incorrect	
	else  {
		response = " It is going to be a cold day!!! Wear a jacket or sweater. "
	}
  
  // display the results
  document.getElementById('resultsCelsius').innerHTML = response
}