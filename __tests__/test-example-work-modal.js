import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';

const myExample = {
  'title': 'Hugo Example',
  'href': 'http://example.com',
  'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'image': {
    'desc': 'Hugo generated static site',
    'src': 'images/example2.png',
    'comment': ''
  }
};

describe("ExampleWorkModal component", () => {
  let component = shallow(<ExampleWorkModal example={myExample} open={false} />);
  let openComponent = shallow(<ExampleWorkModal example={myExample} open={true} />);

  let anchors = component.find("a");
  it("Should contain a single anchor tag", () => {
    expect(anchors.length).toEqual(1);
  });
  it("Should link to our project", () => {
    expect(anchors.node.props.href).toEqual(myExample.href);
  });
  it("Should have modal openness", () => {
    expect(component.find(".background--brickRed").hasClass("modal--closed")).toBe(true);
    expect(openComponent.find(".background--brickRed").hasClass("modal--open")).toBe(true);
  });
});
