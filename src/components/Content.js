import {Circle} from "./Circle";
import {Info} from "./Info";
import {Reorder} from "./Reorder";

const Content = () => {
    return (
        <div className='w-screen bg-light_grey py-[37px] '>
            <div className='flex flex-col'>
                <h2 className='text-5xl text-center'>Start</h2>
                <span className='border border-mid_grey mt-[27px]'></span>
            </div>
            <div className='px-[62px] pt-5'>
                <div className='relative gap-x-[144px] flex text-sm font-medium'>
                    <Circle text='Стан1' isFirstTwo={true} />
                    <div className='absolute left-[90px] top-[85px] w-[128px] h-px border border-dashed border-mid_aqua'></div>
                    <Circle text='Стан2' isFirstTwo={true} />
                    <div className='absolute left-[302px] top-[85px] w-[128px] h-px border border-dashed border-mid_aqua'></div>
                    <Circle text='Стан3'/>
                    <Circle text='Стан4'/>
                    <Circle text='Стан5'/>
                </div>
                <Info/>
                <Reorder/>
            </div>

        </div>
    );
};

export {Content};
