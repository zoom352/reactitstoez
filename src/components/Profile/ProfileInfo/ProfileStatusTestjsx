import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
      const component = create(<ProfileStatus status="im here" />);
      const instance = component.getInstance();
      expect(instance.state.text).toBe("");
    });
    test("after creation span should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="im here" />);
        const instance = component.getInstance();
        let span = instance.findByType('span');
        expect(span).not.toBeNull();
      });
      test("after creation input shouldnt be displayed with correct status", () => {
        const component = create(<ProfileStatus status="im here" />);
        let root = component.root;
        expect(() => {
            let input = root.findByType('input');
        }).toThrow();
      });
      test("after creation span should be displayed with correct status", () => {
        const component = create(<ProfileStatus status="im here" />);
        const root = component.root;
        let span = root.findByType('span');
        expect(span.children[0]).toBe('imhere');
      });
  });