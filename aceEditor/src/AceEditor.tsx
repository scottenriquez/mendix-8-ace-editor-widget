import { Component, ReactNode, createElement } from "react";
import { hot } from "react-hot-loader/root";
import { AceEditorContainerProps } from "../typings/AceEditorProps";
import { Editor } from "./components/Editor";
import "./ui/AceEditor.css";

class AceEditor extends Component<AceEditorContainerProps> {
    private readonly onUpdateHandle = this.onUpdate.bind(this);

    render(): ReactNode {
        const value = this.props.code.value || "";
        return (
            <Editor
                value={value}
                style={this.props.style}
                className={this.props.class}
                tabIndex={this.props.tabIndex}
                onUpdate={this.onUpdateHandle}
            />
        );
    }

    private onUpdate(value: string): void {
        this.props.code.setValue(value);
    }
}

export default hot(AceEditor);
