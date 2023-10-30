import { HiOutlineDotsHorizontal } from 'react-icons/hi';
import {
    MdSignalCellular1Bar,
    MdSignalCellular4Bar,
    MdSignalCellular2Bar,
    MdWarning
} from 'react-icons/md'

import { PiCircleHalfFill, PiCircleBold } from 'react-icons/pi'
import { BsCheckCircleFill } from 'react-icons/bs'



export const priorityIconsSelector = {
    4: <MdWarning style={{ color: 'red' }} />,
    3: <MdSignalCellular4Bar style={{ color: 'orange' }} />,
    2: <MdSignalCellular2Bar style={{ color: 'blue' }} />,
    1: <MdSignalCellular1Bar style={{ color: 'green' }} />,
    0: <HiOutlineDotsHorizontal style={{ color: 'gray' }} />,
}

export const priorityStringSelector = {
    4: "Urgent",
    3: "High",
    2: "Medium",
    1: "Low",
    0: "No priority",
}


export const statusIconSlector = {
    "Todo": <PiCircleBold style={{ color: 'gray' }} />,
    "In progress": <PiCircleHalfFill style={{ color: 'orange' }} />,
    "Backlog": <BsCheckCircleFill style={{ color: 'green' }} />
}

export const userIconSelector = (user) => {
    return (
        <div className="user-avatar" style={{ backgroundColor: "#94a3b8" }}>
        {user?.name.split(" ").map(word => word.charAt(0)).join("")}
        <div className="available" style={{ backgroundColor: user?.available ? "green" : "red" }}></div>
    </div>
    );
  };

 