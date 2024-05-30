import Image from "next/image";
import styles from "./css/page.module.css";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import RecentProjects from "./components/RecentProjects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <AboutMe />
      <RecentProjects />
      <Footer />
    </main>
  );
}
