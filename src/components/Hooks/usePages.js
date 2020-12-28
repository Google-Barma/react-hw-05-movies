import { useState } from 'react';

export default function usePages() {
  const [totalPage, setTotalPage] = useState(1);

  return { totalPage, setTotalPage };
}
