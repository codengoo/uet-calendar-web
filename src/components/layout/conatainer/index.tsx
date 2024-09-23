import React from "react";

interface IContainerProps {
    children: React.ReactNode;
    id?: string;
}

export default function Container({ children, id }: IContainerProps) {
    return (
        <section
            id={id}
            className="container relative mx-auto min-h-screen w-screen p-5 before:absolute before:left-[50px] before:top-[50px] before:w-full before:bg-[url('/hero-pattern.svg')] after:absolute after:bottom-[50px] after:right-[50px] after:w-full after:bg-[url('/hero-pattern.svg')] sm:before:h-[600px] sm:before:w-[600px] sm:after:h-[600px] sm:after:w-[600px]"
        >
            {children}
        </section>
    );
}
