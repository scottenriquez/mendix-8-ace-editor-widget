import { Component, CSSProperties, ReactNode, createElement } from "react";
import AceEditor from "react-ace";
import classNames from "classnames";
import "ace-builds/src-noconflict/mode-csharp";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-solarized_dark";
import "ace-builds/src-noconflict/theme-twilight";

export interface InputProps {
    value: string;
    className?: string;
    index?: number;
    style?: CSSProperties;
    tabIndex?: number;
    onUpdate?: (value: string) => void;
}

export class Editor extends Component<InputProps> {
    state = {
        language: "csharp",
        theme: "solarized_dark"
    };

    render = (): ReactNode => {
        const className = classNames("form-control", this.props.className);
        return (
            <div className={className} style={this.props.style} tabIndex={this.props.tabIndex}>
                <label>Language</label>
                <select id="language-dropdown" value={this.state.language} onChange={this.handleEditorLanguageChange}>
                    <option value="csharp">C#</option>
                    <option value="java">Java</option>
                </select>
                <label>Theme</label>
                <select id="theme-dropdown" value={this.state.theme} onChange={this.handleEditorThemeChange}>
                    <option value="solarized_dark">Solarized Dark</option>
                    <option value="twilight">Twilight</option>
                </select>
                <AceEditor
                    mode={this.state.language}
                    theme={this.state.theme}
                    name="editor"
                    value={this.props.value}
                    editorProps={{ $blockScrolling: true }}
                    width="100%"
                    onChange={this.handleChange}
                />
            </div>
        );
    };

    onChange = (newValue: string): void => {
        if (this.props.onUpdate) {
            this.props.onUpdate(newValue);
        }
    };

    private readonly handleChange = this.onChange.bind(this);

    handleEditorLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        this.setState({ language: event.target.value });
    };

    handleEditorThemeChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        this.setState({ theme: event.target.value });
    };
}
