import { CommonTitle } from '@/components/common/common-title';
import { cn } from '@/lib/utils';
import { ContactForm } from './components/contact-form';

export const Contact = () => {
  return (
    <div
      className={cn('relative z-10 mx-auto flex max-w-[1280px] justify-between gap-14 max-xl:flex-col max-2xl:gap-6')}
    >
      <div>
        <CommonTitle as='h2' className='mb-3 text-white max-sm:text-3xl'>
          Have An Innovative Idea?
        </CommonTitle>
        <p className='max-w-[600px] text-[#7C89AE] text-lg leading-8'>
          Leave your contact details below and we’ll get back to you within 24 hours. Let’s discuss about your project!
        </p>
      </div>
      <div className='w-full max-w-[608px] max-xl:max-w-full'>
        <ContactForm />
      </div>
    </div>
  );
};
