function Course(){
    let name = "Szymon";
    let Teacher ="Kowalski";
    let hours = 25;
    let completed = false;
    

    return(
        <section>
            <h2>Komponent karty kursu</h2>
            <p>Imie: {name}</p>
            <p>Nauczyciel: {Teacher}</p>
            <p>Godziny: {hours}</p>
            <p>Minuty: {hours * 60}</p>
            <p>Ukończony: {"Tak" ? completed : "Nie"}</p>
        </section>
    )
}

export default Course;