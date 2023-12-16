import Person from "./Person.jsx";
import { useEffect, useState } from "react";

export default function PersonController(){
    const [person, setPerson] = useState(null);

    async function getPerson() {
      try {
        const response = await fetch("https://www.randomuser.me/api?results=1");
        const data = await response.json();
        setPerson({name:data.results[0].name.first,lastName:data.results[0].name.last, email: data.results[0].email });
      } catch (error) {
        console.error(error);
      }
    }
  
    useEffect(() => {
      getPerson();
    }, []);

    return(
        <Person person={person}/>
    )
}