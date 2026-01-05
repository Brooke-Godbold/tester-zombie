import CodeMirror, { ViewUpdate } from "@uiw/react-codemirror";
import { darculaInit } from '@uiw/codemirror-theme-darcula';
import { json } from '@codemirror/lang-json';
import React from "react";

type JsonContentProps = {
    readonly: boolean;
    value: string;
    updateValue: (val: string) => void;
    caret: boolean;
}

export function JsonContent({ readonly, value, updateValue, caret }: JsonContentProps) {
    const onChange = React.useCallback((val: string, viewUpdate: ViewUpdate) => {
        updateValue(val);
    }, [])

    return (
        <CodeMirror
            value={value}
            onChange={onChange}
            height="100%"
            width="100%"
            readOnly={readonly}
            minHeight="100%"
            style={{ height: "100%" }}
            extensions={[json()]}
            theme={darculaInit({
                settings: {
                    fontSize: "1.6rem",
                    fontFamily: "HauntedHillRegular",
                    caret: caret ? "auto" : "transparent",
                }
            })}
        />
    )
}