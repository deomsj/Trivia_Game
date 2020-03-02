import React from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

interface ResultIcon {
  isCorrect: boolean;
}

const ResultIcon = ({ isCorrect }: ResultIcon) =>
  isCorrect ? <FaPlus /> : <FaMinus />;

export default ResultIcon;
