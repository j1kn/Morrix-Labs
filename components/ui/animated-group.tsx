'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedGroupProps {
    children: ReactNode;
    className?: string;
    variants?: {
        container?: Record<string, unknown>;
        item?: Record<string, unknown>;
    };
}

export function AnimatedGroup({ children, className, variants }: AnimatedGroupProps) {
    return (
        <motion.div
            className={className}
            variants={variants?.container as never}
            initial="hidden"
            animate="visible"
        >
            {Array.isArray(children)
                ? children.map((child, index) => (
                      <motion.div key={index} variants={variants?.item as never}>
                          {child}
                      </motion.div>
                  ))
                : children}
        </motion.div>
    );
}
