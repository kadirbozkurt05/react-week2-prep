export default function Person({person}){
    return(
        <>
        {person ? (
          <ul>
            <li>First Name: {person.name}</li>
            <li>Last Name: {person.lastName}</li>
            <li>Email: {person.email}</li>
          </ul>
        ) : (
          <p>Data is Loading...</p>
        )}
      </>
    )
}