import { useMemo } from 'react';

const DummyInternal = props => {
  console.log('Dummy Internal Memoized');
  return <div>I'm the internal div {props.test}</div>;
}

export const Dummy = () => {
  console.log('Dummy');
  const test = 'test';
  return <div>I'm a dummy component out of context!
    {useMemo(() => <DummyInternal test={test}></DummyInternal>, [test])}
  </div>
}

