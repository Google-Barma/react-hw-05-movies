import { useState } from 'react';

export default function usePages() {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  return { page, totalPage, setPage, setTotalPage };
}
