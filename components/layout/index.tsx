
import React from "react";
import Draggable from 'react-draggable';
import { Button } from 'antd';

export class Layout extends React.Component {
    //const {component} = this.props.component;
    render() {
      // layout is an array of objects, see the demo for more complete usage
      const layout = [
        { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
        { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
        { i: "c", x: 2, y: 10, w: 1, h: 2, isResizable:true,isBounded:true }
      ];
      return (
        <Draggable scale={1}>
            <div>
            <Button>okok</Button>
            
            </div>
        </Draggable>
      );
    }
}