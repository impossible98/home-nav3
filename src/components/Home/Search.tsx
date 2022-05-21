import { Input } from '@chakra-ui/react';
import { useState } from 'react';

interface SearchProps {
  engine: string;
}

function Search(props: SearchProps) {
  const [input, setInput] = useState(''); // input输入内容

  function search(e: any) {
    if (e.target.value === '') {
      return undefined;
    }
    window.open(props.engine + `${e.target.value}`);
  }

  function handleKeyDown(e: any) {
    if (e.keyCode === 13) {
      search(e);
    }
  }

  function handleChange(e: any) {
    setInput(e.target.value);
  }
  return (
    <form action='.'>
      <Input
        focusBorderColor='pink.400'
        value={input}
        type='search'
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <Input
        type='text'
        sx={{
          display: 'none',
        }}
      />
    </form>
  );
}

export default Search;
