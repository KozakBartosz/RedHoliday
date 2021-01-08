import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { Page } from '../components/Page';
import { backVariants } from '../transition';

interface HomeProps {}

export const Home = ({}: HomeProps) => {
    return (
        <Page>
            <motion.div initial="exit" animate="enter" exit="exit">
                <motion.div variants={backVariants}>
                    <h2>Home</h2>
                    <nav>
                        <Link to="/foo">
                            <motion.span layoutId="foo">Foo</motion.span>
                        </Link>
                        <Link to="/bar">
                            <motion.span layoutId="bar">Bar</motion.span>
                        </Link>
                    </nav>
                </motion.div>
            </motion.div>
        </Page>
    );
};
