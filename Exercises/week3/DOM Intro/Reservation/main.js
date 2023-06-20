"use strict";
const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
    
}


const checkReservation = function() {

const name = document.getElementById("name")
const reservationName = name.value
const reservationKey =  reservationName.toLowerCase();

if (reservations[reservationKey]) {
    if (!reservations[reservationKey].claimed) {
        alert("Welcome, " + reservationName)
        console.log("Welcome, " + reservationName)
    }
    else {
        alert(reservationName + ", Hmm, someone already claimed this reservation")
        alert(reservationName + ", Hmm, someone already claimed this reservation")
    }
}
else {
    alert(reservationName + ", there is nothing under your name")
    reservations[reservationKey] = {claimed: true}
    alert("But we have a table for you")
}
}

const button =document.getElementById("button")
button.onclick = checkReservation