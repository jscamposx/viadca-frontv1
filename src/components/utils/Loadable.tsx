import { Suspense, ComponentType } from 'react';
import { PageLoader } from '@/components/ui/PageLoader';


export const Loadable = <P extends object>(Component: ComponentType<P>) => {
  return function LoadableComponent(props: P) {
    return (
      <Suspense fallback={<PageLoader />}>
        <Component {...props} />
      </Suspense>
    );
  };
};