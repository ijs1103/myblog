import { cls } from '@libs/utils';
import { memo } from 'react';

interface Props {
	isVisible: boolean;
	onSetIsVisible: (active: boolean) => void;
}
function BodyBlackout({isVisible , onSetIsVisible}: Props){
  return <div className={cls('z-[1000] left-0 top-0 w-full h-full bg-black opacity-60', isVisible ? 'fixed' : 'hidden')}
	onClick={() => onSetIsVisible(false)}></div> 
}
export default memo(BodyBlackout);