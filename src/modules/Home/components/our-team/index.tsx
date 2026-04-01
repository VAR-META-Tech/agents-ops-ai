import netBackground from '@/assets/images/net-background.png';
import CommonAnimationContainer from '@/components/common/common-animation-container';
import { CommonTitle } from '@/components/common/common-title';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { TEAM_MEMBERS } from './utils/constants';

export const OurTeam = () => {
  return (
    <div className='bg-white px-6'>
      <div className='mx-auto max-w-[1280px] py-20'>
        <div className='mb-10 pl-6 max-md:pl-3'>
          <CommonTitle as='h2' className='max-lg:text-3xl'>
            Our Team
          </CommonTitle>
        </div>

        <div
          className={cn(
            'grid min-w-[320px] grid-cols-[repeat(auto-fit,_minmax(320px,_1fr))] gap-6 bg-[#E6E6E6] p-8 text-[#1E1E1E]',
            'rounded-[48px] border border-[#E6E6E6] bg-cover bg-no-repeat',
            'max-sm:!grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] max-sm:p-5'
          )}
          style={{
            backgroundImage: `url(${netBackground.src || netBackground})`,
          }}
        >
          {TEAM_MEMBERS.map((member, index) => (
            <CommonAnimationContainer key={index} transition={{ duration: 0.4, delay: index * 0.1 }} className='h-full'>
              <Card
                key={member.id}
                className='h-full max-h-full min-h-[500px] rounded-4xl bg-white max-sm:min-h-[400px] max-2xl:min-h-[538px]'
              >
                <CardHeader>{member.image}</CardHeader>
                <CardContent>
                  <CardTitle className='font-semibold text-2xl text-[#1E1E1E]'>{member.name}</CardTitle>
                  <div className='my-1 font-normal text-[#1E1E1E] text-xl'>{member.title}</div>
                  <div className='font-normal text-[#1E1E1EDB] text-base leading-[26px]'>{member.degree}</div>
                  <div className='mt-5 font-normal text-[#1E1E1E] text-lg leading-8'>{member.bio}</div>
                </CardContent>
              </Card>
            </CommonAnimationContainer>
          ))}
        </div>
      </div>
    </div>
  );
};
