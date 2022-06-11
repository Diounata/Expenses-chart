import { LoadingImg } from './styles';

import loadingSVG from '../../assets/loading.svg';

export function Loading() {
  return <LoadingImg src={loadingSVG} alt="Loading" width="25px" height="25px" />;
}
