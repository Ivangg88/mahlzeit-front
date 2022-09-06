import { render, screen } from "@testing-library/react";
import Loading from "./Loading";

describe("Give a loading component", () => {
  describe("When is activated", () => {
    test("Then shoud show a text 'Loading'", () => {
      const expectText = "Loading...";

      render(<Loading />);
      const textScreen = screen.getByRole("heading", { name: expectText });

      expect(textScreen).toBeInTheDocument();
    });
  });
});
