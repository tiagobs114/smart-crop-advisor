
import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  id?: string;
}

const Container = ({ 
  children, 
  className, 
  as: Component = 'div',
  id,
  ...props 
}: ContainerProps) => {
  return (
    <Component
      id={id}
      className={cn(
        'container mx-auto px-4 sm:px-6 lg:px-8',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
