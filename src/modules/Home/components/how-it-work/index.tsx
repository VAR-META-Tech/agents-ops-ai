import netBackground from '@/assets/images/net-background.png';
import CommonAnimationContainer from '@/components/common/common-animation-container';
import { CommonChip } from '@/components/common/common-chip';
import { CommonTitle } from '@/components/common/common-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { HOW_IT_WORKS } from './utils/constants';

export const HowItWork = () => {
  return (
    <div className='bg-white px-6'>
      <div className='mx-auto max-w-[1280px] py-20'>
        <div className='mb-10 pl-6 max-md:pl-3'>
          <CommonTitle as='h2' className='max-lg:text-3xl'>
            How It Works
          </CommonTitle>
        </div>

        <div
          className={cn(
            'gap-4 rounded-[48px] border border-[#E6E6E6] bg-cover bg-no-repeat p-8',
            'grid grid-cols-3 max-sm:p-5 max-md:grid-cols-1 max-lg:grid-cols-2'
          )}
          style={{
            backgroundImage: `url(${netBackground.src || netBackground})`,
          }}
        >
          {HOW_IT_WORKS.map((item, index) => (
            <CommonAnimationContainer key={index} transition={{ duration: 0.4, delay: index * 0.2 }} className='h-full'>
              <Card className='!p-4 gap-2 rounded-4xl border-[#E6E6E6] bg-white'>
                <CardHeader className='!p-0'>{item.image}</CardHeader>
                <CardContent className='!p-1'>
                  <CardTitle>
                    <div className='mt-4 flex items-center gap-2 max-sm:gap-3'>
                      <CommonChip className='h-7 min-h-7 w-7 min-w-7 bg-white text-base'>
                        <span>{item.id}</span>
                      </CommonChip>
                      <span className='truncate font-normal text-[#1E1E1E] text-lg'>{item.title}</span>
                    </div>
                  </CardTitle>
                </CardContent>
              </Card>
            </CommonAnimationContainer>
          ))}
        </div>
      </div>
    </div>
  );
};
