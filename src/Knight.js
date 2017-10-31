import React from 'react';
import PropTypes from 'prop-types';
import {ItemTypes} from './Constants';
import {DragSource} from 'react-dnd';

const knightSource={
    beginDrag(props){
        return {};
    }
};
function collect(connect,monitor){
    return{
        connectDragSource:connect.dragSource(),
        isDragging:monitor.isDragging()
    }
}
class Knight extends React.Component{
    static propTypes={
        conectDragSource:PropTypes.func.isRequired,
        isDragging:PropTypes.bool.isRequired
    };
    render(){
        const {connectDragSource,isDragging}=this.props;
        return connectDragSource(<div style={{
                           opacity:isDragging?0.5:1,
                           fontSize:55,
                           fontWeight:'bold',
                           cursor:'move'
                          }}>♘</div>
                                );
  
          /*    return <div style={{
                           opacity:isDragging?0.5:1,
                           fontSize:25,
                           fontWeight:'bold',
                           cursor:'move'
                          }}>♘</div>;
*/
  }
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);