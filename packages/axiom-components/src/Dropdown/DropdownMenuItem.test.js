import React from "react";
import { shallow } from "enzyme";
import DropdownMenuItem from "./DropdownMenuItem";
import toJson from "enzyme-to-json";

const render = (props = {}, opts = {}) =>
  shallow(<DropdownMenuItem {...props}>Test</DropdownMenuItem>, opts);

describe("DropdownMenuItem", () => {
  let props;
  let opts;
  let mockEvent;

  beforeEach(() => {
    props = {
      disabled: false,
      keepOpen: false,
      multiSelect: false,
      onClick: jest.fn(),
    };
    opts = {
      context: {
        closeDropdown: jest.fn(),
      },
    };
    mockEvent = {};
  });

  describe("onClick", () => {
    it.skip("closes the dropdown menu when clicked", () => {
      render(props, opts).simulate("click", mockEvent);
      expect(opts.context.closeDropdown).toHaveBeenCalledTimes(1);
    });

    it("calls the click property with the event when clicked", () => {
      render(props, opts).simulate("click", mockEvent);
      expect(props.onClick).toHaveBeenCalledTimes(1);
      expect(props.onClick).toHaveBeenCalledWith(mockEvent);
    });

    it("does not close the dropdown when multiSelect is set", () => {
      props.multiSelect = true;
      render(props, opts).simulate("click", mockEvent);
      expect(opts.context.closeDropdown).not.toHaveBeenCalled();
    });

    it("does not close the dropdown when keepOpen is set", () => {
      props.keepOpen = true;
      render(props, opts).simulate("click", mockEvent);
      expect(opts.context.closeDropdown).not.toHaveBeenCalled();
    });
  });

  describe("Snapshots", () => {
    it("renders with defaultProps", () => {
      expect(toJson(render({}, opts))).toMatchSnapshot();
    });

    it("renders with disabled", () => {
      expect(
        toJson(
          render(
            {
              disabled: true,
            },
            opts
          )
        )
      ).toMatchSnapshot();
    });

    it("renders with index", () => {
      expect(
        toJson(
          render(
            {
              index: "1",
            },
            opts
          )
        )
      ).toMatchSnapshot();
    });

    it("renders with keepOpen", () => {
      expect(
        toJson(
          render(
            {
              keepOpen: true,
            },
            opts
          )
        )
      ).toMatchSnapshot();
    });

    it("renders with multiSelect", () => {
      expect(
        toJson(
          render(
            {
              multiSelect: true,
            },
            opts
          )
        )
      ).toMatchSnapshot();
    });

    it("renders with onClick", () => {
      expect(
        toJson(
          render(
            {
              onClick: () => {},
            },
            opts
          )
        )
      ).toMatchSnapshot();
    });

    it("renders with onMouseOver", () => {
      expect(
        toJson(
          render(
            {
              onMouseOver: () => {},
            },
            opts
          )
        )
      ).toMatchSnapshot();
    });
  });
});
