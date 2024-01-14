// window.alert("hi")

/* hello world */

/* 
  What do we need to do? - when clicking on the character button in the list, we need to mark the button as selected and show the corresponding character

  OBJECTIVE 1 - when clicking on the character button in the list, mark the button as selected
    Step 1 - get the buttons in JS to check when the user clicks on one of them
    Step 2 - add the "selected" class to the button the user clicked on
    Step 3 - check if there is already a selected button, if yes, we should remove its selection

  OBJECTIVE 2 - when clicking on the character button, show the character information
    Step 1 - get the characters in JS to show or hide them
    Step 2 - add the "selected" class to the character the user selected
    Step 3 - check if there is already a selected character, if yes, we should remove its selection
*/

// document.getElementById("cat");

// const, let, var
// console.log()

const buttons = document.querySelectorAll(".button");
const characters = document.querySelectorAll(".character");

buttons.forEach((button, index) => {
	button.addEventListener("click", () => {
		deselectButton();
		deselectCharacter();

		button.classList.add("selected");
		characters[index].classList.add("selected");
	});
});

function deselectCharacter() {
	const selectedCharacter = document.querySelector(".character.selected");
	selectedCharacter.classList.remove("selected");
}

function deselectButton() {
	const selectedButton = document.querySelector(".button.selected");
	selectedButton.classList.remove("selected");
}