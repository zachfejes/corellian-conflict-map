import React from "react";
import "./Card.css";

export const CardContent = (props) => {
    let { className, children } = props;
    let _className = "content " + (className ? className : "");

    return(
        <section className={_className}>
            {children}
        </section>
    );
}

export const CardFooter = (props) => {
    let { className, children } = props;
    let _className = "footer " + (className ? className : "");

    return(
        <section className={_className}>
            {children}
        </section>
    );
}

export const Card = (props) => {
    let { className, children, content, footer } = props;
    let _className = "card " + (className ? className : className);

    if(content && footer) {
        return(
            <div className={_className}>
                <CardContent>
                    {content}
                </CardContent>
                <CardFooter>
                    {footer}
                </CardFooter>
            </div>
        );
    }
    else {
        return(
            <div className={_className}>
                {children}
            </div>
        );
    }
}