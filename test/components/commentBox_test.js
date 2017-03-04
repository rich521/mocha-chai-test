import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/commentBox';

describe('CommentBox', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(CommentBox);
  });

  it('has the class comment-box', () => {
    expect(component).to.have.class('comment-box');
  });

  it('has a text box', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('has a button', () => {
    expect(component.find('button')).to.exist;
  });

  // Nesting similar tests
  describe('entering text', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'any comment here');
    });

    it('shows that the text is entered', () => {
      expect(component.find('textarea')).to.have.value('any comment here');
    });

    it('when submitted, clears the input', () => {

    });
  });
});
