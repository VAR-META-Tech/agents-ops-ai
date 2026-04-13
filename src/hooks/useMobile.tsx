'use client';

import { useMediaQuery } from '@mantine/hooks';

const useMobile = (query: string = '(max-width: 48rem)') => {
  return useMediaQuery(query);
};

export default useMobile;
