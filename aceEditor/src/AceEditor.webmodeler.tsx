import { Component, ReactNode, createElement } from "react";
import { AceEditorPreviewProps } from "../typings/AceEditorProps";
import { Editor } from "./components/Editor";

declare function require(name: string): string;

export class preview extends Component<AceEditorPreviewProps> {
    render = (): ReactNode => {
        return <Editor value={this.props.code} />;
    };
}

export const getPreviewCss = (): string => {
    return require("./ui/AceEditor.css");
};
