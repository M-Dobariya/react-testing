type propType = {
    name?: string
}

export const Greet = (props: propType) => {
    return (
        <div>
            Greet Their {props.name} Bro
        </div>
    )
}