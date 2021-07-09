import Card from "@components/Card";
import Styles from "@styles/Blogs.module.css";
import { motion } from "framer-motion";
export default function blogs({ items }) {
  return (
    <motion.main
      className={Styles.main}
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <header>
        <h1
          style={{
            color: "var(--color-secondary)",
            fontSize: "90px",
            padding: "20px 0",
            margin: "0 0",
          }}
        >
          /blog
        </h1>
      </header>

      <div className={Styles.cards}>
        {items?.length &&
          items.map((i) => {
            return (
              <Card key={i.title} title={i.title} date={i.date} link={i.slug} />
            );
          })}
      </div>
    </motion.main>
  );
}
export async function getStaticProps() {
  const portfolioData = await import(`../../Blogs.json`);

  return {
    props: {
      items: portfolioData.blogs,
    },
  };
}
