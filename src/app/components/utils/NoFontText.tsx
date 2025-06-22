interface NoFontTextProps {
    text: string;
    classes: string;
}

const NoFontText: React.FC<NoFontTextProps> = ({ text, classes }) => {
    return (
        <span className={classes} style={{ fontFamily: "seasons" }}>
            {text}
        </span>
    );
}

export default NoFontText;