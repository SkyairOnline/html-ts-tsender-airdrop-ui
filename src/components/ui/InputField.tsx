interface InputFieldProps {
    label?: string;
    placeholder: string;
    value: string;
    type?: string;
    large?: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function InputField({
    label,
    placeholder,
    value,
    type = "text",
    large = false,
    onChange,
}: InputFieldProps) {
    const inputId = label ? label.toLowerCase().replace(/\s+/g, "-") : "input-field";
    return (
        <div className="w-full space-y-2">
            {label && <label htmlFor={inputId} className="block text-sm font-medium text-gray-700">{label}</label>}
            {large ? (
                <textarea
                    id={inputId}
                    className="w-full px-4 py-2 border rborder-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    rows={4}
                />
            ) : (
                <input
                    id={inputId}
                    type={type}
                    className="w-full px-4 py-2 border rborder-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
            )}
        </div>
    );
}