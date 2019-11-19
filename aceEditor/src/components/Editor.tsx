import { Component, CSSProperties, ReactNode, createElement } from "react";
import AceEditor from "react-ace";
import classNames from "classnames";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/theme-solarized_dark";

export interface InputProps {
    value: string;
    className?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
}

export class Editor extends Component<InputProps> {    
    render(): ReactNode {
        const className = classNames("form-control", this.props.className);
        return (<div className={className} style={this.props.style} tabIndex={this.props.tabIndex}>
            <AceEditor
                mode="csharp"
                theme="solarized_dark"
                name="editor"
                value={this.props.value}
                editorProps={{ $blockScrolling: true }}
            />
        </div>);
    }
}