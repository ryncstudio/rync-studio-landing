import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  name?: string;
  type?: string;
}

export default function SEO({ 
  title = "Rync Studio — Creative & Dev Studio",
  description = "Rync Studio is a modern creative studio building websites, apps, and digital systems with precision and purpose.",
  name = "Rync Studio",
  type = "website"
}: SEOProps) {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Tags
    const updateMeta = (nameAttr: string, content: string) => {
      let element = document.querySelector(`meta[name="${nameAttr}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", nameAttr);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const updateProperty = (propAttr: string, content: string) => {
      let element = document.querySelector(`meta[property="${propAttr}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", propAttr);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    updateMeta("description", description);
    
    // Facebook
    updateProperty("og:type", type);
    updateProperty("og:title", title);
    updateProperty("og:description", description);
    
    // Twitter
    updateMeta("twitter:creator", name);
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);

  }, [title, description, name, type]);

  return null;
}
