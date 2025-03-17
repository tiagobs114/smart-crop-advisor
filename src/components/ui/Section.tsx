
import React from 'react';
import { cn } from '@/lib/utils';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

const Section = ({ 
  children, 
  className, 
  containerClassName,
  id,
  ...props 
}: SectionProps) => {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24', className)}
      {...props}
    >
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  chip?: string;
  centered?: boolean;
  className?: string;
}

Section.Header = function SectionHeader({ 
  title, 
  subtitle, 
  chip, 
  centered = false,
  className
}: SectionHeaderProps) {
  return (
    <div className={cn(
      'mb-12',
      centered && 'text-center',
      className
    )}>
      {chip && (
        <div className="mb-3">
          <span className="highlight-chip">{chip}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-muted-foreground max-w-3xl">{subtitle}</p>}
    </div>
  );
};

export default Section;
