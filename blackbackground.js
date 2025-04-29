function applyMode(mode) {
    if (mode === 'dark') { //if the page is currently dark then 
      document.body.style.backgroundColor = 'black';  //background color is black
      document.body.style.color = 'white'; //text color is white
      document.getElementById('modeToggle').textContent = 'Switch to Light Mode'; //the button reads switch to light mode
    } else {
      document.body.style.backgroundColor = 'white'; //otherwise the background is white    
      document.body.style.color = 'black'; // the text color is black
      document.getElementById('modeToggle').textContent = 'Switch to Dark Mode'; // the button reads switch to dark mode
    }
    localStorage.setItem('background', mode); // the user prefernce is stored in local storage
  }
  
  function toggleMode() { // this function is called when the button is clicked
    const currentMode = localStorage.getItem('background') === 'dark' ? 'dark' : 'light'; // checks what is currently stored in localstorage using the key background which was stored in line 11. 
                                                                                        // The ? : here is the ternary operator — a short way of writing an if-else statement. 
                                                                                        // IF it equals dark then current mode is set to dark otherise it defaults to light.
    const newMode = currentMode === 'dark' ? 'light' : 'dark'; //if we are currenly in dark then new mode becomes light and vise versa
    applyMode(newMode); //calls the apply mode function makes the changes necessaru made on the mode being changed in this function.
  }
  
  function init() {
    const savedMode = localStorage.getItem('background') || 'light'; //checks to see if thers a saved mode in localStorage under the key background, if there is not it defaults to light.
    applyMode(savedMode); //applys the saved mode that is in storage. this is for when you are switching pages on your site and want to keep the background you had before.
    document.getElementById('modeToggle').addEventListener('click', toggleMode);//when the button is clicked it runs the toggleMode() function which changes the modes which then calls the apply to apply the change in the mode.
  }
  
  window.onload = init;
  