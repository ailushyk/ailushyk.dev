import React, { useContext } from 'react';

export const useCompoundContext = (compoundContext: React.Context<any>) => {
  const context = useContext(compoundContext);
  if (!context) {
    if (compoundContext.displayName) {
      throw new Error(
        `This compound components cannot be rendered outside the <${compoundContext.displayName}> component.`
      );
    }
    throw new Error(
      'This compound components cannot be rendered outside the parent component.'
    );
  }
  return context;
};
