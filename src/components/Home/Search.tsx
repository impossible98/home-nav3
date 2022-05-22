import { Input } from '@arco-design/web-react';
import { type ChangeEvent, useState } from 'react';

import './Search.css';

const InputSearch = Input.Search;

interface SearchProps {
  engine: string;
}

function Search(props: SearchProps) {
  const [input, setInput] = useState('');

  function handleChange(text: string): void {
    setInput(text);
  }

  function handlePressEnter(e: ChangeEvent<HTMLInputElement>): void {
    if (e.target.value === '') {
      return undefined;
    }
    window.open(`${props.engine}${e.target.value}`);
  }

  return (
    <form action='.'>
      <InputSearch
        allowClear
        maxLength={{
          length: 140,
          errorOnly: true,
        }}
        value={input}
        onChange={handleChange}
        onPressEnter={handlePressEnter}
        type='search'
        style={{
          height: '55px',
        }}
      />
      <Input
        type='text'
        style={{
          display: 'none',
        }}
      />
    </form>
  );
}

export default Search;
