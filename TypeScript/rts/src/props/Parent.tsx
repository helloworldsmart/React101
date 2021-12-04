import { Child, ChildAsFC } from './Child';

// const Parent = () => {
//   return <Child color="red" onClick={() => console.log('Clicked')} >
//   </Child>
// };

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log('Clicked')} >
    aka
  </ChildAsFC>
};


export default Parent;

