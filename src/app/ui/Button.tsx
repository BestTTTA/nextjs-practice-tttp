type ButtonProps = {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={onClick}
    >
      {label}
    </button>
  )
}
