import Image from "next/image";
import { HomeSimpleDoor } from "iconoir-react";
export interface BreadCrumbItemProps {
    icon?: boolean,
    selected?: boolean,
    text?: string,
    src?: string,
    onClick?: () => any,
}

const BreadCrumbItem: React.FC<BreadCrumbItemProps> = ({ icon = false, selected = false, text = "Home", onClick = () => { } }) => {
    return (
        <div className="w-100% h-[17px] pr-3 justify-start items-center gap-3 inline-flex transition-all">
            {icon && <HomeSimpleDoor className="pr-0 gap-0" color="#B3B3B3" />}
            <div className={`${!selected ? "text-zinc-400" : "text-neutral-600"} text-sm font-normal font-['Rubik'] hover:cursor-pointer`} onClick={onClick}>{text}</div>
            {!selected && <Image
                width={6}
                height={6}
                alt="Ellipse Image"
                src="/icons/Ellipse 2.svg"
            />}
        </div>
    )
}

export default BreadCrumbItem;