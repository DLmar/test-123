import {Input} from "./Input";

const Reorder = () => {
    const handleClick = () => {
        alert('Done button was clicked !')
    }
    return (
        <div className='w-[1036px] bg-white pt-[18px] pb-3 px-5 mt-[14px]'>
            <p className='text-xl font-medium pb-5'>Перезамовте Багаж</p>
            <div className='space-y-[18px]'>
                <Input/>
                <Input/>
            </div>
            <div className='flex justify-end'>
                <button
                    onClick={handleClick}
                    className='bg-mid_aqua hover:bg-accent_black text-white rounded-lg px-[26px] py-[10px] font-semibold text-sm mt-[52px]'>
                    Done
                </button>
            </div>
        </div>
    );
};

export {Reorder};
