interface IBtnTabProps {
    title: string;
    active?: boolean;
    onClick?: () => void;
}

export default function BtnTab({ title, active, onClick }: IBtnTabProps) {
    return (
        <button
            onClick={onClick}
            className={
                "w-28 rounded-lg px-3 py-1 " +
                (active
                    ? "bg-primary/10 text-primary"
                    : "bg-white text-gray-400 hover:bg-primary/5 hover:text-primary")
            }
        >
            {title}
        </button>
    );
}
