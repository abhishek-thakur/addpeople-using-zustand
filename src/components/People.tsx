import { UseAppStore } from "../store";

export const People = () => {
    const people = UseAppStore(state => state.people);
    return(
        <div>
            <p>we have {people.length} people</p>
            <ul>
                {people.map(p=>(
                    <h3>{p}</h3>
                ))}
            </ul>
        </div>
    )
}