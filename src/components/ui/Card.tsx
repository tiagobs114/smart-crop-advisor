
import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  glassEffect?: boolean;
}

const Card = ({ children, className, glassEffect = false }: CardProps) => {
  return (
    <div className={cn(
      'rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl',
      glassEffect ? 'glass-card' : 'bg-white',
      className
    )}>
      {children}
    </div>
  );
};

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

Card.Content = function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('p-6', className)}>
      {children}
    </div>
  );
};

interface CardIconProps {
  children: React.ReactNode;
  className?: string;
}

Card.Icon = function CardIcon({ children, className }: CardIconProps) {
  return (
    <div className={cn('text-primary mb-4', className)}>
      {children}
    </div>
  );
};

interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

Card.Title = function CardTitle({ children, className }: CardTitleProps) {
  return (
    <h3 className={cn('font-semibold text-xl mb-2', className)}>
      {children}
    </h3>
  );
};

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

Card.Description = function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('text-muted-foreground', className)}>
      {children}
    </p>
  );
};

export default Card;
