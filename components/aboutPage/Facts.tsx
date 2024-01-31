import {
    BsAwardFill,
    BsCodeSlash,
    BsGlobe,
    BsJournalAlbum,
} from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import Fact from "./Fact";

export default function Facts() {
    return (
        <ul className="grid grid-cols-2 mb-12 logos sm:grid-cols-4">
            <Fact Icon={BsJournalAlbum} desc="100+ آلبوم گوش داده شده" border />
            <Fact Icon={BsAwardFill} desc="15+ جایزه برنده شد" border />
            <Fact
                Icon={BsCodeSlash}
                desc="بیش از 10000 خط نوشته شده است"
                border
            />
            <Fact Icon={BsGlobe} desc="10+ کشور بازدید شده" />
        </ul>
    );
}
