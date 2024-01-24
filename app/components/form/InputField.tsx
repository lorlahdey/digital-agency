
interface InputFieldProps {
    label: string;
    type: string;
    name: string;
    value: string;
    inputstyle: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const InputField = ({label, type, name, value, inputstyle,onChange }: InputFieldProps ) => {
    return (
        <div>
            <input
                className={`${inputstyle} bg-none w-full focus:outline-none placeholder-black text-[24px] text-black pb-[10px] border-b-[1px] border-black`}
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                style={{backgroundImage: 'none important'}}
                placeholder={label}
            />
        </div>
    )
}

export default InputField