import {HelloComponent} from "./hello.component";

describe('hello', () => {
  it('test', () => {
    const component = new HelloComponent();
    spyOn(component,'setArray').and.callThrough();
    component.setArray([1,2,3]);
    expect(component.setArray).toHaveBeenCalled();
    expect(component.arr.length).toBe(3)
  })
})
