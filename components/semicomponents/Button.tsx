import Image from "next/image";

export interface ButtonProps {
    color?: "primary" | "secondary" | "none",
    variant?: "full" | "tonal" | "outlined" | "text",
    icon?: "none" | string,
    text?: string,
    width?: string,
    padding?: string,
    height?: string,
    onClick?: () => any,
}

const textColors = {
    primary: {
        full: "text-slate-200",
        tonal: "text-indigo-900",
        outlined: "text-indigo-900",
        text: "text-indigo-900",
    },
    secondary: {
        full: "text-slate-200",
        tonal: "text-sky-700",
        outlined: "text-sky-700",
        text: "text-sky-700",
    },
}

const backgroundColors = {
    primary: {
        full: "bg-indigo-900",
        tonal: "bg-slate-300",
        outlined: "bg-white",
        text: "",
    },
    secondary: {
        full: "bg-sky-700",
        tonal: "bg-slate-300",
        outlined: "bg-white",
        text: "",
    }
}

const effect = {
    primary: {
        full: "hover:opacity-60",
        tonal: "hover:bg-slate-400",
        outlined: "bg-white",
        text: "",
    },
    secondary: {
        full: "hover:opacity-60",
        tonal: "hover:bg-slate-400",
        outlined: "bg-white",
        text: "",
    },
    none: {
        full: "opacity-60",
        tonal: "bg-slate-300",
        outlined: "bg-white",
        text: "",
    },
}

const Button: React.FC<ButtonProps> = ({ onClick = () => { }, icon = "none", color = "none", text = "Button", variant = "full", width = "[100%]", padding = "px-6 py-2", height = "8" }) => {
    return (
        <div onClick={onClick} className={`${color === "none" ? "" : backgroundColors[color][variant]} transition-all hover:shadow ${effect[color][variant]} hover:cursor-pointer w-${width} h-${height} ${padding} rounded-lg justify-center items-center gap-2.5 transition-all inline-flex ${variant === "outlined" ? "border border-gray-300" : ""}`}>
            {icon !== "none" &&
                <Image
                    width={20}
                    height={20}
                    alt="Button Image"
                    src={icon}
                />
            }
            {text && <div className={(color === "none" ? "text-neutral-600" : textColors[color][variant]) + " text-sm font-normal font-['Rubik'] capitalize"}>{text}</div>}
        </div>
    );
}

export default Button;