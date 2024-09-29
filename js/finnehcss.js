/**
 * Toggles the active class on the hamburger icon and the navigation menu.
 * This is for the event listener on the hamburger icon to change the state of the navigation menu.
 */
export function toggleNav () {
    const hamburger = document.querySelector('#hamburger')
    const navMenu = document.querySelector('#nav-panel')
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
  }
  
  /**
   * Initialises the navigation bar by adding an event listener to the hamburger icon.
   * This is to toggle the active class on the navigation menu when the hamburger icon is clicked.
   */
  export function navInit () {
    const hamburger = document.querySelector('#hamburger')
    hamburger.addEventListener('click', toggleNav)
  }

  window.onload = function(){
    navInit()
  }
