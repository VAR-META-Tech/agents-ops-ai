'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';
import * as React from 'react';

import { cn } from '@/lib/utils';

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot='accordion' {...props} />;
}

function AccordionItem({ className, ...props }: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot='accordion-item'
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  );
}

export type AccordionTriggerProps = React.ComponentProps<typeof AccordionPrimitive.Trigger> & {
  /** When set, replaces the default chevron. Open/closed styling (rotate, swap icons) is up to you — the trigger has `group` and `data-state`; target with `group-data-[state=open]:…` / `group-data-[state=closed]:…`. */
  icon?: React.ReactNode;
};

function AccordionTrigger({ className, children, icon, ...props }: AccordionTriggerProps) {
  return (
    <AccordionPrimitive.Header className='flex'>
      <AccordionPrimitive.Trigger
        data-slot='accordion-trigger'
        className={cn(
          'group flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left font-medium text-sm outline-none transition-all hover:underline focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50',
          icon == null && '[&[data-state=open]>svg:last-child]:rotate-180',
          className
        )}
        {...props}
      >
        {children}
        {icon != null ? (
          <span data-slot='accordion-trigger-icon' className='pointer-events-none shrink-0 [&_svg]:shrink-0'>
            {icon}
          </span>
        ) : (
          <ChevronDownIcon className='pointer-events-none size-4 shrink-0 translate-y-0.5 text-muted-foreground transition-transform duration-200' />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot='accordion-content'
      className='overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down'
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
