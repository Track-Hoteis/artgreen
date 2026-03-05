import { motion } from 'framer-motion';
import type { CSSProperties, ReactNode } from 'react';

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export default function FadeInUp({
  children,
  delay = 0,
  className,
  style,
}: FadeInUpProps) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
}
