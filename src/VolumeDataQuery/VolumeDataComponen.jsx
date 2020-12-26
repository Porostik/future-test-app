import React from 'react';
import { Button } from 'shared';
import { buttonsText } from 'constants.js';

// Презентационный компонент запроса объёма данных
// text - отображаемый тект запроса
// smallCountQuery/largeCountQuery - функции выполняемые в случае выбора
// маленького/большого объёма данных
function VolumeDataComponen({ text, smallCountQuery, largeCountQuery }) {
  return (
    <div className="data-volume-wrapper">
      <p className="volume-text">{text}</p>
      <div className="volume-buttons-wrapper">
        <Button text={buttonsText.smallCountQuery} onClick={smallCountQuery} />
        <Button text={buttonsText.largeCountQuery} onClick={largeCountQuery} />
      </div>
    </div>
  );
}

export default VolumeDataComponen;
