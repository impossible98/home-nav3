import { Input } from '@chakra-ui/react';

interface SearchProps {
  engine: string;
}

function Search(props: SearchProps) {
  function search(e: any) {
    if (e.target.value === '') {
      return undefined;
    } else if (e.keyCode === 13) {
      window.open(props.engine + `${e.target.value}`);
    }
  }
  return (
    <Input
      focusBorderColor='pink.400'
      onKeyDown={search}
    />
  );
}

export default Search;
