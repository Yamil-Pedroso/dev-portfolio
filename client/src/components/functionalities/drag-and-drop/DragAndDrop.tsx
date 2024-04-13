import { useState, useEffect } from "react"
import { Container, WidgetWrapper, Widget, DropZone, DragItem, PercentBar, WidgetBasketWrapper, Percent, DropZoneWrapper, BtnWrapper } from "./styles"
import {
    apple, banana, grape, mango, waterMelon
} from "./images"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface IFruit {
    id: number;
    thumb: string;
}

const fruits = [
    {
        id: 1,
        thumb: apple,
    },
    {
        id: 2,
        thumb: banana,
    },
    {
        id: 3,
        thumb: grape,
    },
    {
        id: 4,
        thumb: mango,
    },
    {
        id: 5,
        thumb: waterMelon,
    },
]

const DragAndDrop: React.FC = () => {
    const [widgets, setWidgets] = useState<IFruit[]>([])
    const [fillPercent, setFillPercent] = useState<number>(0)

    const handleOnDrag = (e: React.DragEvent<HTMLDivElement>, widgetType: IFruit) => {
        e.dataTransfer.setData("widgetType", JSON.stringify(widgetType))
    }

    const handleOnDrop = (e: React.DragEvent<HTMLDivElement>) => {
        const widgetType = JSON.parse(e.dataTransfer.getData("widgetType")) as IFruit
        
        if (widgets.length < 5) {
            setWidgets([...widgets, widgetType])
        } else {
            toast.error("Basket is full, please remove some fruits 😕", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
            });
        }
    }

    //const handleBasketFull = () => {
    //    const notify = () => toast("Yes, your basket has been filled! 😀")
    //    if (widgets.length === 5) {
    //        toast(notify, {
    //            position: "bottom-left",
    //            autoClose: 5000,
    //            hideProgressBar: false,
    //            closeOnClick: true,
    //            draggable: true,
    //        });
    //    }
    //}

    useEffect(() => {
        const percent = Math.round((widgets.length / 5) * 100);
        setFillPercent(percent);
        
    }, [widgets])

    const handleOnDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault()
    }

    const handleOnClick = () => {
        if(widgets.length === 0) {
            
            toast.error("Basket is already empty, please add some fruits 😏", {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
            });
        } else {
            setWidgets([])
        }
    }


  return (
    <Container>
        <ToastContainer />
        <WidgetBasketWrapper>
          <WidgetWrapper>
              <Widget draggable onDragStart={(e) => handleOnDrag(e, fruits[0])}>
                <img src={fruits[0].thumb} alt="apple" width={32}/>
              </Widget>
              <Widget draggable onDragStart={(e) => handleOnDrag(e, fruits[1])}>
                    <img src={fruits[1].thumb} alt="mango" width={32}/>
              </Widget>
              <Widget draggable onDragStart={(e) => handleOnDrag(e, fruits[2])}>
                    <img src={fruits[2].thumb} alt="banana" width={32}/>
              </Widget>
              <Widget draggable onDragStart={(e) => handleOnDrag(e, fruits[3])}>
                   <img src={fruits[3].thumb} alt="grape" width={32}/>
              </Widget>
              <Widget draggable onDragStart={(e) => handleOnDrag(e, fruits[4])}>
                    <img src={fruits[4].thumb} alt="waterMelon" width={32}/>
              </Widget>
          </WidgetWrapper>
          <DropZoneWrapper>
            <DropZone onDrop={handleOnDrop} onDragOver={handleOnDragOver}>
                <h2>
                    Fruits Basket
                </h2>
                {widgets.map((widget, index) => (
                    <DragItem key={index}>
                        <img src={widget.thumb} alt="fruit" width={32}/>
                    </DragItem>
                ))}
            </DropZone>
            <BtnWrapper>
                <button onClick={handleOnClick}>Clear Basket</button>
            </BtnWrapper>
          </DropZoneWrapper>
        </WidgetBasketWrapper>

        <PercentBar>
            <Percent fillPercent={fillPercent}>
                <span>{fillPercent}%</span>
            </Percent>
        </PercentBar>
    </Container>
  )
}

export default DragAndDrop