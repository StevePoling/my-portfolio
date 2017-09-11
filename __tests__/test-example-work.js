import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';

const myWork = [
  {
    'title': 'Work Example',
    'image': {
      'desc': 'example screenshot of a project involving code',
      'src': 'images/example1.png',
      'comment': ''
    }
  },
  {
    'title': 'Hugo Example',
    'image': {
      'desc': 'Hugo generated static site',
      'src': 'images/example2.png',
      'comment': ''
    }
  }
];

describe("ExampleWork component", () => {

  let component = shallow(<ExampleWork work={myWork} />);

  it("Should be sction element", () => {
    expect(component.type()).toEqual('section');
  });

  it("Should contain as many children as there are work examples", () => {
    expect(component.find('ExampleWorkBubble').length).toEqual(myWork.length);
  });
});

describe("ExampleWorkBubble component", () => {

  let component = shallow(<ExampleWorkBubble example={myWork[1]} />);
  let images = component.find("img");
  it("Should contain a single image element", () => {
    expect(images.length).toEqual(1);
  });
  it ("Should contain correct image src", () => {
    expect(images.node.props.src).toEqual(myWork[1].image.src);
  });
});
