interface FormInputProps {
  label: string;
  placeholder: string;
  name: string;
  type?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  placeholder,
  name,
  type,
}) => {
  if (type === "textarea") {
    return (
      <label className="uppercase text-[13px] font-bold tracking-widest flex flex-col gap-1 leading-4">
        {label}
        <textarea
          name={name}
          placeholder={placeholder}
          className="border border-gray-300 ml-4 font-normal text-base p-1 focus:outline-lemon pl-2 h-16 flex items-start justify-start resize-none"
        />
      </label>
    );
  }
  return (
    <label className="uppercase text-[13px] font-bold tracking-widest flex flex-col gap-1 leading-4 pt-3">
      {label}
      <input
        name={name}
        placeholder={placeholder}
        className="border border-gray-300 ml-4 font-normal text-base p-1 focus:outline-lemon pl-2"
      />
    </label>
  );
};
