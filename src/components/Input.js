const Input = () => {
    return (
        <div>
            <label className="text-xs font-medium text-strong_grey mb-2">Дропдаун</label>
            <select
                className="bg-white_grey border border-mid_grey text-strong_grey text-sm rounded-lg
                  block w-full py-2  border-x-[12px] border-white_grey">
                <option defaultValue>Select option</option>
                <option value="Apples">Apples</option>
                <option value="Toys">Toys</option>
                <option value="Computers">Computers</option>
            </select>
        </div>
    );
};

export {Input};
