/*
 * @Author: your name
 * @Date: 2021-12-06 14:59:05
 * @LastEditTime: 2021-12-09 15:25:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /lizhi/React-ts/my-app/src/pages/dnd/index.tsx
 */
import React, { FunctionComponent, useState, useRef } from 'react';
import {
  DndContext, 
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable';
import Test from './test';
import {SortableItem} from './SortItems';
import styles from './item.module.scss';


interface DndProps {
  
}
 
class MypointerSensor extends PointerSensor {
  static activators = [
    {
      eventName: 'onPointerDown' as const,
      handler: (event: any) => {
        console.log('event', event);
        return true
      },
    }
  ]
}

const Dnd: FunctionComponent<DndProps> = () => {
  const [items, setItems] = useState(['1', '2', '3']);

  const dragStartTimeRef = useRef<any>(0);

  const sensors = useSensors(
    useSensor(MypointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: any) {
    console.log('drag-end', [...Array.from(arguments)])
    const {active, over} = event;

    // if dragStartTime < +new Date() - 100 
    if (+new Date() - dragStartTimeRef.current < 100) {
      console.log('点击事件', active);
      return;
    }
    
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  function handleDragStart() {
    console.log('dragStart', [...Array.from(arguments)])
    dragStartTimeRef.current = +new Date();
  }

  function handleDragMove() {
    console.log('drag-move', [...Array.from(arguments)])
  }

  function handleDragCancel() {
    console.log('drag-cancel', [...Array.from(arguments)])
  }
  function handleDragOver() {
    console.log('drag-over', [...Array.from(arguments)])
  }
  return (
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      onDragStart={handleDragStart}
      // onDragMove={handleDragMove}
      onDragCancel={handleDragCancel}
      onDragOver={handleDragOver}
    >
      <SortableContext 
        items={items}
        strategy={verticalListSortingStrategy}
      >
        {
        items.map(id => 
          <div onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            e.nativeEvent.stopImmediatePropagation()
            console.log('idddddd', id, e)
          }}>
            <SortableItem key={id} id={id}>
              <Test text={`这是第 ${id} 行测试文字`} />
            </SortableItem>
          </div>
          )
        }
      </SortableContext>
      <SortableContext 
        items={items}
        strategy={horizontalListSortingStrategy}
      >
        <div className={styles['display-flex']}>
          {
          items.map(id => 
            <div onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              e.nativeEvent.stopImmediatePropagation()
              console.log('idddddd', id, e)
            }}>
              <SortableItem key={id} id={id}>
                <Test text={`这是第 ${id} 行测试文字`} />
              </SortableItem>
            </div>
            )
          }
        </div>
      </SortableContext>
    </DndContext>
  );
}
 
export default Dnd;
