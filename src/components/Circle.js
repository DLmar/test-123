const Circle = ({ text, isFirstTwo }) => {
    const style = 'w-[72px] h-[72px] rounded-full shadow-md'
    const circleClassName = isFirstTwo ? `${style} bg-mid_aqua` : `${style} bg-mid_grey`;

    return (
        <div className='flex flex-col gap-y-4 items-center py-12'>
            <div className={circleClassName}></div>
            <p>{text}</p>
        </div>
    );
};

export {Circle};
