import Menu from "../components/Menu";
import Person from "../components/Person";

export default function Home () {
    return (
        <>
            <h2>About</h2>
            <Menu />
            <Person name="Eric" showDescription={true} />
            <Person />
        </>
    );
}

