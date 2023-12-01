import { propType } from "./greet.types"

export const Greet = (props: propType) => {
    return (
        <div>
            Greet Their {props.name} Bro...
        </div>
    )
}