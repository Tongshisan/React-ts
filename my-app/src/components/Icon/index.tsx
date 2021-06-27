/* eslint-disable @typescript-eslint/no-useless-constructor */
/*
 * @Author: your name
 * @Date: 2021-01-31 17:25:27
 * @LastEditTime: 2021-06-13 21:36:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /React-ts/my-app/src/components/Icon/icon.tsx
 */
import * as React from 'react';
import './index.css';
function Icon({ type, className, onIconClick }: {
    type: string;
    className?: string;
    onIconClick?: () => void;
}) {
	return (
		<i
            className={`icon icon-${type} ${className || ''}`}
			onClick={onIconClick}
		/>
	);
}

export default Icon;
