import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
    test("Render posts if succeeds", async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'First post'}],
        });
        render(<Async />);

        const elements = await screen.findAllByRole("listitem");
        expect(elements).not.toHaveLength(0);
    });
});
