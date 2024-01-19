import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

describe("Gretting component", () => {
    test("Check initial text", () => {
        // Arrange
        render(<Greeting />);

        // Act
        // nothing in this case

        // Assert
        const text = screen.getByText("initial text", { exact: false }); //(/Initial text/i);
        expect(text).toBeInTheDocument();
    });

    test("Check text after click the button", () => {
        // Arrange
        render(<Greeting />)

        // Act
        const button = screen.getByRole('button');
        userEvent.click(button);

        // Assert
        const text = screen.getByText(/changed!/i);
        expect(text).toBeInTheDocument();
    });

    test("Initial text should not exist after click de button", () => {
        // Arrange
        render(<Greeting />);

        // Act
        const button = screen.getByRole('button');
        userEvent.click(button);

        // Assert
        const text = screen.queryByText(/initial text/i)
        expect(text).toBeNull();
        // expect(text).not.toBeInTheDocument(); // this also works
    });
});
