import logo from './logo.svg';
import styles from './App.module.css';
import { render } from "solid-js/web";

function App() {
  const articles = [
    {
      title: "5 Tips for Finding the Perfect Tenant",
      excerpt: "Learn the best practices for screening tenants and finding the right fit for your property.",
      image: "https://picsum.photos/seed/1/600/400",
      link: "#",
    },
    {
      title: "The Pros and Cons of Renting to Students",
      excerpt: "Discover the benefits and challenges of renting to college students, and how to make it work for you.",
      image: "https://picsum.photos/seed/2/600/400",
      link: "#",
    },
    {
      title: "Maximizing Your Rental Property's ROI",
      excerpt: "Get expert advice on how to increase your rental income and make the most of your investment property.",
      image: "https://picsum.photos/seed/3/600/400",
      link: "#",
    },
  ];

  const socialMediaLinks = [
    {
      name: "Facebook",
      icon: "https://picsum.photos/seed/4/50/50",
      link: "#",
    },
    {
      name: "Instagram",
      icon: "https://picsum.photos/seed/5/50/50",
      link: "#",
    },
    {
      name: "Pinterest",
      icon: "https://picsum.photos/seed/6/50/50",
      link: "#",
    },
    {
      name: "Twitter",
      icon: "https://picsum.photos/seed/7/50/50",
      link: "#",
    },
  ];

  return (
    <div class="container">
      <header class="header">
        <a href="/" class="logo">
          <img src="https://via.placeholder.com/150x50.png?text=HomeHunt" alt="HomeHunt Logo" />
        </a>
        <nav class="navigation-menu">
          <ul>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>
      <section class="hero">
      <img src="https://images.unsplash.com/photo-1494526585095-c41746248156?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="Hero Image" />
        <h1 class="headline">Find your next tenant</h1>
        <p class="subheadline">A smarter way to rent your home</p>
        <a href="#" class="custom-button">I'm a Tenant</a>
        <a href="#" class="custom-button">I'm a Landlord</a>
      </section>
      <section class="featured-articles">
        <h2 class="section-title">Latest Articles</h2>
        <div class="article-grid">
          {articles.map((article) => (
            <a href={article.link} class="article">
              <img src={article.image} alt={article.title} />
              <h3 class="article-title">{article.title}</h3>
              <p class="article-excerpt">{article.excerpt}</p>
              <button class="custom-button">Read More</button>
            </a>
          ))}
        </div>
      </section>
      <section class="newsletter-signup">
        <h2 class="section-title">Stay Updated</h2>
        <p class="description">Sign up for our newsletter to receive exclusive content and special offers.</p>
      </section>
    </div>
  )
}

export default App;
