import React from "react";



let dateCourante = new Date;
let tempsJS = dateCourante.getTime();
let localDate = tempsJS*1000;




export default class App extends React.Component{

  render(){
    return(
      <p>
      Date d'aujourd'hui et heure: {dateCourante.getDate()}/{dateCourante.getMonth()+1}/{dateCourante.getFullYear()} {dateCourante.getHours()}:{dateCourante.getMinutes()}:{dateCourante.getSeconds()}
      </p>
    )
  }
}
