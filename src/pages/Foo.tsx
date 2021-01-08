import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../components/Page';
import { backVariants } from '../transition';

interface FooProps {}

export const Foo = ({}: FooProps) => {
    return (
        <Page>
            <motion.div initial="exit" animate="enter" exit="exit">
                <h1 style={{ textAlign: 'left' }}>
                    <motion.span layoutId="foo">Foo</motion.span>
                </h1>

                <motion.div variants={backVariants}>
                    <Link to="/">← Back</Link>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellendus quasi optio
                        ullam eum possimus fugit. Corrupti suscipit est dolorum aperiam illum in doloremque iusto
                        quibusdam ea? Reprehenderit, tempora optio. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Rerum, minima magni? Veniam, debitis. Earum doloribus architecto aspernatur delectus
                        laboriosam odit, sit, eius et cupiditate, qui est esse. Minima, quis nam?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae repellendus quasi optio
                        ullam eum possimus fugit. Corrupti suscipit est dolorum aperiam illum in doloremque iusto
                        quibusdam ea? Reprehenderit, tempora optio. Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Rerum, minima magni? Veniam, debitis. Earum doloribus architecto aspernatur delectus
                        laboriosam odit, sit, eius et cupiditate, qui est esse. Minima, quis nam?
                    </p>
                </motion.div>
            </motion.div>
        </Page>
    );
};
