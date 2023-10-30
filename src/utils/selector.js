import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import {
    MdSignalCellular1Bar,
    MdSignalCellular4Bar,
    MdSignalCellular3Bar,
    MdWarning
} from 'react-icons/md'

import { PiCircleHalfFill, PiCircleBold } from 'react-icons/pi'
import { BsCheckCircleFill } from 'react-icons/bs'

//selector for priority icons based on priority level
export const priorityIconsSelector = {
    4: <MdWarning style={{ color: 'red' }} />,
    3: <MdSignalCellular4Bar style={{ color: 'green' }} />,
    2: <MdSignalCellular3Bar style={{ color: 'blue' }} />,
    1: <MdSignalCellular1Bar style={{ color: 'orange' }} />,
    0: <HiOutlineDotsHorizontal style={{ color: 'gray' }} />,
}

//selector for priority strings based on priority level
export const priorityStringSelector = {
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low",
    0: "No priority",
}

// selector for status icons based on ticket status
export const statusIconSlector = {
    "Todo": <PiCircleBold style={{ color: 'gray' }} />,
    "In progress": <PiCircleHalfFill style={{ color: 'orange' }} />,
    "Backlog": <BsCheckCircleFill style={{ color: 'green' }} />
}

//selector for rendenring uer avatars
export const userIconSelector = (user) => {
    return (
        <div className="user-avatar" style={{ backgroundColor: "#94a3b8" }}>
            {user?.name.split(" ").map(word => word.charAt(0)).join("")}
            <div className="available" style={{ backgroundColor: user?.available ? "green" : "red" }}></div>
        </div>
    );
};

