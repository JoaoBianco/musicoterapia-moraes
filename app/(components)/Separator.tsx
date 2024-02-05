"use client";

import { faAnglesDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { motion } from "framer-motion";
import { arrowAnim } from "../(framer-motion)/arrowAnim";

export default function Separator({ showIcon = true }: { showIcon?: boolean }) {
  return (
    <motion.div
      className="flex justify-center py-4 mb-24 mt-4"
      variants={arrowAnim}
      initial={arrowAnim.hidden}
      animate={arrowAnim.visible}
    >
      {showIcon ? <FontAwesomeIcon icon={faAnglesDown} size={"2x"} /> : null}
    </motion.div>
  );
}
