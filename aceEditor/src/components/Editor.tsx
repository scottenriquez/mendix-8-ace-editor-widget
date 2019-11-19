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
    onUpdate?: (value: string) => void;
}

export class Editor extends Component<InputProps> {
    private readonly handleChange = this.onChange.bind(this);

    render(): ReactNode {
        const className = classNames("form-control", this.props.className);
        return (
            <div className={className} style={this.props.style} tabIndex={this.props.tabIndex}>
                <AceEditor
                    mode="csharp"
                    theme="solarized_dark"
                    name="editor"
                    value={this.props.value}
                    editorProps={{ $blockScrolling: true }}
                    width="100%"
                    onChange={this.handleChange}
                />
            </div>
        );
    }

    private onChange(newValue: string): void {
        if (this.props.onUpdate) {
            this.props.onUpdate(newValue);
        }
    }
}
