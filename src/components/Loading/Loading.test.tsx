import { screen } from "@testing-library/react";
import { closeLoadingModalActionCreator } from "../../store/ui/uiSlice";
import renderWithProviders from "../../utils/testStore";
import { timer } from "../../utils/timers";
import Loading from "./Loading";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Give a loading component", () => {
  describe("When is activated", () => {
    test("Then shoud show a text 'Loading'", () => {
      const expectText = "Loading...";

      renderWithProviders(<Loading />);

      const textScreen = screen.getByRole("heading", { name: expectText });

      expect(textScreen).toBeInTheDocument();
    });

    test("Then after 500 miliseconds, the feedback should be close", () => {
      jest.useFakeTimers();
      renderWithProviders(<Loading />);
      jest.advanceTimersByTime(timer.close);

      expect(mockDispatch).toHaveBeenCalledWith(
        closeLoadingModalActionCreator()
      );
    });
  });
});
