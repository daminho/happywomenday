import { useEffect, useState } from "react";

function FlowerWing(props) {

    let height = 120 * props.scale
    let width = 50 * props.scale
    let bottom = -70 * props.scale

    return (
        <div style = {{
            backgroundColor: "#ebdd21",
            borderTopLeftRadius: "16px",
            borderTopRightRadius: "16px",
            height: `${height}px`,
            width: `${width}px`,
            zIndex: props.fIndex * 100 + props.id,
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            bottom: `${bottom}px`,
            transform: `rotate(${props.angle}deg)`,
            transformOrigin: 'bottom center',
            border: "solid",
            borderWidth: "0.5px",
            borderColor: "#c4bb39"
        }}></div>
    )
}

function FlowerCenter(props) {

    let height = 100 * props.scale
    let width = height
    let bottom = -20 * props.scale

    return (
        <div style = {{
            bottom: `${bottom}px`,
            position: "relative",
            backgroundColor: "#36352b",
            borderRadius: "50%",
            height: `${height}px`,
            width: `${width}px`,
            zIndex: props.fIndex * 100 + 50,
            marginLeft: "auto",
            marginRight: "auto"
        }}>

        </div>
    )
}

export default function Flowers(props) {
    let scale = (Math.floor(Math.random() * 50) / 100) + 0.5
    let height = 200 * scale;
    let width = 40 * scale;


    const [animateFlower, setAnimateFlower] = useState(false)
    const [animateBody, setAnimateBody] = useState(true)

    useEffect(() => {

    }, [])

    const ids = Array.from({length: 10}, (_, i) => i)

    let wings = ids.map((id) => <FlowerWing scale = {scale} fIndex = {props.fIndex} id = {id} angle = {id * (360 / (ids.length))}/>)


    return(
        <div style = {{display:"absolute", textAlign: "center", height: `${350 * scale}px`, width: `${120 * scale}px`, zIndex: `${100 * props.fIndex}`}}>
            <div style = {{position: "absolute", transform: `translate(${35 * scale}px, ${0}px)`}}>
                {wings}
            </div>
            <FlowerCenter scale = {scale} fIndex = {props.fIndex}/>
            <div style = {{width: `${width}px`, height: `${height}px`, backgroundColor: "#1e520d", marginLeft: "auto",
            marginRight: "auto"}}/>
        </div>
    );

}