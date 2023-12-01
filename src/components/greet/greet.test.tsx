import { render, screen } from "@testing-library/react"
import { Greet } from "./greet"

test("Greet renders correctly", () => {
    render(<Greet/>)
    const textElement = screen.getByText("Greet Their Bro...");
    expect(textElement).toBeInTheDocument();
})

test("Greet with name is good!!", () => {
    render(<Greet name= "abc"/>)
    const textElement = screen.getByText("Greet Their abc Bro...");
    expect(textElement).toBeInTheDocument();
})