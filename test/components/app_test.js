import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// Use 'decribe' to group together similar tests
describe('App', () => {
  let component;

  // Create an instance of App
  beforeEach(() => {
    component = renderComponent(App);
  });

  // Use 'it' to test a single attribute of a target
  it('shows the correct text', () => {
    // Use 'expect' to make an 'assertion' about a target
    expect(component).to.contain('React simple starter');
  });

  it('shows a comment box', () => {
    expect(component.find('.comment-box')).to.exist;
  });
});
