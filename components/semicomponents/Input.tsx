import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import search from '../../public/assest/icons/search.svg'
import eye from '../../public/assest/icons/eye.svg'

export interface InputProps {
    type?: "search" | "default" | "date" | "image" | "video" | "password",
    text?: string,
    placeholder?: string,
    width?: string,
    visible?: boolean,
    onChange?: (value: string) => any,
    value?: string,
}

const altText = {
    search: "Search Input Image",
    date: "Date Input Image",
    image: "Image Input Image",
    video: "Video Input Image",
    password: "Null",
}

const srcText = {
    search: "search",
    date: "calendar",
    image: "image",
    video: "media",
    password: "null",
}

const placeholderText = {
    search: "Please Input here.",
    date: "Choose an date",
    image: "Choose an image",
    video: "Choose an video",
    default: "Please Input here.",
    password: "Please Input here.",
}

const typeText = {
    search: "search",
    date: "date",
    image: "file",
    video: "file",
    default: "text",
    password: "password",
}


const Input: React.FC<InputProps> = ({ value = "", onChange = () => { }, type = "default", placeholder, text = "", width = "[100%]" }) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [active, setActive] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (ref.current !== null) {
            ref.current.addEventListener('focusin', () => setActive(true));
            ref.current.addEventListener('focusout', () => setActive(false));
        }
    }, [ref]);

    return (
        <div className={`transition w-${width} h-8 px-${type === "search" ? "2" : "4"} py-2 bg-white rounded-lg border ${active ? " border-gray-900" : "border-gray-300"} justify-center items-center gap-2.5 inline-flex`}>
            {type !== "default" && type !== "password" && (
                <Image
                    width={18}
                    height={18}
                    src={search}
                    alt={altText[type]}
                />
            )}
            {(typeText[type] === "file" || type === "date") && <div id={type === "date" ? "color-calendar" : undefined} className="w-[100%] px-6 text-neutral-600 text-sm font-normal font-['Rubik'] absolute">{value ? value : <div className="text-zinc-400">{placeholder || placeholderText[type]}</div>}</div>}
            <input
                ref={ref}
                className={`w-[100%] text-neutral-600 text-sm font-normal font-['Rubik'] outline-none ${type === "default" || type === "search" || type === "password" ? "opacity-1 z-0" : "opacity-0 z-0"}`}
                placeholder={placeholder || placeholderText[type]}
                type={(typeText[type] === "password" && showPassword) ? "text" : typeText[type]}
                value={value}
                onClick={() => { if (type === "date") {setShowCalendar(true)} }}
                onChange={event => {
                    onChange(event.target.value);
                }}
            />
            {showCalendar &&
                <>
                    <div className="custom-calendar">
                        <p>Hello World!</p>
                    </div>
                </>
            }
            {
                type === "password" &&
                <Image
                    onClick={() => setShowPassword(!showPassword)}
                    className="hover:cursor-pointer"
                    width={18}
                    height={18}
                    src={eye}
                    alt="Eye Icon Image"
                />
            }
        </div>
    )
}

export default Input;