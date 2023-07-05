const Info = () => {
    return (
        <div className='flex gap-x-5 font-medium w-full'>
            <div className='w-[508px] bg-white rounded-xl px-5 pt-5 '>
                <p className='text-xl'>Information</p>
                <div className='flex justify-between pt-[23px]'>
                    <div className='space-y-3'>
                        <p>Info Number:</p>
                        <p>Pick up Place:</p>
                    </div>
                    <div className='text-strong_grey space-y-3'>
                        <p>903049</p>
                        <p>Sweden</p>
                    </div>
                </div>
            </div>
            <div className='w-[508px] bg-white rounded-t-xl pl-[63px] pr-[70px] pb-[36px] pt-6'>
                <div className='flex justify-between pt-[23px] gap-x-[125px]'>
                    <div className='text-center space-y-[6px] text-mid_aqua'>
                        <p className='font-extrabold text-2xl'>We are here</p>
                        <p className='text-sm'>Long time to go</p>
                    </div>
                    <img src={require('../assets/img/Truck.png')} alt="truck"/>
                </div>
            </div>
        </div>
    );
};

export {Info};
