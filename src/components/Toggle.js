import { motion } from 'framer-motion';
import React, {useState} from 'react';
import styled from 'styled-components';

const Toggle = ({ children, title }) => {
    const [toggle, setToggle] = useState(false);
    return (
        <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
            <TitleH4 layout>{title}</TitleH4>
            {toggle ? children : ""}
            <div className="faq-line"></div>
        </motion.div>
    )
}

export default Toggle;

const TitleH4 = styled(motion.h4)`
    cursor: pointer;
`