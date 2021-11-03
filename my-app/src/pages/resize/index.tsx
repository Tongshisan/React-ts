/*
 * @Author: your name
 * @Date: 2021-07-21 14:09:41
 * @LastEditTime: 2021-08-26 15:06:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /lizhi/React-ts/my-app/src/pages/resize/index.tsx
 */
import React, { useEffect, useState } from 'react'
import { SplitPane, SplitPaneProps, ResizerOptions, CollapseOptions, SplitPaneHooks } from "react-collapse-pane";
import styles from './index.module.scss';

export interface IResizeProps {

}

const IResize: React.FC<IResizeProps> = () => {

  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  const [chartHeight, setChartHeight] = useState<number>(0)
  const [collapseDirection, setCollapseDirection] = useState<string>('down');
  const [initSizes, setInitSizes] = useState<any[]>([1, 1]);
  const [isShowScriptEditor, setIsShowScriptEditor] = useState<boolean>(false);

  // 折叠面板大小
  const [collapseSize, setCollapseSize] = useState<any>([]);

  return (
    <div className={styles.wrap}>
      {/* @ts-ignore */}
      <SplitPane
        split="horizontal"
        initialSizes={initSizes}
        collapse={{
          buttonTransition: "none",
          collapseDirection: "down",
          overlayCss:{
            backgroundColor: 'transparent'
          }
        }}
        minSizes={0}
        collapsedSizes={collapseSize}
        hooks={{
          onCollapse: (size) => {
            console.log(size, '==')
            // setCollapseSize([...size])
          },
          onSaveSizes: (size) => {
            console.log(size, 'save')
            setInitSizes([...size])
          },
          onChange: (sizes) => {
            setInitSizes(sizes)
          }
        }}
      >
        <div>
          ????
        </div>
        <div>
          {
            !isFullScreen
            && (
              <div>
                我是上main区域内容
              </div>
            )
          }
          <div className={styles['bottom-header']}>
            <div
              onClick={() => {
                console.log('点击出现上面内容')
                setIsFullScreen(!isFullScreen)
              }}
            >
              点击
            </div>
          </div>
          <div className={styles['bottom-content']}>
            <div>我是下面区域的内容</div>
            <div
              onClick={() => {
                console.log('全屏')
                setCollapseSize([1000, null])
              }}
            >点我全屏</div>
            <div
              onClick={() => {
                console.log('点击了全凭');
                setInitSizes([50, 1000])
              }}>
              全屏
            </div>
            {
              isShowScriptEditor
                ? (
                  <div className={styles['script-editor-content']}>我是脚本编辑器</div>
                )
                : null
            }
          </div>
        </div>
      </SplitPane>
    </div>
  );
}

export default IResize;

