import React, { createRef } from "react";
import {Streamlit, StreamlitComponentBase, withStreamlitConnection, ComponentProps} from "streamlit-component-lib";
import WordCloud from "react-d3-cloud";
import {Word} from "react-d3-cloud/lib/WordCloud";
import Tooltip from "./Tooltip";

interface WordCloudComponentProps {
    data: { text: string; value: number, topic: string }[];
    width?: number,
    height?: number,
}

interface WordCloudComponentState {
    tooltip: {
        text: string;
        topic: string
        x: number;
        y: number;
        visible: boolean;
    } | null;
}

class WordCloudComponent extends StreamlitComponentBase<WordCloudComponentState, WordCloudComponentProps> {
    wordCloudRef = createRef<HTMLDivElement>();
    constructor(props: ComponentProps) {
        super(props);
        this.state = {tooltip: null};
    }

    componentDidMount() {
        Streamlit.setComponentReady();
    }

    handleMouseOver = (event: MouseEvent, word:  Word) => {
        const rect = this.wordCloudRef.current?.getBoundingClientRect();
        this.setState({
            tooltip: {
                text: word.text,
                // @ts-ignore
                topic: word.topic,
                x: event.clientX - (rect?.left || 0),
                y: event.clientY - (rect?.top || 0),
                visible: true
            }
        });
    };




    render() {
        const {data, width, height} = this.props.args;
        const {tooltip} = this.state;

        return (
            <div  ref={this.wordCloudRef}>
                <WordCloud
                    data={data}
                    width={width}
                    height={height}
                    fontSize={(word: Word) => Math.log2(word.value) * 10}
                    rotate={word => word.value % 5}
                    random= {() => 0}
                    onWordMouseOver={this.handleMouseOver}
                />
                {tooltip && tooltip.visible &&
                    <Tooltip text={tooltip.text || ''} topic={tooltip.topic} x={tooltip.x} y={tooltip.y} visible={tooltip.visible}/>}

            </div>
        );
    }
}

export default withStreamlitConnection(WordCloudComponent);
