import { Input } from '@chakra-ui/react';

import { DEFAULT_ENGINE } from '@/utils/constants';

function Search() {
  function search(e: any) {
    if (e.target.value === '') {
      return undefined;
    } else if (e.keyCode === 13) {
      window.open(`${DEFAULT_ENGINE}${e.target.value}`);
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
