import Highlight, { defaultProps } from "prism-react-renderer";
import classNames from "classnames";
import theme from 'prism-react-renderer/themes/palenight';

export function Code({children}) {
    return <Highlight {...defaultProps} theme={theme} code={children.trim()} language="java">
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={classNames(className, "mb-7 p-5 rounded-md overflow-scroll")} style={style}>
                {tokens.map((line, i) => (
                    <div {...getLineProps({ line, key: i })}>
                        {line.map((token, key) => (
                            <span {...getTokenProps({ token, key })} />
                        ))}
                    </div>
                ))}
            </pre>
        )}
    </Highlight>
}