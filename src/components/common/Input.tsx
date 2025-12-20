interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  return (
    <div className="w-full space-y-2">
      {label && (
        <label className="text-sm font-medium text-gray-700">{label}</label>
      )}
      <input
        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-black outline-none transition"
        {...props}
      />
    </div>
  );
}
