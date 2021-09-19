import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const styles = {
  header: {
    marginTop: "10px",
  },
  image: {
    border: "1px",
    borderRadius: "10px",
    height: "500px",
    width: "500px",
  },
};

const ImageCard = ({image}) => {
    console.log(image)

  return (
    <div style={styles.header}>   
          <TransformWrapper
            defaultScale={1}
            defaultPositionX={1}
            defaultPositionY={1}
          >
              <TransformComponent>
                  {image && (

                        <img
                        style={styles.image}
                        src={require(`../images/${image}`).default}
                        alt=""
                        /> 
                  )}
            </TransformComponent>
          </TransformWrapper>
    </div>
  );
};

export default ImageCard;
/**const ImageCard = (props) => {
    return (
        <div style={styles.header}>
            <DragDropContext>
                <Droppable droppableId="images">
                    {(provided) => (
                        <ul className='images' {...provided.droppableProps} ref={provided.innerRef}>
                            {props.images.map((img, ind) => {
                                return (
                                    <Draggable key={ind} draggableId={ind}>
                                        {(provided) => (
                                            <TransformWrapper
                                                defaultScale={1}
                                                defaultPositionX={1}
                                                defaultPositionY={1}
                                            >
                                                <TransformComponent>                                              
                                                        <li key={ind} {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef}>
                                                            <img
                                                                style={styles.image}
                                                                src={require(`../images/${img}`).default}
                                                                alt=""
                                                            />
                                                        </li>
                                                </TransformComponent>
                                            </TransformWrapper>
                                        )}
                                    </Draggable>
                                )
                            })}
                </ul>
            )}
            </Droppable>
            </DragDropContext>
        </div>
    )
}
} */
