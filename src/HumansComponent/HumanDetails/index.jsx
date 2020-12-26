import React from 'react';
import './HumanDetails.scss';
import { useSelector } from 'react-redux';

import { detailsTitles } from 'constants.js';
import Description from './Description';
import DetailsItem from './DetailsItem';
import { selectDetailsItem } from './selectors';

// Компонент отображения детальных данных о человеке
function HumanDetails() {
  const humanDetails = useSelector(selectDetailsItem);

  return (
    humanDetails && (
      <div className="details">
        <DetailsItem
          title={detailsTitles.fullName}
          value={`${humanDetails.firstName} ${humanDetails.lastName}`}
        />
        <Description title={detailsTitles.description} value={humanDetails.description} />
        {Object.keys(humanDetails.address).map((item, index) => (
          <DetailsItem
            key={`${item}_${index}`}
            title={detailsTitles[item]}
            value={humanDetails.address[item]}
          />
        ))}
      </div>
    )
  );
}

export default HumanDetails;
