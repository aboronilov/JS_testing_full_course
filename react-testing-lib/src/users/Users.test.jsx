import Users from "./Users";
import axios from "axios";
import { render, screen, fireEvent } from '@testing-library/react';

jest.mock("axios");

describe("TEST USERS", () => {
  let response;
  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: "Leanne Graham",
        },
        {
          id: 2,
          name: "Ervin Howell",
        },
        {
          id: 3,
          name: "Clementine Bauch",
        },
      ],
    };
  });
  test("users fetching", async () => {
    axios.get.mockReturnValue(response)
    render(<Users />);
    const users = await screen.findAllByTestId("user-item")
    expect(users.length).toEqual(3)
  });
});
