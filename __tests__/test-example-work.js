import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';
import ExampleWorkModal from '../js/example-work-modal';

const myWork = [
  {
    'title': 'Work Example',
    'href': 'https://example.com',
    'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'image': {
      'desc': 'example screenshot of a project involving code',
      'src': 'images/example1.png',
      'comment': ''
    }
  },
  {
    'title': 'Hugo Example',
    'href': 'https://example.com',
    'desc': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    'image': {
      'desc': 'Hugo generated static site',
      'src': 'images/example2.png',
      'comment': ''
    }
  }
];

describe("ExampleWork component", () => {

  let component = shallow(<ExampleWork work={myWork} />);

  it("Should be span element", () => {
    expect(component.type()).toEqual('span');
  });

  it("Should contain as many children as there are work examples", () => {
    expect(component.find('ExampleWorkBubble').length).toEqual(myWork.length);
  });

  it("Should open and close the modal", () => {
    component.instance().openModal();
    expect(component.instance().state.modalOpen).toBe(true);
    component.instance().closeModal();
    expect(component.instance().state.modalOpen).toBe(false);
  });
});

describe("ExampleWorkBubble component", () => {
  let mockOpenModalFn = jest.fn();

  let component = shallow(<ExampleWorkBubble example={myWork[1]} openModal={mockOpenModalFn} />);
  let images = component.find("img");
  it("Should contain a single image element", () => {
    expect(images.length).toEqual(1);
  });
  it ("Should contain correct image src", () => {
    expect(images.node.props.src).toEqual(myWork[1].image.src);
  });
  it ("Should call the openModal function mock when clicked", () => {
    component.find(".section__exampleWrapper").simulate("click");
    expect(mockOpenModalFn).toHaveBeenCalled();
  });
});

describe("ExampleWorkModal component", () => {
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
  let mockOpenModalFn = jest.fn();
  let mockCloseModalFn = jest.fn();
  let component = shallow(<ExampleWorkModal
    example={myExample}
    open={mockOpenModalFn}
    closeModal={mockCloseModalFn}/>);
  it ("Should call the closeModal function mock when clicked", () => {
    component.find(".modal__closeButton").simulate("click");
    expect(mockCloseModalFn).toHaveBeenCalled();
  });
});
