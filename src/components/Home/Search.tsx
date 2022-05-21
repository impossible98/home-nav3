import { Input } from '@arco-design/web-react';
import { useState } from 'react';

const InputSearch = Input.Search;

interface SearchProps {
  engine: string;
}

function Search(props: SearchProps) {
  const [input, setInput] = useState('');

  function handleChange(text: string, e: any) {
    setInput(text);
  }

  function handlePressEnter(e: any) {
    if (e.target.value === '') {
      return undefined;
    }
    window.open(`${props.engine}${e.target.value}`);
  }

  return (
    <InputSearch
      allowClear
      value={input}
      onChange={handleChange}
      onPressEnter={handlePressEnter}
    />
  );
}

export default Search;
