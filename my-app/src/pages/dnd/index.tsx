import React, { FunctionComponent, useState } from 'react';
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
  const sensors = useSensors(
    useSensor(MypointerSensor, {
      activationConstraint: {
        delay:  250,
        tolerance: 5
      }
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event: any) {
    console.log('drag-end', [...Array.from(arguments)])
    const {active, over} = event;
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
  return (
    <DndContext 
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext 
        items={items}
        strategy={verticalListSortingStrategy}
      >
        {
        items.map(id => 
          <div>
            <SortableItem key={id} id={id}>
              <Test text={`这是第 ${id} 行测试文字`} />
            </SortableItem>
          </div>
          )
        }
      </SortableContext>
    </DndContext>
  );
}
 
export default Dnd;
