
import { useState } from 'react';

export const useTravelInsights = () => {
  const [activeId, setActiveId] = useState<number>(1);

  return {
    activeId,
    setActiveId
  };
};