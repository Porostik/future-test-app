import React from 'react';
import HumansLoader from 'HumansLoader';
import Humans from 'HumansComponent';
import { urls, dataVolumeText } from 'constants.js';
import './VolumeDataQuery.scss';
import VolumeDataComponen from './VolumeDataComponen';

// Контейнерный компонент запроса объёма данных
function VolumDataQuery() {
  const [dataVolumeUrl, setDateVolumeUrl] = React.useState(null);

  const smallCountQuery = () => {
    setDateVolumeUrl(urls.smallCount);
  };

  const largeCountQuery = () => {
    setDateVolumeUrl(urls.largeCount);
  };

  // Отображает запрос на объём данных, после того как ответ получен
  // активирует загрузку данных
  return !dataVolumeUrl ? (
    <VolumeDataComponen
      text={dataVolumeText}
      smallCountQuery={smallCountQuery}
      largeCountQuery={largeCountQuery}
    />
  ) : (
    <HumansLoader loadingUrl={dataVolumeUrl}>
      <Humans />
    </HumansLoader>
  );
}

export default VolumDataQuery;
